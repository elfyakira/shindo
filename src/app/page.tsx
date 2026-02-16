"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FadeInUp } from "@/components/animations";

// ============================================================
// Hero Section
// ============================================================
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/construction_wide.jpg"
          alt="建設現場"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <div
          className={`transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm lg:text-base text-white/80 tracking-wider mb-4">
            Home Matters
          </p>
          <h1 className="text-[32px] lg:text-[56px] font-bold text-white leading-[1.3] tracking-wide">
            We Build<br />
            What Matters.
          </h1>
        </div>

        <div
          className={`mt-6 transition-all duration-800 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-[14px] lg:text-[15px] text-white/90 leading-[1.8] max-w-md">
            信藤建設は、公共事業を中心とした<br className="hidden lg:block" />
            地域インフラ整備に取り組んでいます。
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
        <span className="text-xs tracking-wider">Scroll</span>
        <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// ============================================================
// About Section (We Build What Matters)
// ============================================================
function AboutIntroSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[28px] lg:text-[40px] font-bold text-text-primary leading-[1.4] mb-4">
              We Build<br />
              What Matters.
            </h2>
            <p className="text-[16px] lg:text-[18px] text-text-primary leading-[1.8] mb-8">
              地域にとって、本当に必要なものをつくる。
            </p>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mb-6">
              信藤建設が大切にしているのは、<br className="hidden lg:block" />
              「なぜこの工事を行うのか」という目的意識です。
            </p>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mb-6">
              確かな技術や品質管理は、あくまで手段。<br className="hidden lg:block" />
              その先にあるのは、地域の安全と安心を守り続けるという使命です。
            </p>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
              ISO取得に裏付けられた施工品質と、地域に向き合う真摯な姿勢を両立しながら、<br className="hidden lg:block" />
              私たちは公共事業に取り組んできました。
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Business Section
// ============================================================
const BUSINESS_ITEMS = [
  {
    title: "土木工事",
    description: "河川護岸工事・道路舗装・堤防工事など",
    image: "/images/generated/construction_wide.jpg",
  },
  {
    title: "建築工事",
    description: "公共施設・商業施設の建築工事",
    image: "/images/generated/project_public_building.jpg",
  },
  {
    title: "舗装工事",
    description: "道路舗装・駐車場整備など",
    image: "/images/generated/inspection_work.jpg",
  },
  {
    title: "その他",
    description: "上下水道工事・プラント土木工事",
    image: "/images/generated/team_photo.jpg",
  },
];

function BusinessSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#1B5E3A]">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-6 lg:mb-8">
          <span className="section-label text-white/60">事業内容</span>
          <h2 className="text-[24px] lg:text-[32px] font-bold text-white">Business</h2>
        </FadeInUp>

        <FadeInUp className="mb-10 lg:mb-12">
          <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2] max-w-4xl">
            信藤建設は、三重県北勢・中勢エリアを中心に、河川・道路・舗装・上下水道・港湾などの公共事業を主軸とした地域インフラ整備を行う総合建設会社です。公共工事をはじめ、民間工事にも対応し、計画から施工まで一貫した体制で幅広い工事に取り組んでいます。また、インフラ整備にとどまらず、太陽光発電事業や地域と関わる各種活動にも取り組んでいます。
          </p>
        </FadeInUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {BUSINESS_ITEMS.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <Link href="/business" className="block group">
                <div className="relative aspect-[4/3] rounded overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-[15px] lg:text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[12px] lg:text-sm text-white/70">
                  {item.description}
                </p>
              </Link>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp className="mt-10 lg:mt-12 text-center" delay={0.4}>
          <Link
            href="/business"
            className="inline-flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity"
          >
            View all
            <span>→</span>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Awards Section
// ============================================================
const AWARDS = [
  { image: "/images/generated/completed_building_sky.jpg", title: "表彰状1" },
  { image: "/images/generated/completed_building_sky.jpg", title: "表彰状2" },
  { image: "/images/generated/completed_building_sky.jpg", title: "表彰状3" },
  { image: "/images/generated/completed_building_sky.jpg", title: "表彰状4" },
];

function AwardsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <span className="section-label">各種表彰</span>
          <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary">Awards</h2>
        </FadeInUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {AWARDS.map((award, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="relative aspect-[3/4] rounded overflow-hidden bg-gray-100">
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

        <FadeInUp className="mt-10 lg:mt-12 text-center" delay={0.4}>
          <Link
            href="/about#awards"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          >
            View all
            <span>→</span>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Cases Section
// ============================================================
const CASES = [
  { image: "/images/generated/project_public_building.jpg", title: "施工実績1" },
  { image: "/images/generated/project_shopping_mall.jpg", title: "施工実績2" },
  { image: "/images/generated/completed_building_sky.jpg", title: "施工実績3" },
];

function CasesSection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <span className="section-label">施工実績</span>
          <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary">Cases</h2>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASES.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <Link href="/business/cases" className="block group">
                <div className="relative aspect-[4/3] rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp className="mt-10 lg:mt-12 text-center" delay={0.3}>
          <Link
            href="/business/cases"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          >
            View all
            <span>→</span>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Company Section
// ============================================================
function CompanySection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <FadeInUp className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/generated/ceo_portrait.jpg"
                alt="会社イメージ"
                fill
                className="object-cover"
              />
            </div>
          </FadeInUp>

          <FadeInUp className="w-full lg:w-1/2" delay={0.1}>
            <span className="section-label">会社案内</span>
            <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary mb-6">
              Company
            </h2>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mb-8">
              信藤建設は、昭和13年の創業以来、三重県北勢・中勢エリアを中心に公共事業を通じて地域の暮らしを支えてまいりました。今後も総合建設企業として、地域にとって本当に必要なものを形にしてまいります。
            </p>
            <Link
              href="/company"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
            >
              View more
              <span>→</span>
            </Link>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Recruit Section
// ============================================================
const RECRUIT_MENU = [
  { title: "3分でわかる信藤建設", href: "/recruit#about" },
  { title: "働く環境", href: "/recruit#environment" },
  { title: "スタッフインタビュー", href: "/recruit#interview" },
  { title: "採用メッセージ", href: "/recruit#message" },
];

function RecruitSection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left: Menu */}
          <FadeInUp className="w-full lg:w-1/3">
            <span className="section-label">採用情報</span>
            <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary mb-8">Recruit</h2>
            <ul className="space-y-4">
              {RECRUIT_MENU.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-[14px] lg:text-[15px] text-text-secondary hover:text-primary transition-colors"
                  >
                    <span className="text-primary">→</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* Center: Video */}
          <FadeInUp className="w-full lg:w-1/3" delay={0.1}>
            <div className="relative aspect-video bg-gray-200 rounded overflow-hidden">
              {/* 動画プレースホルダー */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Right: Message & CTA */}
          <FadeInUp className="w-full lg:w-1/3" delay={0.2}>
            <div className="h-full flex flex-col justify-center">
              <p className="text-[20px] lg:text-[24px] font-bold text-text-primary leading-[1.6] mb-8">
                88年続いているのは、<br />
                この仕事が&ldquo;必要とされ続けている&rdquo;から。
              </p>
              <p className="text-[28px] lg:text-[32px] font-bold text-primary mb-6">
                Join our team
              </p>
              <Link
                href="/recruit"
                className="inline-block bg-[#8BC34A] text-white px-8 py-3 rounded font-medium hover:opacity-90 transition-opacity text-center"
              >
                Entry
              </Link>
            </div>
          </FadeInUp>
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary">Blog</h2>
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

        <FadeInUp className="mt-10 lg:mt-12 text-center" delay={0.3}>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:opacity-80 transition-opacity"
          >
            View More
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
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutIntroSection />
      <BusinessSection />
      <AwardsSection />
      <CasesSection />
      <CompanySection />
      <RecruitSection />
      <BlogSection />
    </>
  );
}
