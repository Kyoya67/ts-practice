function callbackMap<T>(array: T[], callback: (arg: T) => T): T[]{
    const result = [];
    for (const num of array) {
        result.push(callback(num));
    }
    return result;
}

const data = [1, 1, 2, 3, 5, 8, 13];

const result = callbackMap(data, (x) => x * 10);
console.log(result);