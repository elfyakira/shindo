"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/animations";
import WaveTitle from "@/components/WaveTitle";
import DecoShape from "@/components/DecoShape";
import { ALL_AWARDS } from "@/lib/awards";

const AWARD_PHOTOS = [1, 3, 4, 6, 7, 8, 9].map((n) => ({
  image: `/images/awards-photos/photo-${String(n).padStart(2, "0")}.jpg`,
  alt: `表彰式写真${n}`,
}));

export default function AwardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generated/awards-hero.jpg"
            alt="各種表彰"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <DecoShape color="red" width={170} height={60} top="14%" right="6%" rotate={10} direction="top-right" zIndex={6} />
        <DecoShape color="green" width={120} height={45} bottom="-25px" right="14%" rotate={-7} delay={0.2} direction="bottom-right" zIndex={6} />
        <div className="relative z-10 w-full px-6 lg:px-[10%]">
          <WaveTitle en="Awards" ja="各種表彰" variant="dark" />
        </div>
      </section>

      {/* Introduction + Ceremony Photos */}
      <section className="relative py-20 lg:py-32 bg-[#16a637] overflow-hidden">
        <DecoShape color="red" width={180} height={65} top="-30px" right="5%" rotate={-9} direction="top-right" zIndex={5} />
        <DecoShape color="red" width={130} height={48} bottom="-25px" left="6%" rotate={11} delay={0.2} direction="bottom-left" zIndex={5} />
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp>
            <div className="text-left">
              <h2 className="text-[28px] lg:text-[40px] font-bold text-white leading-[1.4] mb-4">
                確かな実績が、信頼の証です。
              </h2>
              <p className="text-[14px] lg:text-[15px] text-white leading-[2] mb-6">
                信藤建設は、国土交通省・三重県・四日市市をはじめとする官公庁から、数多くの優良工事表彰をいただいてまいりました。これらの表彰は、安全管理・品質管理・工程管理のすべてにおいて高い評価をいただいた結果です。
              </p>
              <p className="text-[14px] lg:text-[15px] text-white leading-[2]">
                一つひとつの工事に誠実に向き合い、発注者の期待に応え続けてきた88年の積み重ねが、ここに表れています。今後も地域に信頼される施工品質を追求し、さらなる実績を積み上げてまいります。
              </p>
            </div>
          </FadeInUp>

          <FadeInUp className="mt-12 lg:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
              {AWARD_PHOTOS.map((photo, index) => (
                <div key={index} className="relative aspect-[4/3] rounded overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Award Certificates */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <DecoShape color="green" width={150} height={55} top="-25px" right="4%" rotate={7} direction="top-right" zIndex={5} />
        <DecoShape color="red" width={110} height={42} bottom="6%" left="2%" rotate={-12} delay={0.15} direction="bottom-left" zIndex={5} />
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp className="mb-10 lg:mb-16">
            <WaveTitle en="Certificates" ja="表彰状一覧" />
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {ALL_AWARDS.map((award, index) => (
              <FadeInUp key={index} delay={index * 0.05}>
                <div className={`relative rounded overflow-hidden bg-gray-100 ${award.vertical ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className={award.vertical ? "object-contain" : "object-cover"}
                  />
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
