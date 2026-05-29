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
      <h2 className={`text-[32px] lg:text-[96px] font-black ${titleColor} leading-[0.9] mb-1 uppercase tracking-wide`}>
        {(() => {
          let charIndex = 0;
          const renderChar = (char: string) => {
            const i = charIndex++;
            return (
              <span
                key={i}
                className="inline-block"
                style={isVisible ? {
                  animation: `waveIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08}s forwards`,
                  opacity: 0,
                } : { opacity: 0 }}
              >
                {char}
              </span>
            );
          };
          // "\n" \u306F\u30B9\u30DE\u30DB\u306E\u307F\u306E\u6539\u884C\u30DE\u30FC\u30AB\u30FC\uFF08PC\u3067\u306F1\u884C\u306E\u307E\u307E\uFF09\u3002
          const segments = en.split("\n");
          return segments.map((segment, si) => {
            const words = segment.split(" ");
            // \u8907\u6570\u5358\u8A9E\u306F\u5358\u8A9E\u5883\u754C\u3067\u6539\u884C\uFF08\u5358\u8A9E\u306E\u9014\u4E2D\u3067\u5272\u3089\u306A\u3044\uFF09\u3002
            // 1\u5358\u8A9E\u306E\u307F\u306E\u5834\u5408\u306F\u3001\u53CE\u307E\u3089\u306A\u3044\u3068\u9014\u5207\u308C\u308B\u305F\u3081\u6298\u308A\u8FD4\u3057\u3092\u8A31\u53EF\u3059\u308B\u3002
            const wordWrapClass = words.length > 1 ? "inline-block whitespace-nowrap" : "inline";
            return (
              <span key={si}>
                {words.map((word, wi) => (
                  <span key={wi}>
                    <span className={wordWrapClass}>
                      {word.split("").map((char) => renderChar(char))}
                    </span>
                    {/* \u5358\u8A9E\u9593\u306F\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\uFF08\u3053\u3053\u3067\u306E\u307F\u6539\u884C\u53EF\u80FD\uFF09 */}
                    {wi < words.length - 1 ? " " : null}
                  </span>
                ))}
                {/* \u30BB\u30B0\u30E1\u30F3\u30C8\u9593\u306F\u30B9\u30DE\u30DB\u306E\u307F\u6539\u884C */}
                {si < segments.length - 1 ? <br className="lg:hidden" /> : null}
              </span>
            );
          });
        })()}
      </h2>
      {ja && (
        <p className={`text-[14px] lg:text-[16px] font-bold ${titleColor} leading-[1.4] mb-6`}>
          {ja}
        </p>
      )}
    </div>
  );
}
