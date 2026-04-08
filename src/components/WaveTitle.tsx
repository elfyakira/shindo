"use client";

import { useEffect, useRef, useState } from "react";

interface WaveTitleProps {
  en: string;
  ja?: string;
  variant?: "light" | "dark";
  className?: string;
}

export default function WaveTitle({ en, ja, variant = "light", className = "" }: WaveTitleProps) {
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

  const titleColor = variant === "light" ? "text-[#16a637]" : "text-white";

  return (
    <div ref={ref} className={className}>
      <h2 className={`text-[56px] lg:text-[96px] font-black ${titleColor} leading-[0.9] mb-1 uppercase tracking-wide`}>
        {en.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block"
            style={isVisible ? {
              animation: `waveIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08}s forwards`,
              opacity: 0,
            } : { opacity: 0 }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
      {ja && (
        <p className={`text-[14px] lg:text-[16px] font-bold ${titleColor} leading-[1.4] mb-6`}>
          {ja}
        </p>
      )}
    </div>
  );
}
