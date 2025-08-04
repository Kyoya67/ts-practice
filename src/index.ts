type User = {
  name: string;
  age: number;
};

const john: User = {
  name: "John",
  age: 30,
  // email: "john@example.com",
};

const jane = {
  name: "Jane",
  age: 25,
  email: "jane@example.com",
};

const jane2 : User = jane;

console.log(john);
console.log(jane2);

const users: Array<User &{ 
  sex: "male" | "female",
  place: string
  }> = [
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

console.log("users before", users);

users[0] = {
  name: "John2",
  age: 309,
  sex: "male",
  place: "New York2",
};

console.log("users after", users);