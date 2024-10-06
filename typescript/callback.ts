type opNumber = (a: number, b: number) => number;

function mathOp(x: number, y: number, operation: opNumber): number
{
    let result = operation(x, y);
    return result;
}

let func: opNumber;
func = function (a: number, b: number): number {
    return a + b;
}

console.log(mathOp(10, 20, func)); // 30 
