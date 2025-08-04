type User = {
  name: string;
  age: number;
};

const john: User = {
  name: "John",
  age: 30,
//   email: "john@example.com",
};

const jane = {
  name: "Jane",
  age: 25,
  email: "jane@example.com",
};

const jane2 : User = jane;

console.log(john);
console.log(jane2);