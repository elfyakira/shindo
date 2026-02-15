import Image from "next/image";
import Link from "next/link";
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
    <footer className="bg-primary text-white">
      <div className="max-w-container mx-auto px-6 lg:px-12 pt-12 lg:pt-16 pb-6 lg:pb-8">
        {/* PC: 2 columns */}
        <div className="hidden lg:flex lg:justify-between lg:items-start mb-12">
          {/* Left: Logo + Company Info */}
          <div className="flex items-start gap-8">
            <Link href="/">
              <Image
                src={images.logo || "/images/logo.png"}
                alt={company.name || "信藤建設"}
                width={160}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <div className="text-sm text-white/80 leading-relaxed">
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
                className="text-sm text-white/80 hover:text-white transition-colors"
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
              src={images.logo || "/images/logo.png"}
              alt={company.name || "信藤建設"}
              width={140}
              height={35}
              className="brightness-0 invert"
            />
          </Link>
          <div className="text-sm text-white/80 leading-relaxed mb-6">
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
                className="text-sm text-white/80 hover:text-white transition-colors"
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
