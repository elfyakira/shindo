import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { FadeInUp } from "@/components/animations";
import WaveButton from "@/components/WaveButton";

// ============================================================
// 📝 記事データは data/site.json の news で管理
// ============================================================

const CATEGORY_LABELS: Record<string, string> = {
  news: "お知らせ",
  works: "実績",
  recruit: "採用",
};

// 関連リンク
const relatedLinks: Record<string, { label: string; href: string }[]> = {
  news: [
    { label: "会社概要", href: "/about" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  works: [
    { label: "事業内容", href: "/service" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  recruit: [
    { label: "採用情報", href: "/recruit" },
    { label: "エントリーフォーム", href: "/contact?type=recruit" },
  ],
};

// ============================================================
// ページ設定
// ============================================================

export const dynamicParams = false;

export async function generateStaticParams() {
  return site.news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = site.news.find((item) => item.slug === slug);
  if (!news) {
    return { title: "お知らせが見つかりません" };
  }
  return {
    title: `${news.title}｜お知らせ${site.seo.titleSuffix}`,
    description: news.description || news.title,
  };
}

// ============================================================
// ページコンポーネント
// ============================================================

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = site.news.find((item) => item.slug === slug);

  if (!news) {
    notFound();
  }

  const categoryLabel = CATEGORY_LABELS[news.category] || news.category;
  const links = relatedLinks[news.category] || relatedLinks.news;

  return (
    <>
      {/* Page Header（固定ヘッダー分の上余白を確保） */}
      <section className="pt-24 pb-10 lg:pt-36 lg:pb-[60px] bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[13px] lg:text-sm text-text-secondary">
                {news.date}
              </span>
              <span className="text-xs font-semibold text-navy px-2 py-0.5 bg-gray-100 rounded">
                {categoryLabel}
              </span>
            </div>
            <h1 className="text-2xl lg:text-[32px] font-bold text-text-primary leading-[1.4]">
              {news.title}
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Main Image */}
      {news.image && (
        <section className="pb-10 lg:pb-[60px] bg-white">
          <div className="max-w-[800px] mx-auto px-4">
            <FadeInUp>
              <Image
                src={news.image.src}
                alt={news.image.alt}
                width={864}
                height={864}
                priority
                sizes="(min-width: 640px) 560px, 100vw"
                className="w-full max-w-[560px] h-auto mx-auto rounded-lg"
              />
            </FadeInUp>
          </div>
        </section>
      )}

      {/* Content */}
      {news.body && news.body.length > 0 && (
        <section className="pb-10 lg:pb-[60px] bg-white">
          <div className="max-w-[800px] mx-auto px-4">
            <FadeInUp delay={100} className="space-y-6 text-[15px] lg:text-base text-black leading-[1.9]">
              {news.body.map((block, index) =>
                typeof block === "string" ? (
                  <p key={index} className="whitespace-pre-line">
                    {block}
                  </p>
                ) : (
                  <Image
                    key={index}
                    src={block.src}
                    alt={block.alt}
                    width={864}
                    height={864}
                    sizes="(min-width: 640px) 560px, 100vw"
                    className="w-full max-w-[560px] h-auto mx-auto rounded-lg !my-10"
                  />
                )
              )}
            </FadeInUp>
          </div>
        </section>
      )}

      {/* CTA */}
      {news.cta && (
        <section className="pb-10 lg:pb-[60px] bg-white">
          <div className="max-w-[800px] mx-auto px-4">
            <FadeInUp className="bg-[#16a637] rounded-lg px-6 py-10 lg:px-12 lg:py-12 text-center">
              <p className="text-[15px] lg:text-base text-white leading-[1.9] whitespace-pre-line mb-8">
                {news.cta.text}
              </p>
              <WaveButton href={news.cta.href} text={news.cta.label} variant="light" />
            </FadeInUp>
          </div>
        </section>
      )}

      {/* Signature */}
      {news.signature && (
        <section className="pb-10 lg:pb-[60px] bg-white">
          <div className="max-w-[800px] mx-auto px-4">
            <FadeInUp className="border-t border-gray-200 pt-8 lg:pt-10">
              <p className="text-base lg:text-lg font-bold text-text-primary mb-3">
                {news.signature.heading}
              </p>
              <p className="text-[15px] lg:text-base text-black leading-[1.9] whitespace-pre-line">
                {news.signature.text}
              </p>
            </FadeInUp>
          </div>
        </section>
      )}

      {/* Related Links */}
      <section className="pb-8 lg:pb-10 bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <FadeInUp delay={200} className="bg-bg-light p-6 lg:p-8 rounded-lg">
            <p className="text-sm font-semibold text-text-secondary mb-4">
              関連ページ:
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-navy hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-16 lg:pb-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <Link
            href="/news"
            className="text-[15px] text-text-secondary hover:text-navy transition-colors"
          >
            ← お知らせ一覧に戻る
          </Link>
        </div>
      </section>
    </>
  );
}
