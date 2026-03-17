"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/animations";
import { ALL_AWARDS } from "@/lib/awards";

const AWARD_PHOTOS = Array.from({ length: 9 }, (_, i) => ({
  image: `/images/awards-photos/photo-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `表彰式写真${i + 1}`,
}));

export default function AwardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
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
        <div className="relative z-10 w-full px-6 lg:px-[10%]">
          <h1 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">Awards</h1>
          <p className="text-sm text-white/80 tracking-wider">各種表彰</p>
        </div>
      </section>

      {/* Introduction + Ceremony Photos */}
      <section className="py-20 lg:py-32 bg-[#1E5F4A]">
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp className="mb-10 lg:mb-16">
            <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Certificates</h2>
            <span className="section-label">表彰状一覧</span>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {ALL_AWARDS.map((award, index) => (
              <FadeInUp key={index} delay={index * 0.05}>
                <div className={`relative rounded overflow-hidden bg-gray-100 ${award.vertical ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
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
    </>
  );
}
