"use client";

import Image from "next/image";
import Link from "next/link";
import { site, contact } from "@/lib/site";
import { FadeInUp, StaggerContainer, HeroBackground } from "@/components/animations";

// ============================================================
const SERVICES_OVERVIEW = [
  { id: "service1", title: "サービス1", description: "サービス1の概要", image: "/images/service1.jpg" },
  { id: "service2", title: "サービス2", description: "サービス2の概要", image: "/images/service2.jpg" },
  { id: "service3", title: "サービス3", description: "サービス3の概要", image: "/images/service3.jpg" },
  { id: "service4", title: "サービス4", description: "サービス4の概要", image: "/images/service4.jpg" },
];

const SERVICE_DETAILS = [
  {
    id: "service1", number: "01", title: "サービス1のタイトル", subtitle: "サービス1のサブタイトル",
    description: ["サービス1の説明文を入力してください。", "このサービスの特徴や強みを伝えます。"],
    features: ["特徴1", "特徴2", "特徴3", "特徴4"],
    image: "/images/service1-detail.jpg", imageAlt: "サービス1", ctaLink: "/contact?type=service1", ctaText: "相談する",
  },
  {
    id: "service2", number: "02", title: "サービス2のタイトル", subtitle: "サービス2のサブタイトル",
    description: ["サービス2の説明文を入力してください。", "このサービスの特徴や強みを伝えます。"],
    features: ["特徴1", "特徴2", "特徴3", "特徴4"],
    image: "/images/service2-detail.jpg", imageAlt: "サービス2", ctaLink: "/contact?type=service2", ctaText: "相談する",
  },
  {
    id: "service3", number: "03", title: "サービス3のタイトル", subtitle: "サービス3のサブタイトル",
    description: ["サービス3の説明文を入力してください。", "このサービスの特徴や強みを伝えます。"],
    features: ["特徴1", "特徴2", "特徴3", "特徴4"],
    image: "/images/service3-detail.jpg", imageAlt: "サービス3", ctaLink: "/contact?type=service3", ctaText: "相談する",
  },
  {
    id: "service4", number: "04", title: "サービス4のタイトル", subtitle: "サービス4のサブタイトル",
    description: ["サービス4の説明文を入力してください。", "このサービスの特徴や強みを伝えます。"],
    features: ["特徴1", "特徴2", "特徴3", "特徴4"],
    image: "/images/service4-detail.jpg", imageAlt: "サービス4", ctaLink: "/contact?type=service4", ctaText: "相談する",
  },
];

const FLOW_STEPS = [
  { step: "STEP 01", title: "お問い合わせ・ご相談", description: "お電話またはフォームでお気軽にご連絡ください。" },
  { step: "STEP 02", title: "ヒアリング", description: "詳しいご要望をお聞かせください。" },
  { step: "STEP 03", title: "ご提案・お見積り", description: "最適なプランとお見積りをご提示します。" },
  { step: "STEP 04", title: "ご契約", description: "内容にご納得いただけましたら、ご契約となります。" },
  { step: "STEP 05", title: "サービス提供", description: "丁寧にサービスを提供いたします。" },
  { step: "STEP 06", title: "アフターフォロー", description: "完了後もサポートいたします。" },
];

const WORKS_FALLBACK = [
  { category: "カテゴリ1", name: "実績タイトル1", location: "場所", year: "2024年", image: "/images/work1.jpg" },
  { category: "カテゴリ2", name: "実績タイトル2", location: "場所", year: "2024年", image: "/images/work2.jpg" },
  { category: "カテゴリ3", name: "実績タイトル3", location: "場所", year: "2024年", image: "/images/work3.jpg" },
  { category: "カテゴリ4", name: "実績タイトル4", location: "場所", year: "2024年", image: "/images/work4.jpg" },
];

// ============================================================
function PageHeader() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center">
      <HeroBackground className="absolute inset-0 z-0">
        <Image src="/images/service-hero.jpg" alt="事業内容" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#1E5F4A]/80" />
      </HeroBackground>
      <div className="relative z-10 w-full px-6 lg:px-[10%]">
        <FadeInUp>
          <h1 className="text-[32px] lg:text-[48px] font-bold text-white mb-2">Service</h1>
          <p className="text-sm text-white/80 tracking-wider">事業内容</p>
        </FadeInUp>
      </div>
    </section>
  );
}

