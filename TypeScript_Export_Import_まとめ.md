# TypeScript Export/Import の型と値の違い

## 概要
TypeScriptにおける `export type` と `export` の違い、および `import type` と `import` の使い分けについて学習した内容をまとめる。

## 基本的な概念

### 実行時 vs コンパイル時

- **コンパイル時**: TypeScriptがJavaScriptに変換される時、型チェックが行われる時
- **実行時**: JavaScriptコードが実際にブラウザやNode.jsで動く時、型情報はもう存在しない時

### TypeScriptの型情報
TypeScriptの型は、JavaScriptにコンパイルされる時に**完全に削除**される。
- 型は開発時の型チェックとIDE支援のためだけに存在
- 実行時には型情報は不要（JavaScriptは動的型付け言語）

## Export の種類

### 1. 値のエクスポート（実行時に存在）
```typescript
// export.ts
const tama = { name: "Tama", age: 3 };
export { tama }  // ← 実行時にアクセス可能
```

**コンパイル後（JavaScript）:**
```javascript
exports.tama = tama;  // ← これが残る
```

### 2. 型のエクスポート（実行時には存在しない）
```typescript
// export.ts
type Animal = { name: string; age: number };
export type { Animal }  // ← 実行時には存在しない
```

**コンパイル後（JavaScript）:**
```javascript
// 何も残らない！完全に消える
```

## Import の種類

### 1. 値のインポート（実行時にアクセス）
```typescript
import { tama } from "./export";  // tamaオブジェクトにアクセス
```

### 2. 型のインポート（コンパイル時のみ）
```typescript
import type { Animal } from "./export";  // 型情報のみ
```

## エラーパターンと解決策

### エラーパターン1: 型を値としてインポート
```typescript
// export.ts
export type { Animal }  // 型としてエクスポート

// import.ts
import { Animal } from "./export";  // ❌ エラー！型を値としてインポート
```

**エラーメッセージ:**
```
The requested module './export.ts' does not provide an export named 'Animal'
```

**解決策:**
```typescript
import type { Animal } from "./export";  // ✅ 型としてインポート
```

### エラーパターン2: 型としてエクスポートしたものを値として使用
```typescript
// export.ts
export type { tama }  // 型としてエクスポート

// import.ts
import { tama } from "./export";  // ❌ エラー！値をインポートしようとした
console.log(tama);  // 実行時にアクセスしようとする
```

**解決策:**
```typescript
// 方法1: 値としてエクスポート
export { tama }  // 値としてエクスポート

// 方法2: 型としてインポート
import type { tama } from "./export";
const tama2: typeof tama = { name: "Tama2", age: 3 };  // 型情報のみ使用
```

## 実際の検証結果

### JavaScriptファイルでの実行時確認
```javascript
// test-import.cjs
const exported = require('./dist/export.cjs');

console.log('=== 実行時にアクセス可能なもの ===');
console.log('tama:', exported.tama);           // ✅ 値のエクスポート
console.log('domodomo:', exported.domodomo);   // ✅ 値のエクスポート
console.log('default:', exported.default);     // ✅ デフォルトエクスポート

console.log('\n=== 実行時にアクセス不可能なもの ===');
console.log('Animal:', exported.Animal);       // ❌ undefined（型のエクスポート）
console.log('type:', exported.type);           // ❌ undefined

console.log('\n=== エクスポートされた全プロパティ ===');
console.log('Object.keys(exported):', Object.keys(exported));
// 結果: [ 'tama', 'domodomo', 'default' ]
// Animal は含まれていない！
```

## 正しい使い分け

### パターン1: 値を実行時に使用する場合
```typescript
// export.ts
export { tama }        // 値としてエクスポート
export type { Animal } // 型としてエクスポート

// import.ts
import { tama } from "./export";        // 値をインポート
import type { Animal } from "./export"; // 型をインポート

console.log(tama);  // ✅ 実行時にアクセス可能
const tama2: Animal = { ... };  // ✅ 型チェック
```

### パターン2: 型情報のみ使用する場合
```typescript
// export.ts
export type { Animal, tama }  // 型としてエクスポート

// import.ts
import type { tama, Animal } from "./export";  // 型としてインポート
const tama2: typeof tama = { ... };  // ✅ 型情報のみ使用
```

## 参考書との違い

### ブルーベリー本の記述
- `export type { Animal, tama }` でも `import { tama }` で動作すると記載
- バンドラー環境（Webpack等）では型と値の区別が曖昧になる場合がある

### 実際の環境（Node.js + ts-node + ESモジュール）
- 厳密に型と値を区別する必要がある
- `export type` でエクスポートしたものは `import type` でインポートする必要がある

## まとめ

1. **型は実行時には存在しない** - コンパイル時に完全に削除される
2. **一貫性が重要** - `export type` は `import type` と組み合わせる
3. **環境によって動作が異なる** - バンドラー環境とNode.js環境で違いがある
4. **`typeof`を活用** - 型情報のみが必要な場合は `typeof` を使用
5. **実行時のアクセス** - 値を実行時に使用する場合は `export { }` でエクスポート

## 重要なポイント

- `export type` = 型のエクスポート（実行時には存在しない）
- `export` = 値のエクスポート（実行時に存在する）
- `import type` = 型のインポート（コンパイル時のみ）
- `import` = 値のインポート（実行時にアクセス）

**使い分けの原則:**
- 実行時に値にアクセスする必要がある → `export { }` + `import { }`
- 型情報のみ使用 → `export type { }` + `import type { }`
