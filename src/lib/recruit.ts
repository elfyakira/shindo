// 採用ページの「よくある質問」（ページ表示と構造化データで共用）
export const RECRUIT_FAQS = [
  { q: "未経験でも応募できますか？", a: "はい、未経験の方も歓迎しています。入社後は先輩社員が丁寧に指導しますので、安心してご応募ください。" },
  { q: "資格は必要ですか？", a: "入社時に資格がなくても大丈夫です。入社後に資格取得をサポートする制度があります。" },
  { q: "職場見学はできますか？", a: "はい、職場見学も随時受け付けています。お気軽にお問い合わせください。" },
];

// 職種別の応募先（つなげる）
export const APPLY_JOBS = {
  construction_manager: {
    label: "施工管理",
    url: "https://tunageru.net/stc/case/info/f9xUKHXhD5bM3It1R0Tp",
  },
  site_worker: {
    label: "現場作業員",
    url: "https://tunageru.net/stc/case/info/mAl2aXR1VP8fuDJvNzkK",
  },
} as const;

export type ApplyJob = keyof typeof APPLY_JOBS;

export const ALL_APPLY_JOBS: ApplyJob[] = ["construction_manager", "site_worker"];

// 応募ボタン周りに添える訴求（FAQ記載の事実に基づく）
export const APPLY_APPEALS = ["未経験OK", "資格取得支援あり", "職場見学OK"];
