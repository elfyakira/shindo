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
          src="/images/generated/business-hero.jpg"
          alt="地域貢献活動"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <h1 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">Community</h1>
        <p className="text-sm text-white/80 tracking-wider">地域貢献活動</p>
      </div>
    </section>
  );
}

// ============================================================
// Introduction Section
// ============================================================
function IntroSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#1E5F4A]">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="text-left">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-white leading-[1.4] mb-4">
              地域にとって、<br />
              本当に必要なものをつくる。
            </h2>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
              信藤建設が大切にしているのは、「なぜこの工事を行うのか」という目的意識です。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
              確かな技術や品質管理は、あくまで手段。その先にあるのは、地域の安全と安心を守り続けるという使命です。ISO取得に裏付けられた施工品質と、地域に向き合う真摯な姿勢を両立しながら、私たちは公共事業に取り組んできました。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2]">
              こうした思いのもと、信藤建設は建設事業にとどまらず、地域貢献活動や地域との交流を大切にしています。次世代への技術継承、環境保全、地域の美化活動など、地域社会とともに歩み、その発展に貢献し続けることが、私たちの使命だと考えています。
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Activities
// ============================================================
const ACTIVITIES = [
  {
    title: "太陽光発電事業",
    description: "信藤建設では、再生可能エネルギーの普及に貢献するため、太陽光発電事業にも取り組んでいます。地域の遊休地を活用した太陽光発電所の設置・運営を通じて、クリーンエネルギーの供給と地域経済の活性化に貢献しています。",
    image: "/images/generated/solar.jpg",
  },
  {
    title: "現場見学・出前授業",
    description: "地域の学校や団体を対象に、建設現場の見学会や出前授業を実施しています。重機の操作体験や測量体験などを通じて、建設業の魅力や地域インフラの重要性を伝え、次世代の担い手育成に貢献しています。",
    image: "/images/generated/mentoring_scene.jpg",
  },
  {
    title: "清掃活動",
    description: "地域貢献活動の一環として、定期的に地域の清掃活動を実施しています。道路や河川周辺の清掃を通じて、美しい街づくりと環境保全に取り組んでいます。社員一人ひとりが地域の一員として、日常的に地域環境への意識を持って活動しています。",
    image: "/images/generated/team_photo.jpg",
  },
];

function ActivitiesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Activities</h2>
          <span className="section-label">活動内容</span>
        </FadeInUp>

        <div className="border-t border-gray-200">
          {ACTIVITIES.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 lg:py-16 border-b border-gray-200">
                <div className="w-full lg:w-1/2">
                  <h3 className="text-[20px] lg:text-[24px] font-bold text-text-primary leading-[1.6] mb-6">
                    {item.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
                    {item.description}
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
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
// Main Page
// ============================================================
export default function CommunityPage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ActivitiesSection />
    </>
  );
}
