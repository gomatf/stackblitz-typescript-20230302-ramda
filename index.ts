// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement | null = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = `<h1>Ramda samples (output console)</h1>`;
}

// ================
// 準備

// データ型の定義
type Menu = {
  name: string;
  price: number;
};

// Ramda をインポート
import * as R from 'ramda';

// ================
// Object

console.log("Object -------------------------");

// オブジェクトのディープコピー
const menu: Menu = {
  name: 'オムライス',
  price: 780,
};
console.log(R.clone(menu));

// オブジェクトの走査
console.log(R.keys(menu)); // キーを配列に変換
console.log(R.values(menu)); // 値を配列に変換

for (const [key, value] of R.toPairs(menu)) {
  // キーと値
  console.log(`${key}: ${value}`);
}

// ================
// List

console.log("List -------------------------");

// フラット化
const ls = [1, 2, [3, 4], [5]]
console.log(R.flatten(ls));

// 範囲の配列
console.log(R.range(7,11));

// ================
// Relation

console.log("Relation -------------------------");

// 等価判定（プリミティブでもオブジェクトでも可）
console.log(R.equals(menu, { name: 'オムライス', price: 780 })); // true
console.log(R.equals(null, null)); // true

// 重複を取り除く
const arr1 = [1, 2, 3, 4, 5, 2, 4];
console.log(R.uniq(arr1));

const arr2 = [
  { name: 'タコライス', price: 680 },
  { name: 'オムライス', price: 780 },
  { name: 'カレーライス', price: 820 },
  { name: 'オムライス', price: 780 },
  { name: 'オムライス', price: 830 },
];
console.log(R.uniq(arr2));

// オブジェクトの特定のプロパティで重複を判定する
const eqByMenuName = R.eqBy(R.prop('name'));
console.log(R.uniqWith(eqByMenuName)(arr2));

// 集合の差分（重複も取り除かれる）
const arr3 = [4, 7, 9, 1];
console.log(R.difference(arr1, arr3));

// ================
// Logic

console.log("Logic -------------------------");

// デフォルト値
const defaultToMenu = R.defaultTo<Menu>(menu);
console.log(defaultToMenu(null));
console.log(defaultToMenu(undefined));
console.log(defaultToMenu(13));
console.log(defaultToMenu({ name: 'カレーライス', price: 720 }));
