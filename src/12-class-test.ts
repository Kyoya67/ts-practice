export class User {
    constructor (public name: string, private age: number) {}

    public isAdult(): boolean{
        return this.age >= 20;
    }

    public getName(): string {
        return this.name
    }
}

export const Josh = new User("Josh", 12);
console.log(Josh.isAdult());

export const UserExp = class{
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public isAdult(): boolean {
        return this.age >= 20;   
    }
}

export const Takumu = new UserExp("Takumu", 23);
console.log(Takumu.isAdult());