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
          src="/images/generated/completed_building_sky.jpg"
          alt="施工実績"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <p className="text-sm text-white/80 tracking-wider mb-2">施工実績</p>
        <h1 className="text-[32px] lg:text-[48px] font-bold text-white">Business</h1>
      </div>
    </section>
  );
}

// ============================================================
// Cases Grid Section
// ============================================================
const CASES = [
  {
    id: 1,
    title: "aaaa",
    category: "令和X年度 公共X事業X地区基盤整備工事",
    location: "aaaa",
    period: "令和X年X月",
    client: "X建設事務所",
    image: "/images/generated/completed_building_sky.jpg",
  },
  {
    id: 2,
    title: "aaaa",
    category: "令和X年度 公共X事業X地区基盤整備工事",
    location: "aaaa",
    period: "令和X年X月",
    client: "X建設事務所",
    image: "/images/generated/completed_building_sky.jpg",
  },
  {
    id: 3,
    title: "aaaa",
    category: "令和X年度 公共X事業X地区基盤整備工事",
    location: "aaaa",
    period: "令和X年X月",
    client: "X建設事務所",
    image: "/images/generated/completed_building_sky.jpg",
  },
  {
    id: 4,
    title: "aaaa",
    category: "令和X年度 公共X事業X地区基盤整備工事",
    location: "aaaa",
    period: "令和X年X月",
    client: "X建設事務所",
    image: "/images/generated/completed_building_sky.jpg",
  },
  {
    id: 5,
    title: "aaaa",
    category: "令和X年度 公共X事業X地区基盤整備工事",
    location: "aaaa",
    period: "令和X年X月",
    client: "X建設事務所",
    image: "/images/generated/completed_building_sky.jpg",
  },
  {
    id: 6,
    title: "aaaa",
    category: "令和X年度 公共X事業X地区基盤整備工事",
    location: "aaaa",
    period: "令和X年X月",
    client: "X建設事務所",
    image: "/images/generated/completed_building_sky.jpg",
  },
  {
    id: 7,
    title: "aaaa",
    category: "令和X年度 公共X事業X地区基盤整備工事",
    location: "aaaa",
    period: "令和X年X月",
    client: "X建設事務所",
    image: "/images/generated/completed_building_sky.jpg",
  },
  {
    id: 8,
    title: "aaaa",
    category: "令和X年度 公共X事業X地区基盤整備工事",
    location: "aaaa",
    period: "令和X年X月",
    client: "X建設事務所",
    image: "/images/generated/completed_building_sky.jpg",
  },
  {
    id: 9,
    title: "aaaa",
    category: "令和X年度 公共X事業X地区基盤整備工事",
    location: "aaaa",
    period: "令和X年X月",
    client: "X建設事務所",
    image: "/images/generated/completed_building_sky.jpg",
  },
];

function CasesGridSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CASES.map((item, index) => (
            <FadeInUp key={item.id} delay={index * 0.05}>
              <div className="bg-white border border-gray-100 rounded overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 lg:p-5">
                  <p className="text-xs text-text-secondary mb-2">{item.category}</p>
                  <h3 className="text-[15px] lg:text-base font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <div className="text-xs text-text-secondary space-y-1">
                    <p>場所: {item.location}</p>
                    <p>工期: {item.period}</p>
                    <p>発注者: {item.client}</p>
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
export default function CasesPage() {
  return (
    <>
      <HeroSection />
      <CasesGridSection />
    </>
  );
}
