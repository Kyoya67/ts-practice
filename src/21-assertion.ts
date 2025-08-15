export type Animal = {
    tag: "animal",
    species: string
}

export type Human = {
    tag: "human",
    name: string
}

type User = Animal | Human;

function getName(user: User): string | undefined {
    if (user.tag === "human") {
        return user.name;
    } 

    return undefined;
}

const choya: User = {
    tag: "human",
    name: "choya"
};

const kim: User = {
    tag: "human",
    name: "kim"
}

console.log(getName(choya));

function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
    if (users.every(user => user.tag === "human")) {
        return users.map(user => user.name);
    }
    return undefined;
}

const humanUsers: User[] = [
    {
        tag: "human",
        name: "choya"
    },
    {
        tag: "human",
        name: "kim"
    }
]

console.log(getNamesIfAllHuman(humanUsers));

const animalUsers: User[] = [choya, kim];

console.log(getNamesIfAllHuman(animalUsers));

function getOneUserName(user1?: Human, user2?: Human): string | undefined {
    if (user1 === undefined && user2 === undefined) {
        return undefined;
    }
    if (user1 !== undefined) {
        return user1.name;
    }
    return user2!.name;
}

console.log(getOneUserName(choya, kim));

function getOneUserName2(user1?: Human, user2?: Human): string | undefined {
    return user1?.name ?? user2?.name;
}

console.log(getOneUserName2(choya, kim));
console.log(getOneUserName2(choya, undefined));
console.log(getOneUserName2(undefined, kim));
console.log(getOneUserName2(undefined, undefined));