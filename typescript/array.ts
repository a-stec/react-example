let list: number[] = [10, 20.5, 30];
let colors: string[] = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);

let func: Function;
func = () => {
    console.log(typeof func);
}

let arr: undefined;
console.log(typeof arr)

let names: Array<string | number> = ["Tom", "Bob", "Alice", 2];
console.log(names[1]); // Bob
