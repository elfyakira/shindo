"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";
import WaveTitle from "@/components/WaveTitle";
import WaveButton from "@/components/WaveButton";
import CharByCharLines from "@/components/CharByCharLines";
import DecoShape from "@/components/DecoShape";
import { ALL_AWARDS } from "@/lib/awards";

// ============================================================
// Hero Section
// ============================================================
function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-visible">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/about-hero.jpg"
          alt="About"
          fill
          className="object-cover object-[center_15%]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <DecoShape color="red" width={170} top="15%" right="6%" zIndex={6} />
      <DecoShape color="white" width={130} bottom="-20px" left="4%" delay={0.15} zIndex={6} />
      <DecoShape color="green" width={110} top="60%" right="14%" delay={0.2} zIndex={6} />

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <WaveTitle en="About" ja="私たちについて" variant="dark" />
      </div>
    </section>
  );
}

// ============================================================
// About Content Section
// ============================================================
function AboutContentSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#16a637] overflow-visible">
      <DecoShape color="red" width={180} top="-70px" right="8%" zIndex={15} />
      <DecoShape color="white" width={220} top="45%" left="-90px" delay={0.1} zIndex={15} className="hidden lg:block" />
      <DecoShape color="red" width={160} top="75%" right="3%" delay={0.15} zIndex={15} />
      <DecoShape color="red" width={220} bottom="-100px" right="5%" delay={0.2} zIndex={3} />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="text-left">
            <CharByCharLines
              lines={[
                { text: "地域にとって\n本当に必要な公共事業に、", size: "text-[24px] lg:text-[40px]", startDelay: 0.3 },
                { text: "誠実に向き合う建設会社です。", size: "text-[24px] lg:text-[40px]", startDelay: 1.5 },
              ]}
              className="text-white"
            />
            <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
              信藤建設は、昭和13年の創業以来、公共事業を中心とした建設事業を通じて地域の安全と安心を支えてきた総合建設会社です。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
              河川・道路・上下水道などの社会インフラ整備を主軸に、官公庁および関係機関からのご要請に応え、計画立案から施工、品質管理に至るまで、一つひとつの工事に責任を持って取り組んできました。
            </p>
            <p className="text-[14px] lg:text-[15px] text-white leading-[2]">
              88年にわたる歩みの中で培ってきたのは、施工実績や技術力だけではありません。発注者との信頼関係を大切にし、長期的な視点で地域と向き合い続けてきた姿勢そのものです。これからも信藤建設は、公共事業を担うパートナーとしての責任を胸に、地域社会の未来に、本気で応え続けていきます。
            </p>
            <div className="flex justify-end mt-10">
              <div className="relative w-48 lg:w-64 aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/generated/about-content.jpg"
                  alt="私たちについて"
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
// Strengths Section
// ============================================================
const STRENGTHS = [
  {
    title: "地域特性を理解した、\n持続可能なインフラづくり",
    description: "私たちは三重県北勢・中勢エリアを中心に、地域に根差した建設事業を展開してきました。地域を知り、地域と向き合ってきた企業だからこそできる持続可能な公共事業への取り組みが、信藤建設の強みです。",
    image: "/images/generated/strength-01.jpg",
  },
  {
    title: "長年の実績に裏打ちされた、\n公共事業対応力",
    description: "昭和13年の創業以来、河川・道路・上下水道をはじめとする公共事業を中心に、数多くの施工実績を積み重ねてきました。地域の特性や現場条件を的確に把握し、発注者の意図を正確に汲み取った施工を行うことで、安定した品質と確実な工事遂行を実現しています。",
    image: "/images/generated/strength-02.jpg",
  },
];

function StrengthsSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-visible">
      <DecoShape color="green" width={340} top="-140px" right="-60px" zIndex={3} />
      <DecoShape color="red" width={100} top="40%" left="-50px" delay={0.1} zIndex={3} />
      <DecoShape color="green" width={220} bottom="-180px" right="8%" delay={0.2} zIndex={3} className="hidden lg:block" />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <WaveTitle en="Strengths" ja="信藤建設の強み" />
        </FadeInUp>

        <div className="border-t border-gray-200">
          {STRENGTHS.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 lg:py-16 border-b border-gray-200">
                <div className="w-full lg:w-1/2">
                  <h3 className="text-[20px] lg:text-[24px] font-bold text-text-primary leading-[1.6] mb-6 whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] text-black leading-[2]">
                    {item.description}
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title.replace("\n", "")}
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
// Awards Section
// ============================================================
function AwardsSection() {
  const awards = ALL_AWARDS.slice(0, 6);
  return (
    <section id="awards" className="relative py-16 lg:py-24 bg-white overflow-visible">
      <DecoShape color="green" width={300} mobileWidth={170} top="-120px" left="-60px" zIndex={3} />
      <DecoShape color="red" width={110} top="55%" right="-40px" delay={0.1} zIndex={3} />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <WaveTitle en="Awards" ja="各種表彰" />
          <div className="mt-6">
            <WaveButton href="/awards" text="View all" variant="dark" />
          </div>
        </FadeInUp>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {awards.map((award, index) => (
            <FadeInUp key={index} delay={index * 0.05}>
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Blog Section
// ============================================================
const BLOG_POSTS = [
  {
    date: "2026.01.01",
    title: "ブログタイトル1",
    image: "/images/generated/completed_building_sky.jpg",
    slug: "1",
  },
  {
    date: "2026.01.01",
    title: "ブログタイトル2",
    image: "/images/generated/completed_building_sky.jpg",
    slug: "2",
  },
  {
    date: "2026.01.01",
    title: "ブログタイトル3",
    image: "/images/generated/completed_building_sky.jpg",
    slug: "3",
  },
];

function BlogSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-visible">
      <DecoShape color="green" width={320} top="-120px" right="-60px" zIndex={3} />
      <DecoShape color="red" width={120} top="40%" left="-50px" delay={0.1} zIndex={3} className="hidden lg:block" />
      <DecoShape color="red" width={140} top="10px" right="20%" delay={0.2} zIndex={3} />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <WaveTitle en="Blog" />
          <div className="mt-6">
            <WaveButton href="/news" text="View all" variant="dark" />
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <Link href={`/news/${post.slug}`} className="block group">
                <div className="relative aspect-[16/10] rounded overflow-hidden mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs text-text-secondary mb-2">{post.date}</p>
                <h3 className="text-[15px] font-medium text-text-primary group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </Link>
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
export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <AboutContentSection />
      <StrengthsSection />
      <AwardsSection />
      <BlogSection />
    </>
  );
}
