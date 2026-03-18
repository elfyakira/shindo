"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FadeInUp } from "@/components/animations";

// ============================================================
// Hero Section
// ============================================================
function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/recruit-hero.jpg"
          alt="RECRUIT"
          fill
          className="object-cover object-[center_20%]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <h1 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">Recruit</h1>
        <p className="text-sm text-white/80 tracking-wider">採用情報</p>
      </div>
    </section>
  );
}

// ============================================================
// Message Section
// ============================================================
function MessageSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#1E5F4A]">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="text-left">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-white leading-[1.4] mb-4">
              地域のインフラを支える仕事に、<br />
              あなたも参加しませんか。
            </h2>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
              信藤建設は、三重県四日市市を拠点に、公共事業を中心とした地域インフラ整備に取り組んでいます。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
              河川護岸、道路舗装、上下水道工事など、目に見えにくいところで地域を支える仕事を、一緒にやりませんか。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2]">
              経験の有無は問いません。地域の暮らしを支えたいという思いを持つ方を、私たちは歓迎します。入社後は先輩社員が丁寧にサポートし、資格取得支援制度も充実しています。
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
          src="/images/generated/recruit-join.jpg"
          alt="Join our team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1E5F4A]/80" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <h2 className="text-[40px] lg:text-[64px] font-bold text-white leading-[1.2] mb-8">
            Join our team
          </h2>
          <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2] mb-10">
            私たちは、地域のインフラを支える仲間を募集しています。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-between bg-white text-[#1E5F4A] text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
          >
            <span>エントリーする</span>
            <span>→</span>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Requirements Section
// ============================================================
const REQUIREMENTS_NEW_GRAD = [
  {
    label: "応募資格",
    value: (
      <>
        <p>未経験可</p>
        <p>普通自動車免許（AT限定不可）/ PC基本操作（Word・Excel）</p>
      </>
    ),
  },
  {
    label: "歓迎スキル",
    value: (
      <>
        <p>・土木施工管理技士（1〜2級）</p>
        <p>・建築施工管理技士（1〜2級）</p>
        <p>・土木・建築現場での実務経験5年以上</p>
      </>
    ),
  },
  {
    label: "給与",
    value: (
      <>
        <p>月給 250,000円〜400,000円</p>
        <p>賞与 年2回（6月・11月）＋決算賞与（業績による）</p>
      </>
    ),
  },
  { label: "勤務地", value: "三重県四日市市川合町2番地" },
  {
    label: "勤務時間",
    value: (
      <>
        <p>8:15〜17:15（実働8h）</p>
        <p>休憩：12:00〜13:00 ＋ 午前午後に30分ずつ</p>
      </>
    ),
  },
  {
    label: "休日",
    value: (
      <>
        <p>完全週休2日制（土日祝休み）/ 年間休日126日</p>
        <p>夏季・年末年始・有給・慶弔・育児・介護休暇</p>
      </>
    ),
  },
];

const REQUIREMENTS_MID_CAREER = [
  {
    label: "応募資格",
    value: (
      <>
        <p>未経験可</p>
        <p>普通自動車免許（AT限定不可）</p>
      </>
    ),
  },
  {
    label: "歓迎スキル",
    value: (
      <>
        <p>■ 車両系建設機械運転技能講習</p>
        <p>■ 玉掛け技能講習</p>
        <p>■ 小型移動式クレーン運転技能講習</p>
        <p>■ フォークリフト運転技能講習</p>
        <p>■ 足場の組立て等作業経験</p>
      </>
    ),
  },
  {
    label: "給与",
    value: (
      <>
        <p>月給 190,000円〜410,000円</p>
        <p>賞与 年2回（6月・11月）＋決算賞与（業績による）</p>
      </>
    ),
  },
  { label: "勤務地", value: "三重県四日市市川合町2番地" },
  {
    label: "勤務時間",
    value: (
      <>
        <p>8:15〜17:15（実働8h）</p>
        <p>休憩：12:00〜13:00 ＋ 午前午後に30分ずつ</p>
      </>
    ),
  },
  {
    label: "休日",
    value: (
      <>
        <p>完全週休2日制（土日祝休み）/ 年間休日126日</p>
        <p>夏季・年末年始・有給・慶弔・育児・介護休暇</p>
      </>
    ),
  },
];

function RequirementsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Requirements</h2>
          <span className="section-label">募集要項</span>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <FadeInUp delay={0.1}>
            <h3 className="text-[20px] font-semibold text-[#1E5F4A] mb-6">施工管理</h3>
            <div className="bg-white border border-gray-100 rounded overflow-hidden">
              {REQUIREMENTS_NEW_GRAD.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row border-b border-gray-100 last:border-b-0">
                  <div className="w-full sm:w-32 lg:w-36 flex-shrink-0 px-4 py-4 lg:py-5 text-[13px] lg:text-sm font-semibold text-text-primary bg-gray-50">
                    {item.label}
                  </div>
                  <div className="flex-1 px-4 py-4 lg:py-5 text-[14px] lg:text-[15px] text-text-primary leading-[1.8]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h3 className="text-[20px] font-semibold text-[#1E5F4A] mb-6">現場作業員</h3>
            <div className="bg-white border border-gray-100 rounded overflow-hidden">
              {REQUIREMENTS_MID_CAREER.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row border-b border-gray-100 last:border-b-0">
                  <div className="w-full sm:w-32 lg:w-36 flex-shrink-0 px-4 py-4 lg:py-5 text-[13px] lg:text-sm font-semibold text-text-primary bg-gray-50">
                    {item.label}
                  </div>
                  <div className="flex-1 px-4 py-4 lg:py-5 text-[14px] lg:text-[15px] text-text-primary leading-[1.8]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>

        <FadeInUp>
          <div className="mt-12 lg:mt-16 text-center">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between bg-[#1E5F4A] text-white text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56 mx-auto"
            >
              <span>リクルートサイトへ</span>
              <span>→</span>
            </a>
          </div>
        </FadeInUp>
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
        <FadeInUp className="mb-12 lg:mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">FAQ</h2>
          <span className="section-label">よくある質問</span>
        </FadeInUp>

        <div className="max-w-3xl space-y-4">
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
    <section className="py-16 lg:py-24 bg-[#1E5F4A]">
      <div className="max-w-container mx-auto px-6 lg:px-12 text-center">
        <FadeInUp>
          <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-4">
            ご応募お待ちしています
          </h2>
          <p className="text-[14px] lg:text-[15px] text-white/80 mb-10">
            まずはお気軽にご連絡ください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-between bg-white text-[#1E5F4A] text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56 mx-auto"
          >
            <span>エントリーフォーム</span>
            <span>→</span>
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
