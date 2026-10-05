// ============================================================
// 構造化データ（JSON-LD）
// 検索エンジン・AI検索向けに、ページ内容を schema.org 形式で記述する
// ※ ページに表示している内容と一致させること（表示内容を変えたらここも更新）
// ============================================================

import { site, company, contact } from "@/lib/site";

export const SITE_URL = site.seo.siteUrl;
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "川合町2番地",
  postalCode: "510-0853",
  addressLocality: "四日市市",
  addressRegion: "三重県",
  addressCountry: "JP",
};

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

// ------------------------------------------------------------
// 会社情報 + Webサイト（全ページ共通・root layout で出力）
// ------------------------------------------------------------
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": ORG_ID,
        name: company.name,
        legalName: "信藤建設株式会社",
        alternateName: [company.nameEn, "しんどうけんせつ"],
        description:
          "三重県四日市市の総合建設業。昭和13年創業。国土交通省・三重県・四日市市などの公共事業を中心に、河川護岸工事、道路改良・舗装工事、上下水道工事などの地域インフラ整備を行う。",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: abs(site.images.logo),
        },
        image: abs("/images/og-image.jpg"),
        telephone: `+81-${contact.phone.replace(/^0/, "")}`,
        faxNumber: `+81-${contact.fax.replace(/^0/, "")}`,
        address: ADDRESS,
        foundingDate: "1938-02",
        founder: { "@type": "Person", name: "伊藤信一" },
        employee: {
          "@type": "Person",
          name: "伊藤秀樹",
          jobTitle: "代表取締役",
          award: "令和8年 建設事業関係功労者等 国土交通大臣表彰",
        },
        numberOfEmployees: { "@type": "QuantitativeValue", value: 27 },
        areaServed: [
          { "@type": "City", name: "四日市市" },
          { "@type": "AdministrativeArea", name: "三重県北勢エリア" },
          { "@type": "AdministrativeArea", name: "三重県中勢エリア" },
        ],
        knowsAbout: [
          "土木工事",
          "河川護岸工事",
          "河道整備・河道掘削工事",
          "堤防工事",
          "道路改良工事",
          "舗装工事",
          "上下水道工事",
          "建築工事",
          "公共事業",
          "地域インフラ整備",
          "太陽光発電事業",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "特定建設業許可 三重県知事（特-2）第909号",
            credentialCategory: "建設業許可",
          },
          { "@type": "EducationalOccupationalCredential", name: "ISO9001", credentialCategory: "品質マネジメントシステム" },
          { "@type": "EducationalOccupationalCredential", name: "ISO14001", credentialCategory: "環境マネジメントシステム" },
          { "@type": "EducationalOccupationalCredential", name: "ISO45001", credentialCategory: "労働安全衛生マネジメントシステム" },
        ],
        award: [
          "国土交通省中部地方整備局 工事成績優秀企業認定（令和6年度・令和7年度）",
          "国土交通省 中部地方整備局長表彰（東海環状塩崎地区道路建設工事、東海環状北勢第二高架橋1下部工事 ほか）",
          "四日市市優良建設業者表彰（通算9回、令和8年度含む）",
          "三重県知事表彰（建設労働者の雇用改善 優良事業所、令和7年）",
          "国土交通省 中部地方整備局長感謝状（令和6年能登半島地震の災害対策支援）",
        ],
        slogan: company.catchphrase,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: company.name,
        inLanguage: "ja",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

// ------------------------------------------------------------
// パンくずリスト
// ------------------------------------------------------------
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const list = [{ name: "ホーム", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : abs(item.path),
    })),
  };
}

// ------------------------------------------------------------
// ブログ記事
// ------------------------------------------------------------
type NewsItem = (typeof site.news)[number];

const toIsoDate = (date: string) => `${date.replace(/\./g, "-")}T09:00:00+09:00`;

export function blogPostingJsonLd(news: NewsItem) {
  const url = `${SITE_URL}/news/${news.slug}`;
  const images = [
    ...(news.image ? [news.image.src] : []),
    ...(news.body ?? []).flatMap((b) => (typeof b === "string" ? [] : [b.src])),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: news.title,
    description: news.description || news.title,
    url,
    mainEntityOfPage: url,
    datePublished: toIsoDate(news.date),
    dateModified: toIsoDate(news.date),
    inLanguage: "ja",
    ...(images.length > 0 && { image: [...new Set(images)].map(abs) }),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

// ------------------------------------------------------------
// 求人（Googleしごと検索）
// ※ recruit/page.tsx の募集要項と内容を合わせること
// ------------------------------------------------------------
// 募集要項を更新したら、この日付も更新する
const JOB_DATE_POSTED = "2026-10-05";

const JOBS = [
  {
    id: "construction-manager",
    title: "施工管理（土木）",
    minSalary: 250000,
    maxSalary: 400000,
    description: [
      "三重県四日市市を拠点に、国土交通省・三重県・四日市市などの公共事業（河川護岸、道路改良・舗装、上下水道工事など）の施工管理を担当します。",
      "【応募資格】未経験可。普通自動車免許（AT限定不可）、PC基本操作（Word・Excel）",
      "【歓迎スキル】土木施工管理技士（1〜2級）",
      "【給与】月給 250,000円〜400,000円。賞与 年2回（6月・11月）＋決算賞与（業績による）",
    ],
  },
  {
    id: "field-worker",
    title: "現場作業員（土木）",
    minSalary: 190000,
    maxSalary: 410000,
    description: [
      "三重県四日市市を拠点に、公共事業を中心とした土木工事（河川護岸、道路改良・舗装、上下水道工事など）の現場作業を担当します。未経験から土木の仕事に挑戦できます。",
      "【応募資格】未経験可。普通自動車免許（AT限定不可）",
      "【歓迎スキル】車両系建設機械運転技能講習、玉掛け技能講習、小型移動式クレーン運転技能講習、フォークリフト運転技能講習、足場の組立て等作業経験",
      "【給与】月給 190,000円〜410,000円。賞与 年2回（6月・11月）＋決算賞与（業績による）",
    ],
  },
];

const COMMON_JOB_TERMS = [
  "【勤務地】三重県四日市市川合町2番地",
  "【勤務時間】8:15〜17:15（実働8時間）。休憩 12:00〜13:00 ＋ 午前午後に30分ずつ",
  "【休日】完全週休2日制（土日祝休み）/ 年間休日126日。夏季・年末年始・有給・慶弔・育児・介護休暇",
  "入社後は先輩社員が丁寧にサポートし、資格取得支援制度もあります。職場見学も随時受け付けています。",
];

export function jobPostingsJsonLd() {
  return JOBS.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${SITE_URL}/recruit#${job.id}`,
    title: job.title,
    description: [...job.description, ...COMMON_JOB_TERMS].map((p) => `<p>${p}</p>`).join(""),
    datePosted: JOB_DATE_POSTED,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "信藤建設株式会社",
      sameAs: SITE_URL,
      logo: abs(site.images.logo),
    },
    jobLocation: { "@type": "Place", address: ADDRESS },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "JPY",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.minSalary,
        maxValue: job.maxSalary,
        unitText: "MONTH",
      },
    },
    directApply: false,
  }));
}

// ------------------------------------------------------------
// よくある質問
// ------------------------------------------------------------
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
