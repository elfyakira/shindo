"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FadeInUp } from "@/components/animations";
import { ALL_AWARDS } from "@/lib/awards";
import { ALL_CASES } from "@/lib/cases";

// ============================================================
// Hero Section
// ============================================================
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-main.mp4" type="video/mp4" />
        </video>
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
    <section className="py-20 lg:py-32 bg-[#1E5F4A]">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="flex flex-col lg:flex-row lg:items-end lg:gap-12">
            <div className="text-left lg:flex-1">
              <h2 className="text-[28px] lg:text-[40px] font-bold text-white leading-[1.4] mb-4">
                We Build<br />
                What Matters.
              </h2>
              <p className="text-[16px] lg:text-[18px] text-white leading-[1.8] mb-8">
                地域にとって、本当に必要なものをつくる。
              </p>
              <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
                信藤建設が大切にしているのは、<br className="hidden lg:block" />
                「なぜこの工事を行うのか」という目的意識です。
              </p>
              <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
                確かな技術や品質管理は、あくまで手段。<br className="hidden lg:block" />
                その先にあるのは、地域の安全と安心を守り続けるという使命です。
              </p>
              <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-8">
                ISO取得に裏付けられた施工品質と、地域に向き合う真摯な姿勢を両立しながら、<br className="hidden lg:block" />
                私たちは公共事業に取り組んできました。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-between bg-white text-[#1E5F4A] text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
              >
                <span>詳しく見る</span>
                <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 lg:mt-0 lg:translate-y-4 w-full lg:w-[500px] flex-shrink-0">
              <Image
                src="/images/generated/iso-cert-01.png"
                alt="ISO認証書類"
                width={200}
                height={280}
                className="w-full h-auto"
              />
              <Image
                src="/images/generated/iso14001-cert.png"
                alt="ISO14001認証書類"
                width={200}
                height={280}
                className="w-full h-auto"
              />
              <Image
                src="/images/generated/iso45001-cert.png"
                alt="ISO45001認証書類"
                width={200}
                height={280}
                className="w-full h-auto"
              />
            </div>
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/generated/business-hero.jpg"
                  alt="事業内容"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Business</h2>
              <span className="section-label text-text-secondary">事業内容</span>
              <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mt-6 mb-8">
                信藤建設は、三重県北勢・中勢エリアを中心に、河川・道路・舗装・上下水道・港湾などの公共事業を主軸とした地域インフラ整備を行う総合建設会社です。公共工事をはじめ、民間工事にも対応し、計画から施工まで一貫した体制で幅広い工事に取り組んでいます。また、インフラ整備にとどまらず、太陽光発電事業や地域と関わる各種活動にも取り組んでいます。
              </p>
              <Link
                href="/business"
                className="inline-flex items-center justify-between bg-[#1E5F4A] text-white text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
              >
                <span>View all</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// ============================================================
// Awards Section
// ============================================================
function AwardsSection() {
  const awards = ALL_AWARDS.filter((a) => !a.vertical);
  const doubled = [...awards, ...awards];
  return (
    <section className="relative pt-16 lg:pt-24 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 top-[60%] bg-[#1E5F4A]" />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-16 lg:mb-20">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Awards</h2>
          <span className="section-label">各種表彰</span>
          <div className="mt-6">
            <Link
              href="/awards"
              className="inline-flex items-center justify-between bg-[#1E5F4A] text-white text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
            >
              <span>View all</span>
              <span>→</span>
            </Link>
          </div>
        </FadeInUp>
      </div>

      <div className="relative z-10">
        <div className="flex gap-6 animate-scroll-left">
          {doubled.map((award, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] lg:w-[350px]">
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Cases Section
// ============================================================
function CasesSection() {
  const doubled = [...ALL_CASES, ...ALL_CASES];
  return (
    <section className="py-16 lg:py-24 bg-[#1E5F4A] overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">Cases</h2>
          <span className="section-label !text-white">施工実績</span>
          <div className="mt-6">
            <Link
              href="/business/cases"
              className="inline-flex items-center justify-between bg-white text-[#1E5F4A] text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
            >
              <span>View all</span>
              <span>→</span>
            </Link>
          </div>
        </FadeInUp>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll-left">
          {doubled.map((item, index) => (
            <Link
              key={index}
              href="/business/cases"
              className="block group flex-shrink-0 w-[280px] lg:w-[350px]"
            >
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-[13px] text-white/80 mt-3 leading-[1.6]">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Company Video + Content Section
// ============================================================
function CompanySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [blur, setBlur] = useState(0);
  const [contentProgress, setContentProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Content: appears in the second half of scroll
      const contentStart = -vh * 0.3;
      const contentEnd = -vh * 0.9;
      const cp = Math.min(1, Math.max(0, (rect.top - contentStart) / (contentEnd - contentStart)));

      // Blur: synced with content appearance
      setBlur(cp * 12);
      setContentProgress(cp);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Image
          src="/images/generated/company-bg.jpg"
          alt="会社背景"
          fill
          className="object-cover"
          style={{ filter: `blur(${blur}px)` }}
          priority
        />
        <div
          className="absolute inset-0 bg-black/30"
          style={{ opacity: Math.min(0.5, contentProgress * 0.5) }}
        />

        <div
          className="relative z-10 h-full flex items-center"
          style={{
            opacity: contentProgress,
            transform: `translateY(${(1 - contentProgress) * 60}px)`,
          }}
        >
          <div className="max-w-container mx-auto px-6 lg:px-12 w-full">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded overflow-hidden">
                  <Image
                    src="/images/generated/company-bg.jpg"
                    alt="会社イメージ"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">
                  Company
                </h2>
                <span className="section-label !text-white/70">会社案内</span>
                <p className="text-[14px] lg:text-[15px] text-white/90 leading-[2] mt-6 mb-8">
                  信藤建設は、昭和13年の創業以来、三重県北勢・中勢エリアを中心に公共事業を通じて地域の暮らしを支えてまいりました。今後も総合建設企業として、地域にとって本当に必要なものを形にしてまいります。
                </p>
                <Link
                  href="/company"
                  className="inline-flex items-center justify-between bg-white text-[#1E5F4A] text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
                >
                  <span>View more</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Recruit Section
// ============================================================
const RECRUIT_MENU = [
  { title: "採用メッセージ", href: "/recruit#message" },
  { title: "募集要項", href: "/recruit#requirements" },
  { title: "よくある質問", href: "/recruit#faq" },
];

function RecruitSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        {/* セクションタイトル */}
        <FadeInUp>
          <div className="mb-8 lg:mb-12">
            <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Recruit</h2>
            <span className="section-label">採用情報</span>
          </div>
        </FadeInUp>

        {/* 採用PV動画スペース（準備中） */}
        <FadeInUp>
          <div className="relative w-full aspect-video mb-12 lg:mb-16 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
            <p className="text-gray-400 text-lg">採用PV（準備中）</p>
          </div>
        </FadeInUp>

        <FadeInUp>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/generated/recruit-hero.jpg"
                  alt="採用情報"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-[24px] lg:text-[32px] font-bold text-text-primary mb-2">Join Our Team</p>
              <span className="section-label">共に街をつくる仲間へ</span>
              <div className="mt-8 border-t border-gray-300">
                {RECRUIT_MENU.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center justify-between py-8 border-b border-gray-300 hover:opacity-70 transition-opacity"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-[16px] lg:text-[18px] text-text-secondary">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-[18px] lg:text-[20px] text-text-primary font-medium">{item.title}</span>
                    </div>
                    <span className="text-text-secondary text-lg">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>
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
          <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Blog</h2>
          <div className="mt-6">
            <Link
              href="/news"
              className="inline-flex items-center justify-between bg-[#1E5F4A] text-white text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
            >
              <span>View all</span>
              <span>→</span>
            </Link>
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
