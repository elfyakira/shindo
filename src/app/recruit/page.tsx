"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FadeInUp } from "@/components/animations";

// ============================================================
// Hero Section
// ============================================================
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/team_photo.jpg"
          alt="RECRUIT"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <h1
          className={`text-[40px] lg:text-[72px] font-bold text-white tracking-wider transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          RECRUIT
        </h1>
      </div>
    </section>
  );
}

// ============================================================
// Message Section
// ============================================================
function MessageSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary leading-[1.6] mb-8">
              地域のインフラを支える仕事に、<br />
              あなたも参加しませんか。
            </h2>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mb-6">
              信藤建設は、三重県四日市市を拠点に、公共事業を中心とした地域インフラ整備に取り組んでいます。
            </p>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
              河川護岸、道路舗装、上下水道工事など、目に見えにくいところで地域を支える仕事を、一緒にやりませんか。
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Join Team Section
// ============================================================
function JoinTeamSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/mentoring_scene.jpg"
          alt="Join our team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1B5E3A]/80" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-center text-white">
          <p className="text-[40px] lg:text-[64px] font-bold leading-[1.2] mb-8">
            Join our team
          </p>
          <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2] mb-10">
            私たちは、地域のインフラを支える仲間を募集しています。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#8BC34A] text-white px-10 py-4 rounded font-medium hover:opacity-90 transition-opacity"
          >
            エントリーする
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Requirements Section
// ============================================================
const REQUIREMENTS = {
  newGrad: {
    title: "新卒採用",
    items: [
      { label: "募集職種", value: "土木施工管理" },
      { label: "応募資格", value: "高校卒業以上" },
      { label: "給与", value: "当社規定による" },
      { label: "勤務地", value: "三重県四日市市" },
      { label: "勤務時間", value: "8:00〜17:00" },
      { label: "休日", value: "日曜、祝日、第2・4土曜日、他" },
    ],
  },
  midCareer: {
    title: "中途採用",
    items: [
      { label: "募集職種", value: "土木施工管理" },
      { label: "応募資格", value: "経験者優遇・資格保有者歓迎" },
      { label: "給与", value: "経験・能力を考慮の上、決定" },
      { label: "勤務地", value: "三重県四日市市" },
      { label: "勤務時間", value: "8:00〜17:00" },
      { label: "休日", value: "日曜、祝日、第2・4土曜日、他" },
    ],
  },
};

function RequirementsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-center mb-12 lg:mb-16">
          <span className="section-label">募集要項</span>
          <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary">Requirements</h2>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <FadeInUp delay={0.1}>
            <h3 className="text-xl font-semibold text-primary mb-6">{REQUIREMENTS.newGrad.title}</h3>
            <div className="bg-white border border-gray-100 rounded overflow-hidden">
              {REQUIREMENTS.newGrad.items.map((item, i) => (
                <div key={i} className="flex border-b border-gray-100 last:border-b-0">
                  <div className="w-28 lg:w-32 flex-shrink-0 px-4 py-3 lg:py-4 text-[13px] lg:text-sm font-semibold text-text-primary bg-gray-50">
                    {item.label}
                  </div>
                  <div className="flex-1 px-4 py-3 lg:py-4 text-[14px] lg:text-[15px] text-text-primary">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h3 className="text-xl font-semibold text-primary mb-6">{REQUIREMENTS.midCareer.title}</h3>
            <div className="bg-white border border-gray-100 rounded overflow-hidden">
              {REQUIREMENTS.midCareer.items.map((item, i) => (
                <div key={i} className="flex border-b border-gray-100 last:border-b-0">
                  <div className="w-28 lg:w-32 flex-shrink-0 px-4 py-3 lg:py-4 text-[13px] lg:text-sm font-semibold text-text-primary bg-gray-50">
                    {item.label}
                  </div>
                  <div className="flex-1 px-4 py-3 lg:py-4 text-[14px] lg:text-[15px] text-text-primary">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FAQ Section
// ============================================================
const FAQS = [
  { q: "未経験でも応募できますか？", a: "はい、未経験の方も歓迎しています。入社後は先輩社員が丁寧に指導しますので、安心してご応募ください。" },
  { q: "資格は必要ですか？", a: "入社時に資格がなくても大丈夫です。入社後に資格取得をサポートする制度があります。" },
  { q: "職場見学はできますか？", a: "はい、職場見学も随時受け付けています。お気軽にお問い合わせください。" },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-center mb-12 lg:mb-16">
          <span className="section-label">よくある質問</span>
          <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary">FAQ</h2>
        </FadeInUp>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <div className="bg-white rounded overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-[15px] lg:text-base font-semibold text-text-primary pr-4">
                    {faq.q}
                  </span>
                  <span className="text-xl text-text-secondary flex-shrink-0">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[1.8]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CTA Section
// ============================================================
function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="max-w-narrow mx-auto px-6 lg:px-12 text-center">
        <FadeInUp>
          <h2 className="text-[24px] lg:text-[32px] font-bold text-white mb-4">
            ご応募お待ちしています
          </h2>
          <p className="text-[14px] lg:text-[15px] text-white/80 mb-8 lg:mb-10">
            まずはお気軽にご連絡ください。
          </p>

          <Link
            href="/contact"
            className="inline-block bg-[#8BC34A] text-white px-12 py-4 rounded font-semibold hover:opacity-90 transition-opacity"
          >
            エントリーフォームへ
          </Link>

          <p className="mt-6 text-sm text-white/70">
            お電話でのお問い合わせ: 059-345-3171
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Main Page
// ============================================================
export default function RecruitPage() {
  return (
    <>
      <HeroSection />
      <MessageSection />
      <JoinTeamSection />
      <RequirementsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
