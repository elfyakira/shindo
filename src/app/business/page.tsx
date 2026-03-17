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
          src="/images/generated/business-hero.jpg"
          alt="事業内容"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <h1 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">Business</h1>
        <p className="text-sm text-white/80 tracking-wider">事業内容</p>
      </div>
    </section>
  );
}

// ============================================================
// Main Business Section
// ============================================================
function MainBusinessSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#1E5F4A]">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="text-left">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-white leading-[1.4] mb-4">
              公共事業を中心とした、<br />
              地域インフラ整備
            </h2>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
              信藤建設は、三重県北勢・中勢エリアを中心に、公共事業を通じた地域インフラの整備に取り組んでいます。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
              河川の護岸工事や道路舗装、堤防工事、上下水道工事、石油化学プラントの土木工事など、幅広い分野で実績を積み重ねてまいりました。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2]">
              私たちは、目に見えにくいところで地域を支えるインフラ整備こそ、本当に大切な仕事だと考えています。安全で品質の高い施工を心がけ、地域の皆様に信頼される建設会社を目指しています。
            </p>
            <div className="flex items-end justify-between mt-10">
              <Link
                href="/business/cases"
                className="inline-flex items-center justify-between bg-white text-[#1E5F4A] text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
              >
                <span>施工実績を見る</span>
                <span>→</span>
              </Link>
              <div className="relative w-48 lg:w-64 aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/generated/business-content.jpg"
                  alt="事業内容"
                  fill
                  className="object-cover"
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
// Green Background Sections (Solar, Site Visit, Cleaning)
// ============================================================
const OTHER_BUSINESSES = [
  {
    title: "太陽光発電事業",
    description: "信藤建設では、再生可能エネルギーの普及に貢献するため、太陽光発電事業にも取り組んでいます。地域の遊休地を活用した太陽光発電所の設置・運営を通じて、クリーンエネルギーの供給と地域経済の活性化に貢献しています。",
    image: "/images/generated/solar.jpg",
  },
  {
    title: "現場見学・出前授業",
    description: "地域の学校や団体を対象に、建設現場の見学会や出前授業を実施しています。建設業の魅力や地域インフラの重要性を伝え、次世代の担い手育成に貢献しています。",
    image: "/images/generated/mentoring_scene.jpg",
  },
  {
    title: "清掃活動",
    description: "地域貢献活動の一環として、定期的に地域の清掃活動を実施しています。道路や河川周辺の清掃を通じて、美しい街づくりと環境保全に取り組んでいます。",
    image: "/images/generated/team_photo.jpg",
  },
];

function OtherBusinessSections() {
  const solar = OTHER_BUSINESSES[0];
  const smallItems = OTHER_BUSINESSES.slice(1);
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* Solar - full width */}
        <FadeInUp>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 lg:py-16 border-t border-b border-gray-200">
            <div className="w-full lg:w-1/2">
              <h3 className="text-[20px] lg:text-[24px] font-bold text-text-primary leading-[1.6] mb-6">
                {solar.title}
              </h3>
              <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
                {solar.description}
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src={solar.image}
                  alt={solar.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Education & Community - side by side */}
        <FadeInUp delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-12 lg:py-16">
            {smallItems.map((item, index) => (
              <div key={index}>
                <div className="relative aspect-[4/3] rounded overflow-hidden mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[20px] lg:text-[24px] font-bold text-text-primary leading-[1.6] mb-4">
                  {item.title}
                </h3>
                <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeInUp>

        {/* View all button */}
        <FadeInUp delay={0.2} className="text-center">
          <Link
            href="/community"
            className="inline-flex items-center justify-between bg-[#1E5F4A] text-white text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
          >
            <span>View all</span>
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
export default function BusinessPage() {
  return (
    <>
      <HeroSection />
      <MainBusinessSection />
      <OtherBusinessSections />
    </>
  );
}
