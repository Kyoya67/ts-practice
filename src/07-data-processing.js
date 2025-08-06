"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = "\nname,age,premiumUser\nTaro Yamada,20,true\nJiro Yamada,21,false\nSaburo Yamada,22,true\n";
var users = data.split('\n');
console.log("users:", users);
// for (const user of users) {
//     if (user.premiumUser) {
//         console.log(`${user.name} (${user.age}歳)はプレミアムユーザーです。`);
//     } else {
//         console.log(`${user.name} (${user.age}歳)はプレミアムユーザーではありません。`);
//     }
// }
