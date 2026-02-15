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
          alt="Business"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <p className="text-sm text-white/80 tracking-wider mb-2">事業内容</p>
        <h1 className="text-[32px] lg:text-[48px] font-bold text-white">Business</h1>
      </div>
    </section>
  );
}

// ============================================================
// Main Business Section
// ============================================================
function MainBusinessSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <FadeInUp className="lg:w-1/3">
            <span className="section-label">事業内容</span>
            <h2 className="text-[24px] lg:text-[28px] font-bold text-text-primary">Business</h2>
          </FadeInUp>

          <FadeInUp className="lg:w-2/3" delay={0.1}>
            <h3 className="text-[20px] lg:text-[24px] font-bold text-text-primary leading-[1.6] mb-8">
              公共事業を中心とした、地域インフラ整備
            </h3>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mb-6">
              信藤建設は、三重県北勢・中勢エリアを中心に、公共事業を通じた地域インフラの整備に取り組んでいます。
            </p>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mb-6">
              河川の護岸工事や道路舗装、堤防工事、上下水道工事、石油化学プラントの土木工事など、幅広い分野で実績を積み重ねてまいりました。
            </p>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
              私たちは、目に見えにくいところで地域を支えるインフラ整備こそ、本当に大切な仕事だと考えています。安全で品質の高い施工を心がけ、地域の皆様に信頼される建設会社を目指しています。
            </p>
          </FadeInUp>
        </div>

        <FadeInUp className="mt-12 lg:mt-16" delay={0.2}>
          <div className="relative aspect-[21/9] rounded overflow-hidden">
            <Image
              src="/images/generated/construction_wide.jpg"
              alt="公共事業"
              fill
              className="object-cover"
            />
          </div>
        </FadeInUp>

        <FadeInUp className="mt-10 text-center" delay={0.3}>
          <Link
            href="/business/cases"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          >
            施工実績を見る
            <span>→</span>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Solar Power Section
// ============================================================
function SolarPowerSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <FadeInUp className="w-full lg:w-1/2">
            <h2 className="text-[24px] lg:text-[32px] font-bold mb-6">太陽光発電事業</h2>
            <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2] mb-6">
              信藤建設では、再生可能エネルギーの普及に貢献するため、太陽光発電事業にも取り組んでいます。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2]">
              地域の遊休地を活用した太陽光発電所の設置・運営を通じて、クリーンエネルギーの供給と地域経済の活性化に貢献しています。
            </p>
          </FadeInUp>

          <FadeInUp className="w-full lg:w-1/2" delay={0.1}>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/generated/completed_building_sky.jpg"
                alt="太陽光発電"
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Site Visit Section
// ============================================================
function SiteVisitSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
          <FadeInUp className="w-full lg:w-1/2">
            <h2 className="text-[24px] lg:text-[32px] font-bold mb-6">現場見学・出前授業</h2>
            <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2] mb-6">
              地域の学校や団体を対象に、建設現場の見学会や出前授業を実施しています。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2]">
              建設業の魅力や地域インフラの重要性を伝え、次世代の担い手育成に貢献しています。
            </p>
          </FadeInUp>

          <FadeInUp className="w-full lg:w-1/2" delay={0.1}>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/generated/mentoring_scene.jpg"
                alt="現場見学"
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Cleaning Section
// ============================================================
function CleaningSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <FadeInUp className="w-full lg:w-1/2">
            <h2 className="text-[24px] lg:text-[32px] font-bold mb-6">清掃活動</h2>
            <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2] mb-6">
              地域貢献活動の一環として、定期的に地域の清掃活動を実施しています。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2]">
              道路や河川周辺の清掃を通じて、美しい街づくりと環境保全に取り組んでいます。
            </p>
          </FadeInUp>

          <FadeInUp className="w-full lg:w-1/2" delay={0.1}>
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/generated/team_photo.jpg"
                alt="清掃活動"
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Main Page
// ============================================================
export default function BusinessPage() {
  return (
    <>
      <HeroSection />
      <MainBusinessSection />
      <SolarPowerSection />
      <SiteVisitSection />
      <CleaningSection />
    </>
  );
}
