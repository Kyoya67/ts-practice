    function useNever(a: never){
    const num: number = a;
    const str: string = a;
    const bool: boolean = a;
    const undefined: undefined = a;
    const symbol: symbol = a;
    const bigint: bigint = a;
    const error: Error = a;
    return {
        num,
        str,
        bool,
        undefined,
        symbol,
        bigint,
        error,
    };
}

console.log(useNever({da: "asdf"} as never));
