type Human = {
    name: string;
    age: number;
}

type returnObj = {
    bmi: number;
}

const calcBmi = ({
    weight, height
}: {
    weight: number;
    height: number;
}): returnObj => ({
    bmi: weight / height ** 2;
});

const calcBmi2 = ({
    weight, height
}: {
    weight: number;
    height: number;
}): returnObj => {
   return { bmi: weight / height ** 2 };
};