"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { company, images } from "@/lib/site";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Business", href: "/business" },
  { label: "Company", href: "/company" },
  { label: "Recruit", href: "/recruit" },
  { label: "Blog", href: "/news" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* PC Header */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-[1000] py-4 px-12">
        <div className="flex items-center justify-between h-16 bg-white/90 backdrop-blur-sm rounded-full px-8 shadow-header">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo || "/images/logo.gif"}
              unoptimized
              alt={company.name || "信藤建設"}
              width={180}
              height={45}
              className="transition-all duration-300"
            />
          </Link>

          {/* PC Navigation */}
          <nav className="flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-medium transition-colors duration-200 hover:opacity-70 font-[var(--font-noto)] ${
                  isActive(item.href) ? "text-primary" : "text-text-primary"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* SP Header (fixed) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[1000] h-[60px] bg-white shadow-header">
        <div className="flex items-center justify-between h-full px-4">
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo || "/images/logo.gif"}
              unoptimized
              alt={company.name || "信藤建設"}
              width={140}
              height={35}
            />
          </Link>

          <button
            className="w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] -rotate-45" : "top-[19px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[999] bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 z-[999] w-[80vw] max-w-[300px] h-full bg-white transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="モバイルナビゲーション"
      >
        <div className="pt-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block h-14 leading-[56px] px-6 text-lg border-b border-gray-100 transition-colors hover:text-primary font-[var(--font-noto)] ${
                isActive(item.href) ? "text-primary" : "text-text-primary"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-6">
            <Link
              href="/contact"
              className="block w-full h-12 leading-[48px] text-center bg-primary text-white rounded-btn font-semibold transition-colors hover:opacity-90"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
