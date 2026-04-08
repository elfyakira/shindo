"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";
import WaveTitle from "@/components/WaveTitle";
import DecoShape from "@/components/DecoShape";

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
        <WaveTitle en="Business" ja="事業内容" variant="dark" />
      </div>
    </section>
  );
}

// ============================================================
// Main Business Section
// ============================================================
function MainBusinessSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#16a637] overflow-hidden">
      <DecoShape color="red" width={200} height={70} top="-35px" left="5%" rotate={8} direction="top-left" zIndex={5} />
      <DecoShape color="red" width={130} height={48} bottom="-30px" right="7%" rotate={-10} delay={0.25} direction="bottom-right" zIndex={5} />
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="text-left">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-white leading-[1.4] mb-4">
              公共事業を中心とした、地域インフラ整備
            </h2>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
              信藤建設は、三重県北勢・中勢エリアを中心に、河川の護岸工事や道路舗装工事、堤防工事、橋下部工事、上下水道工事などの公共事業を主軸とした総合建設業として、地域のインフラ整備に携わっています。また、石油化学プラントにおける土木工事など、民間工事にも対応し、土木工事一式・建築工事一式・舗装工事一式をはじめ、多様な工種において計画から施工まで一貫した対応を行っています。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2]">
              こうした事業を通じて地域と関わる中で、インフラ整備にとどまらず、環境への配慮や次世代への取り組みも建設業の役割の一つであると考え、太陽光発電事業への取り組みや、現場見学・出前授業、清掃活動などの活動も行っています。
            </p>
            <div className="flex items-end justify-between mt-10">
              <Link
                href="/business/cases"
                className="inline-flex items-center justify-between bg-white text-[#16a637] text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
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
// Solar Section — 太陽光発電事業
// ============================================================
function SolarSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <DecoShape color="green" width={150} height={55} top="-25px" right="5%" rotate={-7} direction="top-right" zIndex={5} />
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h3 className="text-[20px] lg:text-[24px] font-bold text-text-primary leading-[1.6] mb-6">
                太陽光発電事業
              </h3>
              <p className="text-[14px] lg:text-[15px] text-black leading-[2]">
                信藤建設では、太陽光発電事業にも取り組んでいます。太陽光発電は、化石燃料を使用せず、発電時にCO2などの温室効果ガスを排出しない発電方式です。太陽光という再生可能エネルギーを活用することで、資源の制約が少なく、環境負荷の低い電力供給が可能となります。建設事業によるインフラ整備とあわせて、エネルギーの再生利用を進めることで、環境保全に配慮した事業活動を行っています。
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/generated/solar.jpg"
                  alt="太陽光発電事業"
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
// Community Section — 地域貢献活動
// ============================================================
const COMMUNITY_ITEMS = [
  {
    title: "現場見学・出前授業",
    description: "信藤建設では、地域との取り組みの一環として、小学校や保育園への出前授業や、子どもたちを現場に迎えての見学受け入れを行っています。建設業の役割や仕事の内容について説明するほか、砂やセメントを実際に混ぜるコンクリート製作など、体験を通して建設の仕事を学んでもらう取り組みを実施しています。",
    image: "/images/outreach/KSKY6948.JPG",
  },
  {
    title: "清掃活動",
    description: "鈴鹿川クリーン大作戦をはじめ、自治体や建設業協会が実施する各種ボランティア活動に参加し、三重県北勢・中勢エリアの河川や道路の清掃活動に取り組んでいます。日頃、工事を通じて関わっている地域の環境を維持するため、継続的に清掃活動を行っています。",
    image: "/images/cleanup/NCM_0040.JPG",
  },
];

function CommunitySection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <DecoShape color="red" width={120} height={45} top="-25px" left="3%" rotate={12} delay={0.1} direction="top-left" zIndex={5} />
      <DecoShape color="green" width={170} height={60} bottom="-30px" right="4%" rotate={-5} delay={0.2} direction="bottom-right" zIndex={5} />
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <h2 className="text-[28px] lg:text-[40px] font-bold text-text-primary">地域貢献活動</h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {COMMUNITY_ITEMS.map((item, index) => (
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
                <p className="text-[14px] lg:text-[15px] text-black leading-[2]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2} className="text-center mt-12">
          <Link
            href="/community"
            className="inline-flex items-center justify-between bg-[#16a637] text-white text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
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
      <SolarSection />
      <CommunitySection />
    </>
  );
}
