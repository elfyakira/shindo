// 構造化データ（JSON-LD）を出力する
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // "<" をエスケープして </script> によるタグ崩れを防ぐ
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
