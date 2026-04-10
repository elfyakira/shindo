"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/animations";
import WaveTitle from "@/components/WaveTitle";
import DecoShape from "@/components/DecoShape";
import { ALL_CASES } from "@/lib/cases";

// ============================================================
// Hero Section
// ============================================================
function HeroSection() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-visible">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/cases-hero.jpg"
          alt="施工実績"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <DecoShape color="red" width={170} top="12%" right="6%" zIndex={6} />
      <DecoShape color="green" width={120} bottom="-25px" right="14%" delay={0.15} zIndex={6} />
      <DecoShape color="red" width={110} bottom="12%" left="4%" delay={0.2} zIndex={6} />

      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <WaveTitle en="Cases" ja="施工実績" variant="dark" />
      </div>
    </section>
  );
}

// ============================================================
// Cases Grid Section
// ============================================================
function CasesGridSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-visible">
      <DecoShape color="green" width={340} top="-140px" right="-60px" zIndex={3} />
      <DecoShape color="red" width={100} top="45%" left="-50px" delay={0.1} zIndex={3} />
      <DecoShape color="green" width={220} bottom="-160px" right="8%" delay={0.2} zIndex={3} />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ALL_CASES.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.03}>
              <div className="group">
                <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-[13px] lg:text-[14px] text-black mt-3 leading-[1.6]">
                  {item.title}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
export default function CasesPage() {
  return (
    <>
      <HeroSection />
      <CasesGridSection />
    </>
  );
}
