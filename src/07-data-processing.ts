export type User = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
Taro Yamada,20,true
Jiro Yamada,21,false
Saburo Yamada,22,true
`;

const users: User[] = [];

let lines = data.split('\n');
for (const line of lines) {
    if (line === '') continue;
    const[name, ageString, premiumUserSring] = line.split(',');
    const age = Number(ageString);
    const premiumUser = premiumUserSring === "true" ? true : false;
    users.unshift({
        name,
        age,
        premiumUser
    });
}

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age}歳)はプレミアムユーザーです。`);
    } else {
        console.log(`${user.name} (${user.age}歳)はプレミアムユーザーではありません。`);
    }
}


console.log("========map version========")

const users2: User[] = data.split('\n')
.filter(line => line !== '')
.map(line => {
    const[name, ageString, premiumUserSring] = line.split(',');
    const age = Number(ageString);
    const premiumUser = premiumUserSring === "true" ? true : false;
    return {
        name,
        age,
        premiumUser
    }
})

for (const user of users2) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age}歳)はプレミアムユーザーです。`);
    } else {
        console.log(`${user.name} (${user.age}歳)はプレミアムユーザーではありません。`);
    }
}
