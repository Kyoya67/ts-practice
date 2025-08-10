// メモリ使用量を取得する関数
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

// テスト1: WeakMap + null代入
console.log('1. WeakMap + null代入テスト:');
console.log('初期メモリ:', getMemoryUsage());

let largeObject: any = {
    data: new Array(1000000).fill('test data'), // 約8MB
    id: 'test-1'
};

let weakMap1 = new WeakMap();
weakMap1.set(largeObject, 'cached data');

console.log('オブジェクト作成後:', getMemoryUsage());

// 参照を削除
largeObject = null;

// ガベージコレクションを強制実行
if (typeof global !== 'undefined' && global.gc) {
    global.gc();
    console.log('GC実行後:', getMemoryUsage());
} else {
    console.log('GC実行後: (手動GCが利用できません)');
}

// テスト2: WeakMap + スコープ
console.log('\n2. WeakMap + スコープテスト:');
console.log('初期メモリ:', getMemoryUsage());

let weakMap2;
{
    // スコープ内で大きなオブジェクトを作成
    let largeObject2 = {
        data: new Array(1000000).fill('test data'), // 約8MB
        id: 'test-2'
    };

    weakMap2 = new WeakMap();
    weakMap2.set(largeObject2, 'cached data');

    console.log('オブジェクト作成後:', getMemoryUsage());
}
// ここでlargeObject2はスコープ外になり、参照が消える

// ガベージコレクションを強制実行
if (typeof global !== 'undefined' && global.gc) {
    global.gc();
    console.log('GC実行後:', getMemoryUsage());
} else {
    console.log('GC実行後: (手動GCが利用できません)');
}

// テスト3: Map + null代入
console.log('\n3. Map + null代入テスト:');
console.log('初期メモリ:', getMemoryUsage());

let largeObject3: any = {
    data: new Array(1000000).fill('test data'), // 約8MB
    id: 'test-3'
};

let map = new Map();
map.set(largeObject3, 'cached data');

console.log('オブジェクト作成後:', getMemoryUsage());

// 参照を削除
largeObject3 = null;

// ガベージコレクションを強制実行
if (typeof global !== 'undefined' && global.gc) {
    global.gc();
    console.log('GC実行後:', getMemoryUsage());
} else {
    console.log('GC実行後: (手動GCが利用できません)');
}

console.log('\n=== テスト完了 ===');