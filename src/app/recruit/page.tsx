"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeInUp } from "@/components/animations";
import WaveTitle from "@/components/WaveTitle";
import WaveButton from "@/components/WaveButton";
import CharByCharLines from "@/components/CharByCharLines";
import DecoShape from "@/components/DecoShape";

// ============================================================
// Hero Section
// ============================================================
function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-visible">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/recruit-hero.png"
          alt="RECRUIT"
          fill
          className="object-cover object-[15%_10%]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <DecoShape color="red" width={170} top="14%" right="6%" zIndex={6} />
      <DecoShape color="white" width={120} bottom="-25px" left="6%" delay={0.15} zIndex={6} />
      <DecoShape color="green" width={110} top="62%" right="14%" delay={0.2} zIndex={6} />

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <WaveTitle en="Recruit" ja="採用情報" variant="dark" />
      </div>
    </section>
  );
}

// ============================================================
// Message Section
// ============================================================
function MessageSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#16a637] overflow-visible">
      <DecoShape color="red" width={180} top="-70px" right="8%" zIndex={15} />
      <DecoShape color="white" width={220} top="40%" left="-90px" delay={0.1} zIndex={15} />
      <DecoShape color="red" width={160} top="72%" right="3%" delay={0.15} zIndex={15} />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="text-left">
            <CharByCharLines
              lines={[
                { text: "地域のインフラを支える仕事に、", size: "text-[24px] lg:text-[40px]", startDelay: 0.3 },
                { text: "あなたも参加しませんか。", size: "text-[24px] lg:text-[40px]", startDelay: 1.5 },
              ]}
              className="text-white"
            />
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
        <div className="absolute inset-0 bg-[#16a637]/80" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <WaveTitle en="Join our team" variant="dark" className="mb-8" />
          <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2] mb-10">
            私たちは、地域のインフラを支える仲間を募集しています。
          </p>
          <WaveButton href="/contact" text="エントリーする" variant="light" />
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
    <section className="relative py-16 lg:py-24 bg-white overflow-visible">
      <DecoShape color="green" width={340} top="-140px" right="-60px" zIndex={3} />
      <DecoShape color="red" width={100} top="40%" left="-50px" delay={0.1} zIndex={3} />
      <DecoShape color="green" width={220} bottom="-160px" right="8%" delay={0.2} zIndex={3} />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <WaveTitle en="Requirements" ja="募集要項" />
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <FadeInUp delay={0.1}>
            <h3 className="text-[20px] font-semibold text-[#16a637] mb-6">施工管理</h3>
            <div className="bg-white border border-gray-100 rounded overflow-hidden">
              {REQUIREMENTS_NEW_GRAD.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row border-b border-gray-100 last:border-b-0">
                  <div className="w-full sm:w-32 lg:w-36 flex-shrink-0 px-4 py-4 lg:py-5 text-[13px] lg:text-sm font-semibold text-text-primary bg-gray-50">
                    {item.label}
                  </div>
                  <div className="flex-1 px-4 py-4 lg:py-5 text-[14px] lg:text-[15px] text-black leading-[1.8]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <h3 className="text-[20px] font-semibold text-[#16a637] mb-6">現場作業員</h3>
            <div className="bg-white border border-gray-100 rounded overflow-hidden">
              {REQUIREMENTS_MID_CAREER.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row border-b border-gray-100 last:border-b-0">
                  <div className="w-full sm:w-32 lg:w-36 flex-shrink-0 px-4 py-4 lg:py-5 text-[13px] lg:text-sm font-semibold text-text-primary bg-gray-50">
                    {item.label}
                  </div>
                  <div className="flex-1 px-4 py-4 lg:py-5 text-[14px] lg:text-[15px] text-black leading-[1.8]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>

        <FadeInUp>
          <div className="mt-12 lg:mt-16 text-center">
            <WaveButton
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              text="リクルートサイトへ"
              variant="dark"
              className="mx-auto"
            />
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
    <section className="relative py-16 lg:py-24 bg-bg-light overflow-visible">
      <DecoShape color="green" width={300} top="-120px" right="-60px" zIndex={3} />
      <DecoShape color="red" width={100} top="50%" left="-50px" delay={0.1} zIndex={3} />
      <DecoShape color="green" width={240} bottom="-140px" right="10%" delay={0.2} zIndex={3} />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <WaveTitle en="FAQ" ja="よくある質問" />
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
                    <p className="text-[14px] lg:text-[15px] text-black leading-[1.8]">
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
    <section className="relative py-16 lg:py-24 bg-[#16a637] overflow-visible">
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 text-center">
        <FadeInUp>
          <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-4">
            ご応募お待ちしています
          </h2>
          <p className="text-[14px] lg:text-[15px] text-white/80 mb-10">
            まずはお気軽にご連絡ください。
          </p>
          <WaveButton href="/contact" text="エントリーフォーム" variant="light" className="mx-auto" />
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
