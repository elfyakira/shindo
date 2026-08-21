"use client";

import { useState } from "react";
import Link from "next/link";
import { company, contact } from "@/lib/site";
import { events } from "@/lib/analytics";
import { FadeInUp } from "@/components/animations";
import WaveTitle from "@/components/WaveTitle";
import WaveButton from "@/components/WaveButton";
import DecoShape from "@/components/DecoShape";

// ============================================================
const CONTACT_TYPES = [
  { id: "general" as const, label: "一般お問い合わせ" },
  { id: "recruit" as const, label: "採用お問い合わせ" },
];

type ContactType = (typeof CONTACT_TYPES)[number]["id"];

// ============================================================
function PageHeader() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center bg-[#16a637] overflow-visible">
      <DecoShape color="red" width={180} top="14%" right="6%" zIndex={15} />
      <DecoShape color="white" width={140} bottom="-30px" left="6%" delay={0.15} zIndex={15} />
      <DecoShape color="green" width={110} top="65%" right="14%" delay={0.2} zIndex={15} />
      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <WaveTitle en="Contact" ja="お問い合わせ" variant="dark" />
      </div>
    </section>
  );
}

function ContactForm() {
  const [selectedType, setSelectedType] = useState<ContactType>("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const agree = formData.get("agree");

    if (!name?.trim()) newErrors.name = "お名前・会社名を入力してください";
    if (!email?.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "メールアドレスの形式が正しくありません";
    }
    if (!message?.trim()) {
      newErrors.message = "お問い合わせ内容を入力してください";
    } else if (message.length < 10) {
      newErrors.message = "10文字以上でご入力ください";
    }
    if (!agree) newErrors.agree = "プライバシーポリシーへの同意が必要です";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: selectedType,
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const data = await res.json();
      if (!data.success) {
        const mapped: Record<string, string> = {};
        (data.errors || []).forEach((er: { field: string; message: string }) => {
          mapped[er.field] = er.message;
        });
        setErrors(
          Object.keys(mapped).length > 0
            ? mapped
            : { general: data.message || "送信に失敗しました。" }
        );
        return;
      }
      events.formSubmit("shindo_hp_contact");
      setIsSubmitted(true);
    } catch {
      setErrors({ general: "送信中にエラーが発生しました。時間をおいて再度お試しください。" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-6">
            ありがとうございます
          </h2>
          <p className="text-[15px] text-black leading-[1.8] mb-10">
            お問い合わせを受け付けました。<br />担当者より折り返しご連絡いたします。
          </p>
          <WaveButton href="/" text="トップページへ" variant="dark" />
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-visible">
      <DecoShape color="green" width={340} top="-140px" right="-60px" zIndex={3} />
      <DecoShape color="red" width={100} top="40%" left="-50px" delay={0.1} zIndex={3} />
      <DecoShape color="green" width={220} bottom="-160px" right="8%" delay={0.2} zIndex={3} className="hidden lg:block" />
      <div className="relative max-w-container mx-auto px-6 lg:px-12 z-10">
        <FadeInUp className="mb-12">
          <p className="text-[15px] text-black leading-[1.8]">
            お気軽にお問い合わせください。
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="bg-bg-light p-6 lg:p-12 rounded-lg max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <div className="rounded border border-red-600 bg-red-50 px-4 py-3 text-[14px] text-red-700">
                  {errors.general}
                </div>
              )}

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">お問い合わせ種別</span>
                  <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">必須</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {CONTACT_TYPES.map((type) => (
                    <label
                      key={type.id}
                      className={`flex-1 min-w-[140px] cursor-pointer rounded-full border px-5 py-3 text-center text-sm lg:text-[15px] transition-colors ${
                        selectedType === type.id
                          ? "bg-[#16a637] text-white border-[#16a637]"
                          : "bg-white text-text-primary border-gray-200 hover:border-[#16a637]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="type"
                        value={type.id}
                        checked={selectedType === type.id}
                        onChange={() => setSelectedType(type.id)}
                        className="sr-only"
                      />
                      {type.label}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">お名前・会社名</span>
                  <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">必須</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="例）株式会社サンプル 山田太郎"
                  className={`w-full h-12 px-4 border rounded text-base ${errors.name ? "border-red-600" : "border-gray-200"} focus:border-[#16a637] focus:outline-none transition-colors`}
                />
                {errors.name && <p className="mt-1 text-[13px] text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">電話番号</span>
                  <span className="text-xs text-text-secondary bg-gray-200 px-1.5 py-0.5 rounded">任意</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  placeholder="例）000-000-0000"
                  className={`w-full h-12 px-4 border rounded text-base ${errors.phone ? "border-red-600" : "border-gray-200"} focus:border-[#16a637] focus:outline-none transition-colors`}
                />
                {errors.phone && <p className="mt-1 text-[13px] text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">メールアドレス</span>
                  <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">必須</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="例）info@example.com"
                  className={`w-full h-12 px-4 border rounded text-base ${errors.email ? "border-red-600" : "border-gray-200"} focus:border-[#16a637] focus:outline-none transition-colors`}
                />
                {errors.email && <p className="mt-1 text-[13px] text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">お問い合わせ内容</span>
                  <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">必須</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={
                    selectedType === "recruit"
                      ? "ご希望の職種・自己PRなどをご記入ください"
                      : "ご相談内容、ご質問などをご記入ください"
                  }
                  className={`w-full px-4 py-3 border rounded text-base resize-y ${errors.message ? "border-red-600" : "border-gray-200"} focus:border-[#16a637] focus:outline-none transition-colors`}
                />
                {errors.message && <p className="mt-1 text-[13px] text-red-600">{errors.message}</p>}
              </div>

              <div className="pt-4">
                <label className="flex items-start gap-2">
                  <input type="checkbox" name="agree" className={`mt-1 w-4 h-4 ${errors.agree ? "ring-2 ring-red-600" : ""}`} />
                  <span className="text-sm text-text-primary">
                    <Link href="/privacy" target="_blank" className="text-[#16a637] underline hover:opacity-80">プライバシーポリシー</Link>に同意する
                  </span>
                </label>
                {errors.agree && <p className="mt-1 text-[13px] text-red-600">{errors.agree}</p>}
              </div>

              <div className="pt-6 flex justify-center lg:justify-start">
                <WaveButton
                  type="submit"
                  disabled={isSubmitting}
                  text={isSubmitting ? "送信中..." : "送信する"}
                  variant="dark"
                  className="!w-64 lg:!w-72"
                />
              </div>
            </form>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

function PhoneSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-bg-light overflow-visible">
      <DecoShape color="green" width={300} top="-120px" right="-60px" zIndex={3} className="hidden lg:block" />
      <DecoShape color="red" width={110} top="50%" left="-40px" delay={0.1} zIndex={3} className="hidden lg:block" />
      <DecoShape color="green" width={220} bottom="-140px" right="10%" delay={0.2} zIndex={3} className="hidden lg:block" />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <WaveTitle en="Phone" ja="お電話でのお問い合わせ" />
          <a
            href={`tel:${contact.phoneTel || contact.phone?.replace(/-/g, "")}`}
            className="block text-[28px] lg:text-[40px] font-bold text-[#16a637] mt-6 mb-2"
          >
            {contact.phoneFormatted || contact.phone || "000-000-0000"}
          </a>
          <p className="text-sm text-black">
            受付時間: {contact.hours || "9:00〜18:00"}
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader />
      <ContactForm />
      <PhoneSection />
    </>
  );
}
