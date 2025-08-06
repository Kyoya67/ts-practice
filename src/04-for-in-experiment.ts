console.log("1. オブジェクトでの for...in:");
export const person = {
    name: "kyoya67",
    age: 25,
    city: "Tokyo",
    isStudent: true,
    8: "eight"
};

console.log("オブジェクト:", person);
console.log("for...in の結果:");

for (const key in person) {
    console.log(`  key: "${key}" (型: ${typeof key}), value: ${person[key as keyof typeof person]}`);
}

console.log("\n" + "=".repeat(50) + "\n");

// 2. 数値キーの詳細確認
console.log("2. 数値キーの詳細確認:");
console.log("person[8]:", person[8]);
console.log('person["8"]:', person["8"]);
console.log("typeof 8:", typeof 8);
console.log('typeof "8":', typeof "8");

console.log("\n" + "=".repeat(50) + "\n");

// 3. Object.entries() との比較
console.log("3. Object.entries() との比較:");
Object.entries(person).forEach(([key, value]) => {
    console.log(`  key: "${key}" (型: ${typeof key}), value: ${value}`);
});