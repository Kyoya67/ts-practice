// 配列操作の実験
export type UserWithDetails = {
  name: string;
  age: number;
  sex: "male" | "female";
  place: string;
};

export const users: UserWithDetails[] = [
  {
    name: "John",
    age: 30,
    sex: "male",
    place: "New York",
  },
  {
    name: "Jane",
    age: 25,
    sex: "female",
    place: "London",
  },
];

console.log("=== 配列操作の実験 ===");
console.log("users before", users);

// 配列の要素を更新
users[0] = {
  name: "John2",
  age: 309,
  sex: "male",
  place: "New York2",
};

// 配列に要素を追加
users.push({
  name: "John3",
  age: 309,
  sex: "male",
  place: "New York3",
});

console.log("users after", users); 

const variousTypeArray = [23, "domo", false];

console.log(variousTypeArray);