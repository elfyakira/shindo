// award-01, award-02 は暗い画像のため末尾に移動
// award-10, 11, 12, 28, 35 は縦画像のため末尾にまとめる
// award-38, 39 はPDFから変換した追加分（横画像）
// award-40 は award-38 と重複のため除外
const VERTICAL_IDS = new Set([10, 11, 12, 28, 35, 38]);

const order = [
  3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 36, 37,
  39,
  1, 2,
  10, 11, 12, 28, 35, 38,
];

export const ALL_AWARDS = order.map((n) => ({
  image: `/images/awards/award-${String(n).padStart(2, "0")}.jpg`,
  title: `表彰${n}`,
  vertical: VERTICAL_IDS.has(n),
}));
