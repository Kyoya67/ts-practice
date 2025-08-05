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

console.log("== オブジェクト配列の分割代入 ==");

const [
    {title: title1, description: description1}, 
    {title: title2, description: description2}, 
    {title: title3, description: description3}
] = articles;

console.log(title1);
console.log(description1);
console.log(title2);
console.log(description2);
console.log(title3);
console.log(description3);

console.log("== mapを使ったオブジェクト配列の分割代入 ==");

const newArticles = articles.map(( {title, description} ) => {
    return {
        title: title + "!",
        description: description + "!"
    }
})

const [
    {title: newTitle1, description: newDescription1}, 
    {title: newTitle2, description: newDescription2}, 
    {title: newTitle3, description: newDescription3}
] = newArticles;

console.log(newTitle1);
console.log(newDescription1);
console.log(newTitle2);
console.log(newDescription2);
console.log(newTitle3);
console.log(newDescription3);