"use client";

import { FadeInUp } from "@/components/animations";

// ============================================================
// Locations Data (8 locations with placeholders)
// ============================================================
const LOCATIONS = [
  {
    id: 1,
    name: "aaaa",
    subInfo: "aaaaaaa",
    address: "aaaaaaaaaaaaaaaaaa",
    tel: "aaaaaaa",
    fax: "aaaaaaa",
  },
  {
    id: 2,
    name: "aaaa",
    subInfo: "aaaaaaa",
    address: "aaaaaaaaaaaaaaaaaa",
    tel: "aaaaaaa",
    fax: "aaaaaaa",
  },
  {
    id: 3,
    name: "aaaa",
    subInfo: "aaaaaaa",
    address: "aaaaaaaaaaaaaaaaaa",
    tel: "aaaaaaa",
    fax: "aaaaaaa",
  },
  {
    id: 4,
    name: "aaaa",
    subInfo: "aaaaaaa",
    address: "aaaaaaaaaaaaaaaaaa",
    tel: "aaaaaaa",
    fax: "aaaaaaa",
  },
  {
    id: 5,
    name: "aaaa",
    subInfo: "aaaaaaa",
    address: "aaaaaaaaaaaaaaaaaa",
    tel: "aaaaaaa",
    fax: "aaaaaaa",
  },
  {
    id: 6,
    name: "aaaa",
    subInfo: "aaaaaaa",
    address: "aaaaaaaaaaaaaaaaaa",
    tel: "aaaaaaa",
    fax: "aaaaaaa",
  },
  {
    id: 7,
    name: "aaaa",
    subInfo: "aaaaaaa",
    address: "aaaaaaaaaaaaaaaaaa",
    tel: "aaaaaaa",
    fax: "aaaaaaa",
  },
  {
    id: 8,
    name: "aaaa",
    subInfo: "aaaaaaa",
    address: "aaaaaaaaaaaaaaaaaa",
    tel: "aaaaaaa",
    fax: "aaaaaaa",
  },
];

// ============================================================
// Location Card Component
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
      <div className="mb-8">
        <h2 className="text-[18px] lg:text-[20px] font-bold text-[#1B5E3A] mb-2">
          {name}
        </h2>
        <p className="text-[14px] text-text-secondary mb-3">
          {subInfo}
        </p>
        <p className="text-[14px] text-text-primary mb-3">
          {address}
        </p>
        <p className="text-[14px] text-text-primary mb-1">
          TEL　{tel}
        </p>
        <p className="text-[14px] text-text-primary mb-4">
          FAX　{fax}
        </p>
        <button className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded bg-white text-[14px] text-text-primary hover:bg-gray-50 transition-colors">
          Google map
        </button>
      </div>
    </FadeInUp>
  );
}

// ============================================================
// Main Page
// ============================================================
export default function AccessPage() {
  return (
    <div className="pt-[60px] lg:pt-20">
      <section className="py-16 lg:py-24 bg-[#C5D3DC]">
        <div className="max-w-container mx-auto px-6 lg:px-12">
          {/* Page Title */}
          <FadeInUp className="mb-12 lg:mb-16">
            <h1 className="text-[32px] lg:text-[40px] font-bold text-text-primary">
              アクセス
            </h1>
          </FadeInUp>

          {/* Location Grid - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
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
