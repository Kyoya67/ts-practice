type Option<T> = {
    tag: "some";
    value: T;
} | {
    tag:"none";
}

function showNumberIfExists<T>(obj: Option<T>): void {
    if(isSome(obj)) {
        console.log(obj.value);
    }
}

function isSome<T>(obj: Option<T>): obj is {tag: "some", value: T} {
    return obj.tag === "some";
}

function isSome2<T>(obj: Option<T>): obj is Extract<Option<T>, {tag: "some", value: T}> {
    return obj.tag === "some";
}

function isSome3<T>(obj: Option<T>): obj is Exclude<Option<T>, {tag: "none"}> {
    return obj.tag === "some";
}

const nekota: Option<string> = {
    tag: "some",
    value: "He couldn't save the sparrow."
}

const nekota2: Option<number> = {
    tag: "some",
    value: 26
}

showNumberIfExists(nekota);
showNumberIfExists(nekota2);