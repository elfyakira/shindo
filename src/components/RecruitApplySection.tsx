"use client";

import { FadeInUp } from "@/components/animations";
import ApplyButtons from "@/components/ApplyButtons";

// 会社情報・About などページ末尾に置く採用導線
export default function RecruitApplySection({ location }: { location: string }) {
  return (
    <section className="relative py-16 lg:py-24 bg-[#16a637]">
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 text-center">
        <FadeInUp>
          <p className="text-[13px] lg:text-[14px] font-bold text-white/80 tracking-widest mb-3">RECRUIT</p>
          <h2 className="text-[22px] lg:text-[36px] font-bold text-white mb-4">
            一緒に地域を支える仲間を募集しています
          </h2>
          <p className="text-[14px] lg:text-[15px] text-white/80 leading-[2] mb-10">
            施工管理・現場作業員の2職種で募集中です。
          </p>
          <ApplyButtons location={location} variant="light" />
        </FadeInUp>
      </div>
    </section>
  );
}