function ServiceOverview() {
  const services = site.services.length > 0
    ? site.services.map(s => ({ ...s, description: s.description || "" }))
    : SERVICES_OVERVIEW;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <p className="text-[15px] lg:text-lg text-text-primary">
            私たちは、お客様のあらゆるニーズにお応えします。
          </p>
        </FadeInUp>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {services.map((service) => (
            <a key={service.id} href={`#${service.id}`} className="group block">
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="mt-3 lg:mt-4 text-base lg:text-lg font-semibold text-text-primary">{service.title}</h3>
              <p className="mt-1 text-[13px] lg:text-sm text-text-secondary">{service.description}</p>
            </a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServiceDetail({
  id, number, title, subtitle, description, features, image, imageAlt, ctaLink, ctaText, reverse = false, bgLight = false,
}: {
  id: string; number: string; title: string; subtitle: string; description: string[]; features: string[];
  image: string; imageAlt: string; ctaLink: string; ctaText: string; reverse?: boolean; bgLight?: boolean;
}) {
  return (
    <section id={id} className={`py-16 lg:py-24 scroll-mt-20 ${bgLight ? "bg-bg-light" : "bg-white"}`}>
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp>
          <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${reverse ? "lg:flex-row-reverse" : ""}`}>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100">
                <Image src={image} alt={imageAlt} fill className="object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[48px] lg:text-[64px] font-bold text-[#1E5F4A]/20">{number}</span>
              <h2 className="text-[24px] lg:text-[32px] font-bold text-text-primary mt-2">{title}</h2>
              <p className="mt-4 text-sm lg:text-base text-[#1E5F4A] font-medium">{subtitle}</p>
              <div className="mt-6 text-[14px] lg:text-[15px] text-text-secondary leading-[2] space-y-4">
                {description.map((para, i) => <p key={i}>{para}</p>)}
              </div>
              <ul className="mt-6 space-y-2">
                {features.map((feature, i) => (
                  <li key={i} className="text-sm text-text-secondary leading-[2] before:content-['•'] before:mr-2 before:text-[#1E5F4A]">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href={ctaLink}
                  className="inline-flex items-center justify-between bg-[#1E5F4A] text-white text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
                >
                  <span>{ctaText}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

function FlowSection() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Flow</h2>
          <span className="section-label">ご依頼の流れ</span>
        </FadeInUp>

        <StaggerContainer className="grid lg:grid-cols-6 gap-4 lg:gap-6">
          {FLOW_STEPS.map((item, index) => (
            <div key={index} className="py-4 lg:py-0 border-b border-gray-200 lg:border-b-0 last:border-b-0">
              <span className="text-xs font-semibold text-[#1E5F4A]">{item.step}</span>
              <h3 className="mt-2 text-[15px] lg:text-base font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-2 text-[13px] text-text-secondary leading-[1.6]">{item.description}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function WorksSection() {
  const works = site.works.length > 0 ? site.works : WORKS_FALLBACK;

  return (
    <section id="works" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <FadeInUp className="mb-10 lg:mb-16">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-text-primary mb-2">Works</h2>
          <span className="section-label">実績紹介</span>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-gray-100">
                <Image src={work.image} alt={work.name} fill className="object-cover" />
              </div>
              <div className="mt-3">
                <span className="text-xs font-semibold text-[#1E5F4A]">{work.category}</span>
                <h3 className="mt-1 text-base font-semibold text-text-primary">{work.name}</h3>
                <p className="mt-1 text-[13px] text-text-secondary">{work.location} / {work.year}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-[#1E5F4A]">
      <div className="max-w-container mx-auto px-6 lg:px-12 text-center">
        <FadeInUp>
          <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-4">お気軽にご相談ください</h2>
          <a
            href={`tel:${contact.phoneTel || contact.phone?.replace(/-/g, "")}`}
            className="block text-[28px] lg:text-[40px] font-bold text-white mt-6 mb-2"
          >
            {contact.phoneFormatted || contact.phone || "000-000-0000"}
          </a>
          <p className="text-sm text-white/70 mb-10">受付時間: {contact.hours || "9:00〜18:00"}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-between bg-white text-[#1E5F4A] text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity w-56"
          >
            <span>お問い合わせ</span>
            <span>→</span>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

export default function ServicePage() {
  return (
    <>
      <PageHeader />
      <ServiceOverview />
      {SERVICE_DETAILS.map((service, index) => (
        <ServiceDetail key={service.id} {...service} reverse={index % 2 === 1} bgLight={index % 2 === 0} />
      ))}
      <FlowSection />
      <WorksSection />
      <CTASection />
    </>
  );
}
