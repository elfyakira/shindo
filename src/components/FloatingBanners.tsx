"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FloatingBanners() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isVisible, setIsVisible] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <div
      className={`fixed bottom-6 right-2 lg:right-6 z-[9999] flex flex-col gap-3 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-hidden={!isVisible}
    >
      <a
        href="https://clients.itszai.jp/4e7a417a4f413d3d/job/100?ref=true&utm_source=https%3A%2F%2Fwww.shindou-kk.co.jp%2F"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src="/images/banners/banner-1.png"
          alt="採用情報を見る"
          width={1280}
          height={720}
          className="w-36 sm:w-56 lg:w-80 h-auto rounded shadow-lg"
          priority={false}
        />
      </a>
      <a
        href="https://clients.itszai.jp/4e7a417a4f413d3d/job/101?ref=true&utm_source=https%3A%2F%2Fwww.shindou-kk.co.jp%2F"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Image
          src="/images/banners/banner-2.png"
          alt="採用情報を見る"
          width={1280}
          height={720}
          className="w-36 sm:w-56 lg:w-80 h-auto rounded shadow-lg"
          priority={false}
        />
      </a>
    </div>
  );
}
