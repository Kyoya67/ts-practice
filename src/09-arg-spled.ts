export const sum = (...numbers: number[]) => {
    return numbers.reduce((sum, number) => sum + number, 0);
}

export const numbers = [1, 2, 3, 4, 5];

console.log(sum(...numbers));

// 無名関数を変数に代入
export const sum3 = (a: number, b: number, c: number) => {
    return a + b + c;
}

// 関数式で定義
export const anonymousFunc = function(a: number, b: number, c: number) {
    return a + b + c;
}

export const [a, b, c] = [1, 2, 3];

console.log(sum3(a, b, c));
console.log(anonymousFunc(a, b, c));

console.log('sum3.name:', sum3.name);
console.log('anonymousFunc.name:', anonymousFunc.name);