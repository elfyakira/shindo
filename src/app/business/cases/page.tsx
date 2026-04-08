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
    <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
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

      <DecoShape color="red" width={170} height={60} top="12%" right="6%" rotate={9} direction="top-right" zIndex={6} />
      <DecoShape color="green" width={120} height={45} bottom="-25px" right="14%" rotate={-7} delay={0.2} direction="bottom-right" zIndex={6} />

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
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <DecoShape color="green" width={150} height={55} top="-30px" left="4%" rotate={-8} direction="top-left" zIndex={5} />
      <DecoShape color="red" width={110} height={42} bottom="-25px" right="3%" rotate={11} delay={0.15} direction="bottom-right" zIndex={5} />
      <div className="max-w-container mx-auto px-6 lg:px-12">
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
