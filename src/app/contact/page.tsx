"use client";

import { useState } from "react";
import Link from "next/link";
import { company, contact } from "@/lib/site";
import { FadeInUp } from "@/components/animations";

// ============================================================
const CONTACT_TYPES = [
  { id: "service1" as const, label: "サービス1のご相談" },
  { id: "service2" as const, label: "サービス2のご相談" },
  { id: "recruit" as const, label: "採用に関するお問い合わせ" },
  { id: "other" as const, label: "その他のお問い合わせ" },
];

type ContactType = (typeof CONTACT_TYPES)[number]["id"];

// ============================================================
function PageHeader() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center bg-[#1E5F4A]">
      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <h1 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">Contact</h1>
        <p className="text-sm text-white/80 tracking-wider">お問い合わせ</p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [selectedType, setSelectedType] = useState<ContactType>("service1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const agree = formData.get("agree");

    if (!name?.trim()) newErrors.name = "お名前を入力してください";
    if (!phone?.trim()) newErrors.phone = "電話番号を入力してください";
    if (!email?.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "メールアドレスの形式が正しくありません";
    }
    if (selectedType !== "recruit") {
      if (!message?.trim()) {
        newErrors.message = "お問い合わせ内容を入力してください";
      } else if (message.length < 10) {
        newErrors.message = "10文字以上でご入力ください";
      }
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
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-6">
            ありがとうございます
          </h2>
          <p className="text-[15px] text-text-secondary leading-[1.8] mb-10">
            お問い合わせを受け付けました。<br />担当者より折り返しご連絡いたします。
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-between bg-[#1E5F4A] text-white text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
          >
            <span>トップページへ</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12">
          <p className="text-[15px] text-text-secondary leading-[1.8]">
            お気軽にお問い合わせください。
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-10">
            {CONTACT_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-4 lg:p-5 rounded-full text-sm lg:text-[15px] text-center transition-colors ${
                  selectedType === type.id
                    ? "bg-[#1E5F4A] text-white"
                    : "bg-white text-text-primary border border-gray-200 hover:border-[#1E5F4A]"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="bg-bg-light p-6 lg:p-12 rounded-lg max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">
                    {selectedType === "recruit" ? "お名前" : "お名前 / 会社名"}
                  </span>
                  <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">必須</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={selectedType === "recruit" ? "例）山田 太郎" : "例）株式会社サンプル 山田太郎"}
                  className={`w-full h-12 px-4 border rounded text-base ${errors.name ? "border-red-600" : "border-gray-200"} focus:border-[#1E5F4A] focus:outline-none transition-colors`}
                />
                {errors.name && <p className="mt-1 text-[13px] text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">電話番号</span>
                  <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">必須</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  placeholder="例）000-000-0000"
                  className={`w-full h-12 px-4 border rounded text-base ${errors.phone ? "border-red-600" : "border-gray-200"} focus:border-[#1E5F4A] focus:outline-none transition-colors`}
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
                  className={`w-full h-12 px-4 border rounded text-base ${errors.email ? "border-red-600" : "border-gray-200"} focus:border-[#1E5F4A] focus:outline-none transition-colors`}
                />
                {errors.email && <p className="mt-1 text-[13px] text-red-600">{errors.email}</p>}
              </div>

              {selectedType !== "recruit" && (
                <div>
                  <label className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-text-primary">ご住所</span>
                    <span className="text-xs text-text-secondary bg-gray-200 px-1.5 py-0.5 rounded">任意</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="例）東京都渋谷区..."
                    className="w-full h-12 px-4 border border-gray-200 rounded text-base focus:border-[#1E5F4A] focus:outline-none transition-colors"
                  />
                </div>
              )}

              {selectedType === "recruit" && (
                <div>
                  <label className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-text-primary">希望職種</span>
                    <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">必須</span>
                  </label>
                  <select
                    name="jobType"
                    className="w-full h-12 px-4 border border-gray-200 rounded text-base focus:border-[#1E5F4A] focus:outline-none transition-colors"
                  >
                    <option value="general">一般職</option>
                    <option value="other">その他</option>
                  </select>
                </div>
              )}

              <div>
                <label className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-text-primary">
                    {selectedType === "recruit" ? "簡単な自己PR" : "お問い合わせ内容"}
                  </span>
                  {selectedType === "recruit" ? (
                    <span className="text-xs text-text-secondary bg-gray-200 px-1.5 py-0.5 rounded">任意</span>
                  ) : (
                    <span className="text-xs text-white bg-red-600 px-1.5 py-0.5 rounded">必須</span>
                  )}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={selectedType === "recruit" ? "100文字程度でOKです" : "ご相談内容、ご質問などをご記入ください"}
                  className={`w-full px-4 py-3 border rounded text-base resize-y ${errors.message ? "border-red-600" : "border-gray-200"} focus:border-[#1E5F4A] focus:outline-none transition-colors`}
                />
                {errors.message && <p className="mt-1 text-[13px] text-red-600">{errors.message}</p>}
              </div>

              <div className="pt-4">
                <label className="flex items-start gap-2">
                  <input type="checkbox" name="agree" className={`mt-1 w-4 h-4 ${errors.agree ? "ring-2 ring-red-600" : ""}`} />
                  <span className="text-sm text-text-primary">
                    <Link href="/privacy" target="_blank" className="text-[#1E5F4A] underline hover:opacity-80">プライバシーポリシー</Link>に同意する
                  </span>
                </label>
                {errors.agree && <p className="mt-1 text-[13px] text-red-600">{errors.agree}</p>}
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-between px-8 py-3 rounded-full text-sm font-medium w-56 transition-opacity ${
                    isSubmitting
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#1E5F4A] text-white hover:opacity-90"
                  }`}
                >
                  <span>{isSubmitting ? "送信中..." : "送信する"}</span>
                  <span>→</span>
                </button>
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
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Phone</h2>
          <span className="section-label">お電話でのお問い合わせ</span>
          <a
            href={`tel:${contact.phoneTel || contact.phone?.replace(/-/g, "")}`}
            className="block text-[28px] lg:text-[40px] font-bold text-[#1E5F4A] mt-6 mb-2"
          >
            {contact.phoneFormatted || contact.phone || "000-000-0000"}
          </a>
          <p className="text-sm text-text-secondary">
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
