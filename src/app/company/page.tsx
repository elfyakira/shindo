"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/animations";

// ============================================================
// Hero Section
// ============================================================
function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/company-bg.jpg"
          alt="Company"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <h1 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">Company</h1>
        <p className="text-sm text-white/80 tracking-wider">会社情報</p>
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
        <FadeInUp>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/ceo-greeting.jpg"
                  alt="代表"
                  fill
                  className="object-cover" style={{ transform: 'scale(2) translateY(5%)' }}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Message</h2>
              <span className="section-label">代表あいさつ</span>
              <div className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mt-6 space-y-4">
                <p>
                  建設業の重要性は、日本国内においても社会的に最も価値ある業種と言っても過言ではありません。当社は、昭和13年の創業以来、80年余りにわたる歴史を刻むことが出来ました。
                </p>
                <p>
                  近年、建設業は不況の状況下が続いておりますが、当社は、四日市地区を中心とした各官公庁と、特に四日市石油コンビナート中枢の昭和四日市石油（株）を中心に、土木建築工事に微力ながら貢献してまいりました。おかげさまで、この厳しい状況においても施工実績を積み上げ、安定した実績を堅持しております。
                </p>
                <p>
                  また、平成12年にはISO9000を、平成23年にはISO14000を取得し、顧客の信頼と満足を目指し、品質の向上を図っております。今後もより多くの顧客の信頼と満足を目指し、地域社会に貢献できる努力をしてまいります。
                </p>
              </div>
              <p className="mt-8 text-[14px] text-text-primary font-medium">
                代表取締役　伊藤秀樹
              </p>
            </div>
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
  { year: "昭和13年 2月", event: "伊藤信一　個人として創業" },
  { year: "昭和23年 3月", event: "資本金18万円にて合資会社伊藤信組に組織変更" },
  { year: "昭和33年 4月", event: "合資会社伊藤組に名称変更" },
  { year: "昭和49年 2月", event: "資本金の増資（2,000万円）" },
  { year: "昭和49年 11月", event: "現住所に新社屋完成" },
  { year: "昭和57年 9月", event: "信藤建設株式会社　設立（資本金1,000万円）" },
  { year: "昭和58年 11月", event: "合資会社伊藤組と合併し、信藤建設株式会社に組織及び名称変更（資本金3,000万円）" },
  { year: "平成12年 12月", event: "ISO9002を認証取得" },
  { year: "平成15年 12月", event: "ISO9001に更新" },
  { year: "平成23年 8月", event: "ISO14001、OHSAS18001　取得" },
];

function HistorySection() {
  return (
    <section className="py-16 lg:py-24 bg-[#1E5F4A]">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">History</h2>
          <span className="section-label !text-white/70">沿革</span>
        </FadeInUp>

        <div className="relative ml-36 lg:ml-44">
          <div className="absolute left-[7px] top-[40px] lg:top-[48px] bottom-0 w-[2px] bg-white/40" />
          {HISTORY.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.05}>
              <div className="relative flex items-start py-8 lg:py-10">
                <span className="absolute right-full pr-8 text-[14px] lg:text-[15px] font-semibold text-white w-32 lg:w-40 text-right">
                  {item.year}
                </span>
                <div className="relative flex-shrink-0 w-4 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white z-10" />
                </div>
                <span className="text-[14px] lg:text-[15px] text-white/80 pl-8">
                  {item.event}
                </span>
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
  { label: "商号", value: "信藤建設株式会社" },
  { label: "所在地", value: "〒510-0853\n三重県四日市市川合町2番地" },
  { label: "代表者", value: "伊藤秀樹" },
  { label: "創業", value: "昭和13年2月" },
  { label: "資本金", value: "3,000万円" },
  { label: "従業員数", value: "27名" },
  { label: "電話", value: "059-345-3171" },
  { label: "FAX", value: "059-347-2775" },
  { label: "事業内容", value: "総合建設業" },
  { label: "特定建設業の許可", value: "三重県知事（特-2）第909号" },
  { label: "許可建設業の種類", value: "土木工事業、とび・土工工事業、舗装工事業、水道施設工事業、建築工事業、管工事業、造園工事業、解体工事業" },
  { label: "許可年月日", value: "令和2年7月6日" },
  { label: "主要事業品目", value: "土木工事一式、建築工事一式、舗装工事一式" },
  { label: "主要取引先", value: "国土交通省、三重県、四日市市、四日市港管理組合、昭和四日市石油株式会社、株式会社ENEOSマテリアル、その他民間（法人・個人）" },
  { label: "取引銀行", value: "三十三銀行塩浜支店、百五銀行四日市支店" },
];

function CompanyInfoSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#1E5F4A]">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">Overview</h2>
          <span className="section-label !text-white/70">会社概要</span>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="bg-white/10 rounded overflow-hidden">
            {COMPANY_INFO.map((item, index) => (
              <div
                key={index}
                className="flex border-b border-white/10 last:border-b-0"
              >
                <div className="w-[35%] lg:w-[25%] px-4 lg:px-6 py-5 lg:py-6 text-[13px] lg:text-sm font-semibold text-white bg-white/5">
                  {item.label}
                </div>
                <div className="flex-1 px-4 lg:px-6 py-5 lg:py-6 text-[14px] lg:text-[15px] text-white/90 whitespace-pre-line">
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Access</h2>
              <span className="section-label">アクセス</span>
              <div className="bg-bg-light rounded p-6 lg:p-8 mt-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">本社</h3>
                <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[1.8] mb-4">
                  〒510-0853<br />
                  三重県四日市市川合町2番地
                </p>
                <p className="text-[14px] text-text-secondary">
                  TEL: 059-345-3171<br />
                  FAX: 059-347-2775
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="h-[300px] lg:h-[400px] rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.5!2d136.6247!3d34.9367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004570000000000%3A0x0!2z5LiJ6YeN55yM5Zub5pel5biC5biC5bed5ZCI55S6MuODiOWcsA!5e0!3m2!1sja!2sjp!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="信藤建設 本社"
                />
              </div>
            </div>
          </div>
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
      <HistorySection />
      <CompanyInfoSection />
      <AccessSection />
    </>
  );
}
