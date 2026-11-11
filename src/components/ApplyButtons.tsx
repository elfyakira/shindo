"use client";

import Link from "next/link";
import WaveButton from "@/components/WaveButton";
import { events } from "@/lib/analytics";
import {
  ALL_APPLY_JOBS,
  APPLY_APPEALS,
  APPLY_JOBS,
  type ApplyJob,
} from "@/lib/recruit";

interface ApplyButtonsProps {
  /** GA4 の apply_click に記録する設置場所（例: "recruit_hero"） */
  location: string;
  /** 表示する職種。省略時は両方 */
  jobs?: ApplyJob[];
  /** light: 緑背景の上に置く白ボタン / dark: 白背景の上に置く緑ボタン */
  variant?: "light" | "dark";
  /** 訴求タグと「まずはご相談」導線を表示するか */
  showAppeal?: boolean;
  /** ボタン文言を上書き（1職種だけ表示する場合など） */
  buttonText?: string;
  /** PC表示での揃え（スマホは常に中央） */
  align?: "center" | "left";
  className?: string;
}

export default function ApplyButtons({
  location,
  jobs = ALL_APPLY_JOBS,
  variant = "dark",
  showAppeal = true,
  buttonText,
  align = "center",
  className = "",
}: ApplyButtonsProps) {
  const onLight = variant === "dark"; // 白背景かどうか
  const chip = onLight
    ? "bg-[#16a637]/10 text-[#16a637]"
    : "bg-white/15 text-white";
  const sub = onLight ? "text-text-secondary" : "text-white/80";
  const subLink = onLight ? "text-[#16a637]" : "text-white";
  const left = align === "left";

  return (
    <div className={`flex flex-col items-center text-center ${left ? "lg:items-start lg:text-left" : ""} ${className}`}>
      {showAppeal && (
        <ul className={`flex flex-wrap justify-center gap-2 mb-6 ${left ? "lg:justify-start" : ""}`}>
          {APPLY_APPEALS.map((a) => (
            <li key={a} className={`text-[13px] font-bold px-4 py-1.5 rounded-full ${chip}`}>
              {a}
            </li>
          ))}
        </ul>
      )}

      <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:gap-6 ${left ? "lg:justify-start" : ""}`}>
        {jobs.map((job) => (
          <div key={job} onClick={() => events.applyClick(job, location)}>
            <WaveButton
              href={APPLY_JOBS[job].url}
              target="_blank"
              rel="noopener noreferrer"
              text={buttonText ?? `${APPLY_JOBS[job].label}に応募`}
              variant={variant}
            />
          </div>
        ))}
      </div>

      {showAppeal && (
        <p className={`mt-6 text-[13px] lg:text-[14px] leading-[1.8] ${sub}`}>
          まずはご相談・お問い合わせ、職場見学だけでもOKです。
          <Link
            href="/contact"
            onClick={() => events.ctaClick("recruit_consult", location)}
            className={`inline-block ml-1 font-bold underline underline-offset-4 ${subLink}`}
          >
            お問い合わせはこちら →
          </Link>
        </p>
      )}
    </div>
  );
}
