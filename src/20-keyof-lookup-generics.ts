function get<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
} 

type Human = {
    name: string;
    age: number;
}

const choya: Human = {
    name: "Ryota Kyoya",
    age: 26
};

const realName = get(choya, "name");
const realAge = get(choya, "age");

console.log(realName, realAge);