type Option<T> = {
    tag: "some";
    value: T;
} | {
    tag:"none";
}

function showNumberIfExists(obj: Option<T>): void {
    if(isSome(obj)) {
        console.log(obj.value);
    }
}

function isSome<T>(obj: Option<T>): obj is {tag: "some", value: T} {
    return obj.tag === "some";
}

const nekota: Option<string> = {
    tag: "some",
    value: "He couldn't save the sparrow."
}

showNumberIfExists(nekota);