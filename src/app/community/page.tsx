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
          src="/images/generated/community-hero.jpg"
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
    <section className="py-20 lg:py-32 bg-[#16a637]">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="text-left">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-white leading-[1.4] mb-4">
              地域にとって、<br />
              本当に必要なものをつくる。
            </h2>
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
// Outreach Class Section — 現場見学・出前授業
// ============================================================
const OUTREACH_PHOTOS = [
  { src: "/images/outreach/CPGM3039.JPG", alt: "教室での出前授業の様子" },
  { src: "/images/outreach/HNPE9378.JPG", alt: "安全装備の紹介・体験" },
  { src: "/images/outreach/HALD7187.JPG", alt: "建設業についてのワークシート学習" },
  { src: "/images/outreach/KSKY6948.JPG", alt: "測量機器を使った体験学習" },
  { src: "/images/outreach/IMGP0383.JPG", alt: "コンクリート練り体験" },
  { src: "/images/outreach/RIMG0969.JPG", alt: "左官体験・モルタル仕上げ" },
  { src: "/images/outreach/RIMG1291.JPG", alt: "屋外でのコンクリート体験学習" },
  { src: "/images/outreach/PA210026.JPG", alt: "鈴鹿川での現場見学会" },
  { src: "/images/outreach/PA210031.JPG", alt: "重機の見学・操作体験" },
  { src: "/images/outreach/RIMG1491.JPG", alt: "高所作業車での体験" },
  { src: "/images/outreach/RIMG1285.JPG", alt: "高所作業車の搭乗体験" },
  { src: "/images/outreach/DJI_0053.JPG", alt: "学校グラウンドでの高所作業車デモンストレーション" },
  { src: "/images/outreach/RIMG0944.JPG", alt: "ドローン飛行デモンストレーション" },
  { src: "/images/outreach/RIMG0936.JPG", alt: "VR機器を使った建設現場体験" },
  { src: "/images/outreach/RIMG1303.JPG", alt: "出前授業の集合写真" },
  { src: "/images/outreach/DJI_0082.JPG", alt: "出前授業の記念撮影（ドローン空撮）" },
];

const HIGHSCHOOL_PHOTOS = [
  { src: "/images/community/highschool/20260129_142401_(2).jpg", alt: "高校出前授業の様子1" },
  { src: "/images/community/highschool/20260209_132704_(2).jpg", alt: "高校出前授業の様子2" },
  { src: "/images/community/highschool/20260209_140500_(2).jpg", alt: "高校出前授業の様子3" },
  { src: "/images/community/highschool/20260209_140833_(2).jpg", alt: "高校出前授業の様子4" },
];

function OutreachSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <h2 className="text-[28px] lg:text-[40px] font-bold text-text-primary">現場見学・出前授業</h2>
        </FadeInUp>

        {/* 紹介テキスト */}
        <FadeInUp className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h3 className="text-[20px] lg:text-[24px] font-bold text-text-primary leading-[1.6] mb-6">
                建設の仕事を、<br className="hidden lg:block" />
                子どもたちに届ける。
              </h3>
              <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mb-4">
                信藤建設では、地域の小学校を中心に現場見学会や出前授業を積極的に実施しています。「建設業ってどんな仕事？」という素朴な疑問に答えながら、子どもたちにものづくりの楽しさやインフラの大切さを伝えています。
              </p>
              <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
                教室での座学だけでなく、実際の建設現場や学校のグラウンドを活用した体験型プログラムを実施。測量機器の操作体験、コンクリートの練り混ぜ体験、高所作業車への搭乗体験、ドローンやVRを使った最新技術の紹介など、五感で学べるプログラムを提供しています。
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:pt-[calc(1.6em*2+1.5rem)]">
              <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mb-4">
                河川工事の現場では、鈴鹿川の堤防を間近に見学しながら、地域の安全を守るインフラ整備の重要性を学ぶ機会を設けています。重機の迫力を目の前で体感することで、建設業への興味と理解を深めてもらっています。
              </p>
              <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
                こうした活動を通じて、次世代を担う子どもたちに建設業の魅力を伝え、地域の未来を支える人材の育成に貢献していきます。子どもたちの目が輝く瞬間に出会えることが、私たちにとっても大きなやりがいです。
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* フォトギャラリー */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {OUTREACH_PHOTOS.map((photo, index) => (
            <FadeInUp key={index} delay={index * 0.05}>
              <div className="relative aspect-[4/3] rounded overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-[12px] p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.alt}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* 高校の出前授業 */}
        <FadeInUp className="mt-16 lg:mt-20 mb-8">
          <h3 className="text-[20px] lg:text-[24px] font-bold text-text-primary">高校の出前授業の様子</h3>
        </FadeInUp>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {HIGHSCHOOL_PHOTOS.map((photo, index) => (
            <FadeInUp key={index} delay={index * 0.05}>
              <div className="relative aspect-[4/3] rounded overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-[12px] p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.alt}
                  </p>
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
// Cleanup Activity Section — 清掃活動
// ============================================================
const CLEANUP_PHOTOS = [
  { src: "/images/cleanup/NCM_0040.JPG", alt: "道路周辺の清掃活動" },
  { src: "/images/cleanup/DSCF5420.JPG", alt: "歩道の除草・清掃作業" },
  { src: "/images/cleanup/DSCF5437.JPG", alt: "歩道植栽周りの清掃" },
  { src: "/images/cleanup/DSCF5417.JPG", alt: "街路樹周辺の美化活動" },
  { src: "/images/cleanup/DSCF3976.JPG", alt: "歩道の植栽手入れ" },
  { src: "/images/cleanup/cleanup-2024.JPG", alt: "道路沿いの歩道清掃" },
  { src: "/images/cleanup/DSCF2597.JPG", alt: "道路脇のゴミ拾い活動" },
  { src: "/images/cleanup/DSCF2598.JPG", alt: "道路沿いの清掃パトロール" },
  { src: "/images/cleanup/suzukagawa-clean.png", alt: "鈴鹿川クリーン作戦" },
  { src: "/images/cleanup/P6080009.JPG", alt: "河川敷の漂着物撤去" },
];

function CleanupSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <h2 className="text-[28px] lg:text-[40px] font-bold text-text-primary">清掃活動</h2>
        </FadeInUp>

        <FadeInUp className="mb-12 lg:mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h3 className="text-[20px] lg:text-[24px] font-bold text-text-primary leading-[1.6] mb-6">
                地域の美化は、<br className="hidden lg:block" />
                私たちの日常です。
              </h3>
              <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
                信藤建設では、地域貢献活動の一環として定期的に清掃活動を実施しています。道路沿いの歩道清掃や植栽の手入れ、河川敷のゴミ拾いなど、活動の範囲は多岐にわたります。
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:pt-[calc(1.6em*2+1.5rem)]">
              <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
                鈴鹿川クリーン作戦への参加をはじめ、河川敷に流れ着いた漂着物の撤去や、道路周辺の美化パトロールにも取り組んでいます。社員一人ひとりが地域の一員として、日常的に地域環境への意識を持ち、美しい街づくりと環境保全に貢献しています。
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* フォトギャラリー */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
          {CLEANUP_PHOTOS.map((photo, index) => (
            <FadeInUp key={index} delay={index * 0.05}>
              <div className="relative aspect-[4/3] rounded overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-[12px] p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.alt}
                  </p>
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
      <OutreachSection />
      <CleanupSection />
    </>
  );
}
