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
          src="/images/generated/ceo_portrait.jpg"
          alt="About"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <p className="text-sm text-white/80 tracking-wider mb-2">私たちについて</p>
        <h1 className="text-[32px] lg:text-[48px] font-bold text-white">About</h1>
      </div>
    </section>
  );
}

// ============================================================
// About Content Section
// ============================================================
function AboutContentSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <FadeInUp className="lg:w-1/3">
            <span className="section-label">私たちについて</span>
            <h2 className="text-[24px] lg:text-[28px] font-bold text-text-primary">About</h2>
          </FadeInUp>

          <FadeInUp className="lg:w-2/3" delay={0.1}>
            <h3 className="text-[20px] lg:text-[24px] font-bold text-text-primary leading-[1.6] mb-8">
              地域にとって本当に必要な公共事業に、<br />
              誠実に向き合う建設会社です。
            </h3>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mb-6">
              信藤建設は、昭和13年の創業以来、三重県四日市市を拠点に、公共事業を中心とした地域インフラ整備に取り組んできました。
            </p>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2] mb-6">
              河川の護岸工事や道路舗装、堤防工事、上下水道工事など、地域の暮らしを支える仕事を、誠実に、着実に続けています。
            </p>
            <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[2]">
              私たちは、目に見えにくいところで地域を支えるインフラ整備こそ、本当に大切な仕事だと考えています。
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Strengths Section
// ============================================================
const STRENGTHS = [
  {
    number: "01",
    title: "地域密着の姿勢",
    description: "三重県北勢・中勢エリアを中心に、地域の皆様と共に歩んできました。地元の風土を熟知した施工で、安心・安全な工事を実現します。",
  },
  {
    number: "02",
    title: "豊富な実績",
    description: "昭和13年の創業以来、数多くの公共工事に携わってきました。河川護岸、道路舗装、上下水道など、幅広い分野での実績があります。",
  },
  {
    number: "03",
    title: "確かな技術力",
    description: "長年培った技術と経験を活かし、品質の高い施工を提供します。国土交通省や県からの表彰実績も多数あります。",
  },
];

function StrengthsSection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-12 lg:mb-16">
          <h2 className="text-[24px] lg:text-[28px] font-bold text-text-primary">
            信藤建設の強み
          </h2>
        </FadeInUp>

        <div className="space-y-8 lg:space-y-12">
          {STRENGTHS.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="flex gap-6 lg:gap-10">
                <span className="text-[32px] lg:text-[40px] font-bold text-primary/30">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-[18px] lg:text-[20px] font-bold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] text-text-secondary leading-[1.8]">
                    {item.description}
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
// Awards Section
// ============================================================
const AWARDS = [
  { image: "/images/generated/completed_building_sky.jpg", title: "国土交通大臣表彰", year: "令和X年" },
  { image: "/images/generated/completed_building_sky.jpg", title: "三重県知事表彰", year: "令和X年" },
  { image: "/images/generated/completed_building_sky.jpg", title: "優良工事表彰", year: "令和X年" },
  { image: "/images/generated/completed_building_sky.jpg", title: "安全優良工事表彰", year: "令和X年" },
  { image: "/images/generated/completed_building_sky.jpg", title: "品質優秀表彰", year: "令和X年" },
  { image: "/images/generated/completed_building_sky.jpg", title: "地域貢献表彰", year: "令和X年" },
];

function AwardsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <span className="section-label">受賞歴</span>
          <h2 className="text-[24px] lg:text-[28px] font-bold text-text-primary">Awards</h2>
        </FadeInUp>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {AWARDS.map((award, index) => (
            <FadeInUp key={index} delay={index * 0.05}>
              <div className="bg-white border border-gray-100 rounded overflow-hidden">
                <div className="relative aspect-[4/3] bg-gray-50">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-text-secondary mb-1">{award.year}</p>
                  <p className="text-[14px] font-medium text-text-primary">{award.title}</p>
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
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <span className="section-label">お知らせ</span>
          <h2 className="text-[24px] lg:text-[28px] font-bold text-text-primary">Blog</h2>
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
