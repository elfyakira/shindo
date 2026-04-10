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
      className={`fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-hidden={!isVisible}
    >
      <Image
        src="/images/banners/banner-1.png"
        alt=""
        width={1280}
        height={720}
        className="w-56 lg:w-80 h-auto rounded shadow-lg"
        priority={false}
      />
      <Image
        src="/images/banners/banner-2.png"
        alt=""
        width={1280}
        height={720}
        className="w-56 lg:w-80 h-auto rounded shadow-lg"
        priority={false}
      />
    </div>
  );
}
