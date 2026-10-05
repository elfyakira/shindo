import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import BusinessContent from "./BusinessContent";

// business/layout.tsx は /business/cases にも適用されるため、
// /business 固有のパンくずはページ側で出力する
export default function BusinessPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "事業内容", path: "/business" }])} />
      <BusinessContent />
    </>
  );
}
