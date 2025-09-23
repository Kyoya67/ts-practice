export type Option<T> = {
    tag: "some";
    value: T;
} | {
    tag:"none";
}

function doubleOption(obj: Option<number>): number | undefined {
    return mapOption(obj, x => x * 2);  
}

function toStringOption(obj: Option<number>): string | undefined {
    return mapOption(obj, x => x.toString());
}

function toBigIntOption(obj: Option<number>): bigint | undefined {
    return mapOption(obj, x => BigInt(x));
}

function isSome<T>(obj: Option<T>): obj is Exclude<Option<T>, {tag: "none"}> {
    return obj.tag === "some";
}

function mapOption<T, U>(obj: Option<T>, callback: (num: T) => U): U | undefined{
    if(isSome(obj)) { 
        return callback(obj.value);
    }
    return undefined;
} 

console.log(doubleOption({tag: "some", value: 8}));
console.log(toStringOption({tag: "some", value: 9}));
console.log(toBigIntOption({tag: "some", value: 10}));
console.log(doubleOption({tag: "none"}));
console.log(toStringOption({tag: "none"}));
console.log(toBigIntOption({tag: "none"}));

