"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";

// ============================================================
// Hero Section
// ============================================================
function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/construction_wide.jpg"
          alt="Company"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <p className="text-sm text-white/80 tracking-wider mb-2">会社情報</p>
        <h1 className="text-[32px] lg:text-[48px] font-bold text-white">Company</h1>
      </div>
    </section>
  );
}

// ============================================================
// CEO Message Section
// ============================================================
function CeoMessageSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-center mb-12 lg:mb-16">
          <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary">代表あいさつ</h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] rounded overflow-hidden mb-8">
              <Image
                src="/images/generated/ceo_portrait.jpg"
                alt="代表"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] space-y-6">
              <p>
                信藤建設のホームページをご覧いただき、誠にありがとうございます。
              </p>
              <p>
                当社は昭和13年の創業以来、三重県四日市市を拠点に、公共事業を中心とした地域インフラ整備に取り組んでまいりました。
              </p>
              <p>
                河川の護岸工事、道路舗装、上下水道工事など、目に見えにくいところで地域の暮らしを支える仕事を、誠実に、着実に続けてまいりました。
              </p>
              <p>
                これからも、地域の皆様に信頼される建設会社として、安全で質の高い施工を心がけ、地域社会の発展に貢献してまいります。
              </p>
            </div>
            <p className="mt-8 text-right text-[14px] text-text-primary">
              代表取締役　aaaa
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Philosophy Section
// ============================================================
function PhilosophySection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-center mb-12 lg:mb-16">
          <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary">経営理念</h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[20px] lg:text-[28px] font-bold text-text-primary leading-[1.6] mb-8">
              地域にとって本当に必要な公共事業に、<br />
              誠実に向き合う
            </p>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
              私たちは、地域のインフラを支える建設会社として、<br className="hidden lg:block" />
              安全・品質・環境に配慮した施工を通じて、<br className="hidden lg:block" />
              地域社会の発展に貢献することを使命としています。
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// History Section
// ============================================================
const HISTORY = [
  { year: "1938", event: "aaaa" },
  { year: "19XX", event: "aaaa" },
  { year: "19XX", event: "aaaa" },
  { year: "19XX", event: "aaaa" },
  { year: "20XX", event: "aaaa" },
  { year: "20XX", event: "aaaa" },
];

function HistorySection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-center mb-12 lg:mb-16">
          <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary">沿革</h2>
        </FadeInUp>

        <div className="max-w-2xl mx-auto">
          {HISTORY.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.05}>
              <div className="flex border-b border-gray-200 last:border-b-0">
                <div className="w-24 lg:w-32 py-4 lg:py-5 text-[15px] lg:text-base font-semibold text-primary">
                  {item.year}
                </div>
                <div className="flex-1 py-4 lg:py-5 text-[14px] lg:text-[15px] text-text-primary">
                  {item.event}
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Company Info Section
// ============================================================
const COMPANY_INFO = [
  { label: "会社名", value: "信藤建設" },
  { label: "所在地", value: "〒510-0853 三重県四日市市川合町2番地" },
  { label: "電話番号", value: "059-345-3171" },
  { label: "FAX", value: "059-347-2775" },
  { label: "設立", value: "昭和13年2月" },
  { label: "代表者", value: "aaaa" },
  { label: "従業員数", value: "27名" },
  { label: "事業内容", value: "土木工事一式、建築工事一式、舗装工事一式" },
  { label: "事業エリア", value: "三重県北勢・中勢エリア" },
];

function CompanyInfoSection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="text-center mb-12 lg:mb-16">
          <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary">会社概要</h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-3xl mx-auto bg-white rounded overflow-hidden">
            {COMPANY_INFO.map((item, index) => (
              <div
                key={index}
                className="flex border-b border-gray-100 last:border-b-0"
              >
                <div className="w-[35%] lg:w-[30%] px-4 lg:px-6 py-4 lg:py-5 text-[13px] lg:text-sm font-semibold text-text-primary bg-gray-50">
                  {item.label}
                </div>
                <div className="flex-1 px-4 lg:px-6 py-4 lg:py-5 text-[14px] lg:text-[15px] text-text-primary">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Access Section
// ============================================================
function AccessSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <span className="section-label text-white/60">アクセス</span>
          <h2 className="text-[24px] lg:text-[32px] font-bold text-white">Access</h2>
        </FadeInUp>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <FadeInUp className="lg:w-1/2" delay={0.1}>
            <div className="bg-white/10 rounded p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-white mb-4">本社</h3>
              <p className="text-[14px] lg:text-[15px] text-white/80 leading-[1.8] mb-4">
                〒510-0853<br />
                三重県四日市市川合町2番地
              </p>
              <p className="text-[14px] text-white/80">
                TEL: 059-345-3171<br />
                FAX: 059-347-2775
              </p>
            </div>
          </FadeInUp>

          <FadeInUp className="lg:w-1/2" delay={0.2}>
            <div className="h-[300px] lg:h-[350px] rounded overflow-hidden bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-text-secondary">
                Google Maps
              </div>
            </div>
          </FadeInUp>
        </div>

        <FadeInUp className="mt-10 text-center" delay={0.3}>
          <Link
            href="/access"
            className="inline-flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity"
          >
            全拠点を見る
            <span>→</span>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Main Page
// ============================================================
export default function CompanyPage() {
  return (
    <>
      <HeroSection />
      <CeoMessageSection />
      <PhilosophySection />
      <HistorySection />
      <CompanyInfoSection />
      <AccessSection />
    </>
  );
}
