export class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getMessage(message: string): string {
        return `${this.name} (${this.age}) 「${message}」`;
    }
}

const Uhyo = new User("uhyo", 26);
console.log(Uhyo.getMessage("こんにちは"));
