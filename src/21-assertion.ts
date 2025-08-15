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

const animalUsers: User[] = [
    {
        tag: "animal",
        species: "dog"
    },
    {
        tag: "animal",
        species: "cat"
    }
]

console.log(getNamesIfAllHuman(animalUsers));