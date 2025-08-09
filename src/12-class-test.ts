class User {
    constructor (public name: string, private age: number) {}

    public isAdult(): boolean{
        return this.age >= 20;
    }

    public getName(): string {
        return this.name
    }
}

const josh = new User("josh", 12);
console.log(josh.isAdult());