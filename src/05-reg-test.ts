const result = "Hello, aaaabbbbbccc world! abc".match(/(a+)b+c/);

if (result) {
    console.log(result[0]);
    console.log(result[1]);
}

console.log("=".repeat(50));

const result2 = "Hello, aaaabbbbbccc world! abc".match(/a(?<domodo>b+)c/);

if (result2 !== null) {
    console.log(result2.groups);
}