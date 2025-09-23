export type Option<T> = {
    tag: "some";
    value: T;
} | {
    tag:"none";
}

function doubleOption(obj: Option<number>): number | undefined {
    return mapOption(obj, x => x * 2);  
}

function isSome<T>(obj: Option<T>): obj is Exclude<Option<T>, {tag: "none"}> {
    return obj.tag === "some";
}

function mapOption(obj: Option<number>, fn: (num: number) => number): number | undefined{
    if(isSome(obj)) { 
        return fn(obj.value);
    }
} 

console.log(doubleOption({tag: "some", value: 8}));
console.log(doubleOption({tag: "none"}));

