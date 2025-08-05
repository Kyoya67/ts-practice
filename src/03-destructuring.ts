// 分割代入の実験
const articles = [
  {
    title: "title1",
    description: "description1",
  },
  {
    title: "title2",
    description: "description2",
  },
  {
    title: "title3",
    description: "description3",
  },
];

console.log("=== オブジェクト配列の分割代入の実験 ===");

const [{ title, description }] = articles;
console.log("title", title);
console.log("description", description);

const [, { title: title2, description: description2 }] = articles;
console.log("title2", title2);
console.log("description2", description2); 

const [, , { title: title3, description: description3 }] = articles;
console.log("title3", title3);
console.log("description3", description3); 