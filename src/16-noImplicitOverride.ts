export class User {
    name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    isAdult() {
        return this.age >= 18;
    }
}

export class PremiumUser extends User {
    rank?: number;

    constructor(name: string, age: number, rank?: number) {
        super(name, age);
        this.rank = rank;
    }

    public override isAdult() {
        return true;
    }
}

const user = new User("John", 15);
console.log(user.isAdult());

const premiumUser = new PremiumUser("John", 15);
console.log(premiumUser.isAdult());
console.log(premiumUser.rank);