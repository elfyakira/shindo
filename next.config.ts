import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 旧テンプレートの事業内容ページ → 正式な事業内容ページへ恒久転送
      { source: "/service", destination: "/business", permanent: true },
      // 拠点ページは未整備のため、本社情報のある会社情報ページへ恒久転送
      { source: "/access", destination: "/company", permanent: true },
    ];
  },
};

export default nextConfig;
