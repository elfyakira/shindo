import Image from "next/image";
import Link from "next/link";
import DecoShape from "@/components/DecoShape";
import { company, contact, locations, images } from "@/lib/site";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Business", href: "/business" },
  { label: "Company", href: "/company" },
  { label: "Recruit", href: "/recruit" },
  { label: "Blog", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const hq = locations.headquarters;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* 装飾シェイプ */}
      <DecoShape color="white" width={240} top="35%" left="-80px" delay={0.1} zIndex={1} />
      <DecoShape color="white" width={280} bottom="-100px" right="12%" delay={0.2} zIndex={1} />
      <DecoShape color="red" width={160} top="32%" right="5%" delay={0.15} zIndex={2} />
      {/* Contact Section */}
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src="/images/generated/company-bg.jpg"
                alt="お問い合わせ"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <Link href="/contact" className="flex items-center gap-6 mb-6 group">
              <h2 className="text-[32px] lg:text-[48px] font-black text-white">Contact us</h2>
              <span className="text-white text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
            <p className="text-[14px] lg:text-[15px] text-white/70 leading-[2]">
              信藤建設へのお問い合わせご質問は<br />
              こちらのフォームよりお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12 pt-12 lg:pt-16 pb-6 lg:pb-8 border-t border-white/20">
        {/* PC: 2 columns */}
        <div className="hidden lg:flex lg:justify-between lg:items-start mb-12">
          {/* Left: Logo + Company Info */}
          <div className="flex items-start gap-8">
            <Link href="/">
              <Image
                src={images.logo || "/images/logo.gif"}
                unoptimized
                alt={company.name || "信藤建設"}
                width={160}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <div className="text-sm text-white/80 leading-relaxed font-[var(--font-noto)]">
              {hq.zipCode && hq.address && (
                <p>〒{hq.zipCode} {hq.address}</p>
              )}
              {contact.phone && <p>TEL: {contact.phoneFormatted || contact.phone}</p>}
              {contact.fax && <p>FAX: {contact.fax}</p>}
            </div>
          </div>

          {/* Right: Navigation */}
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors font-[var(--font-noto)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* SP: Stacked layout */}
        <div className="lg:hidden text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <Image
              src={images.logo || "/images/logo.gif"}
                unoptimized
              alt={company.name || "信藤建設"}
              width={140}
              height={35}
              className="brightness-0 invert"
            />
          </Link>
          <div className="text-sm text-white/80 leading-relaxed mb-6 font-[var(--font-noto)]">
            {hq.zipCode && hq.address && (
              <p>〒{hq.zipCode} {hq.address}</p>
            )}
            {contact.phone && <p>TEL: {contact.phoneFormatted || contact.phone}</p>}
            {contact.fax && <p>FAX: {contact.fax}</p>}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors font-[var(--font-noto)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-xs text-white/60">
            © {currentYear} {company.nameEn || company.name || "Shindo Construction"}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
