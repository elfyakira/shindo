"use client";

import { FadeInUp } from "@/components/animations";
import WaveTitle from "@/components/WaveTitle";
import WaveButton from "@/components/WaveButton";
import DecoShape from "@/components/DecoShape";

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
        <h2 className="text-[18px] lg:text-[20px] font-bold text-[#16a637] mb-2">
          {name}
        </h2>
        <p className="text-[14px] text-black mb-3">{subInfo}</p>
        <p className="text-[14px] text-black mb-3">{address}</p>
        <p className="text-[14px] text-black mb-1">TEL　{tel}</p>
        <p className="text-[14px] text-black mb-4">FAX　{fax}</p>
        <WaveButton text="Google map" variant="dark" />
      </div>
    </FadeInUp>
  );
}

// ============================================================
export default function AccessPage() {
  return (
    <div className="pt-[60px] lg:pt-20">
      <section className="relative py-16 lg:py-24 bg-white overflow-visible">
        <DecoShape color="green" width={340} top="-140px" right="-60px" zIndex={3} />
        <DecoShape color="red" width={110} top="45%" left="-50px" delay={0.1} zIndex={3} />
        <DecoShape color="green" width={220} bottom="-160px" right="8%" delay={0.2} zIndex={3} />
        <div className="relative z-10 max-w-container mx-auto px-6 lg:px-12">
          <FadeInUp className="mb-12 lg:mb-16">
            <WaveTitle en="Access" ja="アクセス" />
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
