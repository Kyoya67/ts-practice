export type Human = {
    name: string;
    age: number;
}

export type returnObj = {
    bmi: number;
}

export const calcBmi = ({
    weight, height
}: {
    weight: number;
    height: number;
}): returnObj => ({
    bmi: weight / height ** 2,
});

export const calcBmi2 = ({
    weight, height
}: {
    weight: number;
    height: number;
}): returnObj => {
   return { bmi: weight / height ** 2 };
};