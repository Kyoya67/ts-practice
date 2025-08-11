type HasAge = {
    age: number;
}

class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function getAge(customer: HasAge) {
    return customer.age;
}

const Josh = new User("Josh", 11);
console.log(getAge(Josh));
