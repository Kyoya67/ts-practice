export function getMemoryUsage() {
    if (typeof process !== 'undefined') {
        var memUsage = process.memoryUsage();
        return {
            rss: Math.round(memUsage.rss / 1024 / 1024), // MB
            heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
            heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) // MB
        };
    }
    return null;
}
console.log('=== ガベージコレクション テスト ===\n');
// テスト1: WeakMapの場合
console.log('1. WeakMapテスト:');
console.log('初期メモリ:', getMemoryUsage());
// 大きなオブジェクトを作成
export var largeObject = {
    data: new Array(1000000).fill('test data'), // 約8MB
    id: 'test-1'
};
export var map1 = new WeakMap();
map1.set(largeObject, 'cached data');
console.log('オブジェクト作成後:', getMemoryUsage());
// 参照を削除
(largeObject as any) = null;
// ガベージコレクションを強制実行（Node.js環境）
if (typeof global !== 'undefined' && global.gc) {
    global.gc();
    console.log('GC実行後:', getMemoryUsage());
}
else {
    console.log('GC実行後: (手動GCが利用できません)');
}

console.log('\n2. Mapテスト:');
console.log('初期メモリ:', getMemoryUsage());
// 大きなオブジェクトを作成
export var largeObject2 = {
    data: new Array(1000000).fill('test data'), // 約8MB
    id: 'test-2'
};
export var map2 = new Map();
map2.set(largeObject2, 'cached data');
console.log('オブジェクト作成後:', getMemoryUsage());
// 参照を削除
(largeObject2 as any) = null;
// ガベージコレクションを強制実行
if (typeof global !== 'undefined' && global.gc) {
    global.gc();
    console.log('GC実行後:', getMemoryUsage());
}
else {
    console.log('GC実行後: (手動GCが利用できません)');
}
console.log('\n=== テスト完了 ===');
