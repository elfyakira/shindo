"use client";

import { FadeInUp } from "@/components/animations";

// ============================================================
const LOCATIONS = [
  { id: 1, name: "aaaa", subInfo: "aaaaaaa", address: "aaaaaaaaaaaaaaaaaa", tel: "aaaaaaa", fax: "aaaaaaa" },
  { id: 2, name: "aaaa", subInfo: "aaaaaaa", address: "aaaaaaaaaaaaaaaaaa", tel: "aaaaaaa", fax: "aaaaaaa" },
  { id: 3, name: "aaaa", subInfo: "aaaaaaa", address: "aaaaaaaaaaaaaaaaaa", tel: "aaaaaaa", fax: "aaaaaaa" },
  { id: 4, name: "aaaa", subInfo: "aaaaaaa", address: "aaaaaaaaaaaaaaaaaa", tel: "aaaaaaa", fax: "aaaaaaa" },
  { id: 5, name: "aaaa", subInfo: "aaaaaaa", address: "aaaaaaaaaaaaaaaaaa", tel: "aaaaaaa", fax: "aaaaaaa" },
  { id: 6, name: "aaaa", subInfo: "aaaaaaa", address: "aaaaaaaaaaaaaaaaaa", tel: "aaaaaaa", fax: "aaaaaaa" },
  { id: 7, name: "aaaa", subInfo: "aaaaaaa", address: "aaaaaaaaaaaaaaaaaa", tel: "aaaaaaa", fax: "aaaaaaa" },
  { id: 8, name: "aaaa", subInfo: "aaaaaaa", address: "aaaaaaaaaaaaaaaaaa", tel: "aaaaaaa", fax: "aaaaaaa" },
];

// ============================================================
function LocationCard({
  name,
  subInfo,
  address,
  tel,
  fax,
  delay = 0,
}: {
  name: string;
  subInfo: string;
  address: string;
  tel: string;
  fax: string;
  delay?: number;
}) {
  return (
    <FadeInUp delay={delay}>
      <div className="py-8 border-b border-gray-200">
        <h2 className="text-[18px] lg:text-[20px] font-bold text-[#1E5F4A] mb-2">
          {name}
        </h2>
        <p className="text-[14px] text-text-secondary mb-3">{subInfo}</p>
        <p className="text-[14px] text-text-primary mb-3">{address}</p>
        <p className="text-[14px] text-text-primary mb-1">TEL　{tel}</p>
        <p className="text-[14px] text-text-primary mb-4">FAX　{fax}</p>
        <button className="inline-flex items-center justify-between bg-[#1E5F4A] text-white text-sm font-medium px-6 py-2 rounded-full hover:opacity-90 transition-opacity w-40">
          <span>Google map</span>
          <span>→</span>
        </button>
      </div>
    </FadeInUp>
  );
}

// ============================================================
export default function AccessPage() {
  return (
    <div className="pt-[60px] lg:pt-20">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp className="mb-12 lg:mb-16">
            <h1 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Access</h1>
            <span className="section-label">アクセス</span>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 border-t border-gray-200">
            {LOCATIONS.map((location, index) => (
              <LocationCard
                key={location.id}
                name={location.name}
                subInfo={location.subInfo}
                address={location.address}
                tel={location.tel}
                fax={location.fax}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
