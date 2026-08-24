"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FadeInUp } from "@/components/animations";
import DecoShape from "@/components/DecoShape";
import WaveButton from "@/components/WaveButton";
import CharByCharLines from "@/components/CharByCharLines";
import { ALL_AWARDS } from "@/lib/awards";
import { ALL_CASES } from "@/lib/cases";

// ============================================================
// WipeInLeft - スクロールで画面に入ったらワイプ開始
// ============================================================
function WipeInLeft({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`inline-block wipe-in-left ${isVisible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}

// ============================================================
// CharByCharLines - スクロールで画面に入ったら一文字ずつアニメーション
// ============================================================
// Hero Section
// ============================================================
const HERO_LINES = [
  { text: "建設がすき。", size: "text-[40px] sm:text-[88px] lg:text-[120px]", startDelay: 0.5 },
  { text: "この地域がすき。", size: "text-[40px] sm:text-[88px] lg:text-[120px]", startDelay: 1.5 },
];

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

      <div className="absolute top-[55%] left-[6%] lg:left-[8%] z-10 flex flex-col gap-3" style={{ textShadow: "2px 2px 16px rgba(0,0,0,0.4), 0 0 30px rgba(0,0,0,0.2)" }}>
        {HERO_LINES.map((line, lineIdx) => (
          <p key={lineIdx} className={`${line.size} italic leading-[1.2] text-white font-[var(--font-noto)] font-black`}>
            {line.text.split("").map((char, charIdx) => (
              <span
                key={charIdx}
                className="char-in inline-block"
                style={{ animationDelay: `${line.startDelay + charIdx * 0.06}s` }}
              >
                {char}
              </span>
            ))}
          </p>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce z-10">
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
    <section className="relative py-20 lg:py-32 bg-[#16a637] overflow-visible">
      {/* 装飾シェイプ - ヒーローに被らないように内側配置 */}
      <DecoShape color="red" width={180} top="-70px" right="8%" direction="top-right" zIndex={15} className="hidden lg:block" />
      <DecoShape color="white" width={220} top="45%" left="-90px" delay={0.1} direction="top-left" zIndex={15} className="hidden lg:block" />
      <DecoShape color="red" width={160} top="75%" right="3%" delay={0.15} direction="top-right" zIndex={15} />
      <DecoShape color="red" width={220} bottom="-100px" right="5%" delay={0.2} direction="bottom-right" zIndex={15} className="hidden lg:block" />
      <div className="relative max-w-container mx-auto px-6 lg:px-12">
        <WipeInLeft>
          <h2 className="inline-block text-[56px] lg:text-[96px] font-black text-[#16a637] bg-white px-6 py-0 leading-[0.9] mb-8 uppercase tracking-wide">About us</h2>
        </WipeInLeft>
        <CharByCharLines lines={[
          { text: "建設がすき。この地域がすき。", size: "text-[24px] lg:text-[40px]", startDelay: 0.3 },
          { text: "だから、必要なものを本気でつくる。", size: "text-[24px] lg:text-[40px]", startDelay: 1.5 },
        ]} className="text-white" />
        <FadeInUp>
          <p className="text-[16px] lg:text-[28px] font-bold text-white leading-[1.6] mb-10 font-[var(--font-noto)] text-justify" style={{ textWrap: "pretty" }}>
            なぜこの工事を行うのか。その意味を、最後まで考え抜く。建設が好きだから。この地域が好きだから。一つひとつの現場に、本気で向き合う。技術や品質は、満たして当たり前。その先にあるのは、地域の暮らしを守り続けるという責任です。ISO取得に裏付けられた施工品質とともに、私たちは今日も、このまちの未来を本気でつくっています。
          </p>
          <div className="grid grid-cols-3 gap-6 mb-10 max-w-[500px]">
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
          <WaveButton href="/about" text="View all" />
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
    <section className="relative py-16 lg:py-24 bg-white overflow-visible">
      {/* 装飾シェイプ - セクション跨ぎ・大小ミックス */}
      <DecoShape color="green" width={340} top="-140px" right="-60px" direction="top-right" zIndex={3} className="hidden lg:block" />
      <DecoShape color="red" width={100} mobileWidth={78} top="72%" left="-50px" delay={0.1} direction="top-left" zIndex={3} />
      <DecoShape color="green" width={220} bottom="-180px" right="8%" delay={0.2} direction="bottom-right" zIndex={3} className="hidden lg:block" />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            <div className="w-full lg:w-1/2">
              <div className="relative h-full min-h-[400px] rounded overflow-hidden">
                <Image
                  src="/images/generated/business-hero.jpg"
                  alt="事業内容"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <WipeInLeft><h2 className="inline-block text-[56px] lg:text-[96px] font-black text-[#16a637] leading-[0.9] mb-1 uppercase tracking-wide">Business</h2></WipeInLeft>
              <p className="text-[14px] lg:text-[16px] font-bold text-[#16a637] leading-[1.4] mb-6 font-[var(--font-noto)]">事業内容</p>
              <p className="text-[14px] lg:text-[15px] text-black leading-[2] mb-8">
                信藤建設は、三重県北勢・中勢エリアを中心に、<br />
                河川・道路・舗装・上下水道・港湾などの公共事業を担い、<br />
                地域インフラを支えてきた総合建設会社です。
                <br /><br />
                公共工事を主軸に、民間工事にも対応し、<br />
                計画から施工まで一貫した体制で、幅広い工事に本気で向き合っています。
                <br /><br />
                さらに、インフラ整備にとどまらず、<br />
                太陽光発電事業や地域と関わる活動にも取り組みながら、<br />
                この地域に必要とされ続ける会社であり続けます。
              </p>
              <WaveButton href="/business" text="View all" variant="dark" />
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
    <section className="relative pt-16 lg:pt-24 pb-16 lg:pb-24 overflow-visible">
      <div className="absolute inset-0 top-[60%] bg-[#16a637]" />
      {/* 装飾シェイプ */}
      <DecoShape color="red" width={300} top="-120px" right="-80px" direction="top-right" zIndex={6} />
      <DecoShape color="green" width={240} top="50%" left="-100px" delay={0.1} direction="top-left" zIndex={6} />
      <DecoShape color="red" width={260} bottom="-100px" right="12%" delay={0.2} direction="bottom-right" zIndex={6} />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-16 lg:mb-20">
          <WipeInLeft><h2 className="inline-block text-[56px] lg:text-[96px] font-black text-[#16a637] leading-[0.9] mb-1 uppercase tracking-wide">Awards</h2></WipeInLeft>
          <p className="text-[14px] lg:text-[16px] font-bold text-[#16a637] leading-[1.4] mb-6 font-[var(--font-noto)]">各種表彰</p>
          <div className="mt-6">
            <WaveButton href="/awards" text="View all" variant="dark" />
          </div>
        </FadeInUp>
      </div>

      <div className="relative z-10">
        <div className="flex gap-4 lg:gap-6 animate-scroll-left-fast">
          {doubled.map((award, index) => (
            <div key={index} className="flex-shrink-0 w-[170px] lg:w-[350px]">
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
    <section className="relative py-16 lg:py-24 bg-[#16a637] overflow-visible">
      {/* 装飾シェイプ */}
      <DecoShape color="red" width={280} top="-120px" right="-80px" direction="top-right" zIndex={3} />
      <DecoShape color="white" width={220} top="10%" left="-90px" delay={0.1} direction="top-left" zIndex={15} className="hidden lg:block" />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <WipeInLeft><h2 className="inline-block text-[56px] lg:text-[96px] font-black text-white leading-[0.9] mb-1 uppercase tracking-wide">Cases</h2></WipeInLeft>
          <p className="text-[14px] lg:text-[16px] font-bold text-white leading-[1.4] mb-6 font-[var(--font-noto)]">施工実績</p>
          <div className="mt-6">
            <WaveButton href="/business/cases" text="View all" variant="light" />
          </div>
        </FadeInUp>
      </div>

      <div className="relative">
        <div className="flex gap-4 lg:gap-6 animate-scroll-left">
          {doubled.map((item, index) => (
            <Link
              key={index}
              href="/business/cases"
              className="block group flex-shrink-0 w-[170px] lg:w-[350px]"
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
              <div className="hidden lg:block w-full lg:w-1/2">
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
                <WipeInLeft><h2 className="inline-block text-[48px] lg:text-[96px] font-black text-white leading-[0.9] mb-1 uppercase tracking-wide">Company</h2></WipeInLeft>
                <p className="text-[14px] lg:text-[16px] font-bold text-white leading-[1.4] mb-6 font-[var(--font-noto)]">会社案内</p>
                <p className="text-[14px] lg:text-[15px] text-white/90 leading-[2] mt-6 mb-8">
                  信藤建設は、昭和13年の創業以来、<br />
                  三重県北勢・中勢エリアを中心に、<br />
                  公共事業を通じて地域の暮らしを支え続けてきました。
                  <br /><br />
                  これからも、建設の仕事に本気で向き合い、<br />
                  この地域にとって本当に必要なものを、<br />
                  責任をもって形にし続けていきます。
                </p>
                <WaveButton href="/company" text="View all" variant="light" />
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
    <section className="relative py-16 lg:py-24 bg-white overflow-visible">
      {/* 装飾シェイプ */}
      <DecoShape color="green" width={340} top="-140px" right="-80px" direction="top-right" zIndex={3} className="hidden lg:block" />
      <DecoShape color="red" width={260} top="40%" left="-100px" delay={0.1} direction="top-left" zIndex={3} />
      <DecoShape color="red" width={180} bottom="-80px" right="4%" mobileRight="-6%" delay={0.2} direction="bottom-right" zIndex={4} />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        {/* セクションタイトル */}
        <FadeInUp>
          <div className="mb-8 lg:mb-12">
            <WipeInLeft><h2 className="inline-block text-[56px] lg:text-[96px] font-black text-[#16a637] leading-[0.9] mb-1 uppercase tracking-wide">Recruit</h2></WipeInLeft>
            <p className="text-[14px] lg:text-[16px] font-bold text-[#16a637] leading-[1.4] mb-6 font-[var(--font-noto)]">採用情報</p>
          </div>
        </FadeInUp>

        {/* 採用PV動画 */}
        <FadeInUp>
          <div className="relative w-full aspect-video mb-12 lg:mb-16 rounded overflow-hidden bg-black">
            <video
              src="/videos/recruit-pv.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
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
              <p className="text-[24px] lg:text-[32px] font-black text-text-primary mb-2">Join Our Team</p>
              <p className="text-[14px] lg:text-[16px] font-bold text-[#16a637] leading-[1.4] mb-6 font-[var(--font-noto)]">共に街をつくる仲間へ</p>
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
function BlogSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-visible">
      {/* 装飾シェイプ */}
      <DecoShape color="green" width={320} top="-120px" right="-60px" direction="top-right" zIndex={3} className="hidden lg:block" />
      <DecoShape color="red" width={240} top="40%" left="-80px" delay={0.1} direction="top-left" zIndex={3} className="hidden lg:block" />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <WipeInLeft><h2 className="inline-block text-[56px] lg:text-[96px] font-black text-[#16a637] leading-[0.9] mb-4 uppercase tracking-wide">Blog</h2></WipeInLeft>
          <div className="mt-6">
            <WaveButton href="/news" text="View all" variant="dark" />
          </div>
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
