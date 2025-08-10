export type HasName = {
    name: string;
}

export type HasNameAndAge = {
    name: string;
    age: number;
}

export const fromAge = (age: number):  HasNameAndAge => ({
    name: "John",
    age
});

export const f: (age: number) => HasName = fromAge;
export const obj: HasName = f(100);

console.log(obj);

console.log("=====================================")

export const showName = (obj: HasName) => {
    console.log(obj.name);
}

export const g: (obj: HasNameAndAge) => void = showName;
console.log(g({name: "domo", age: 200}));