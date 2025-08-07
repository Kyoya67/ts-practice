type HasName = {
    name: string;
}

type HasNameAndAge = {
    name: string;
    age: number;
}

const fromAge = (age: number):  HasNameAndAge => ({
    name: "John",
    age
});

const f: (age: number) => HasName = fromAge;
const obj: HasName = f(100);

console.log(obj);

console.log("=====================================")

const showName = (obj: HasName) => {
    console.log(obj.name);
}

const g: (obj: HasNameAndAge) => void = showName;
console.log(g({name: "domo", age: 200}));