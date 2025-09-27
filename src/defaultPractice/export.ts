const domodomo = "a, domo";

export default function(): string {
    return "Nekota!!!!!!!!!!!!!!!!!!";
}

type Animal = {
    name: string;
    age: number;
}

const tama: Animal = {
    name: "Tama",
    age: 3,
}

export type { Animal, tama }  // ブルーベリー本の書き方
    
export { domodomo }