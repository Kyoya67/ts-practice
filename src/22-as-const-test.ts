const names = ["a", "b", "c"] as const;
type FirstName = (typeof names)[number];
type AllNames = (typeof names)[number];

const obj = {
    a: 1,
    b: 2,
    c: 3,
} as const;

type FirstObj = typeof obj["a"];
type AllObj = typeof obj[keyof typeof obj];

const tuple = ["hello", 42, true] as const;
type FirstTuple = (typeof tuple)[0];
type AllTuple = (typeof tuple)[number];