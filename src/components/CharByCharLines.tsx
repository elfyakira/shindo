"use client";

import { useEffect, useRef, useState } from "react";

export default function CharByCharLines({
  lines,
  className = "",
}: {
  lines: { text: string; size: string; startDelay: number }[];
  className?: string;
}) {
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

  return (
    <div ref={ref} className="flex flex-col gap-2 mb-10">
      {lines.map((line, lineIdx) => (
        <p
          key={lineIdx}
          className={`${line.size} italic leading-[1.4] font-[var(--font-noto)] font-black ${className}`}
        >
          {line.text.split("").map((char, charIdx) => (
            <span
              key={charIdx}
              className={`inline-block ${isVisible ? "char-in" : "opacity-0"}`}
              style={
                isVisible
                  ? { animationDelay: `${line.startDelay + charIdx * 0.06}s` }
                  : undefined
              }
            >
              {char}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}
