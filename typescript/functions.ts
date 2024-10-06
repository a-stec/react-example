function sum(x: number, y: number): number {
    return x + y;
};
let op: (x: number, y: number) => number;
op = sum;
console.log(op(2, 4)); // 6
