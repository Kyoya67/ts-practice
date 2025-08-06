// 基本的な型の実験
export type User = {
  name: string;
  age: number;
};

export const john: User = {
  name: "John",
  age: 30,
  // email: "john@example.com", // 型エラーになる
};

const jane = {
  name: "Jane",
  age: 25,
  email: "jane@example.com", // 追加プロパティがある
};

export const jane2: User = jane; // 型互換性があるのでOK

console.log("=== 基本的な型の実験 ===");
console.log(john);
console.log(jane2); 