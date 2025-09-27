// JavaScriptでインポートをテスト
const exported = require('./dist/export.js');

console.log('=== 実行時にアクセス可能なもの ===');
console.log('tama:', exported.tama);           // ✅ 値のエクスポート
console.log('domodomo:', exported.domodomo);   // ✅ 値のエクスポート
console.log('default:', exported.default);     // ✅ デフォルトエクスポート

console.log('\n=== 実行時にアクセス不可能なもの ===');
console.log('Animal:', exported.Animal);       // ❌ 型のエクスポート（存在しない）
console.log('type:', exported.type);           // ❌ 存在しない

console.log('\n=== エクスポートされた全プロパティ ===');
console.log('Object.keys(exported):', Object.keys(exported));
console.log('全プロパティ:', Object.getOwnPropertyNames(exported));

console.log('\n=== 実際の値 ===');
console.log('tama.name:', exported.tama.name);
console.log('tama.age:', exported.tama.age);
console.log('default関数の実行:', exported.default());
