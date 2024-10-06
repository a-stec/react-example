{
    // function add(x: string, y: string): string;
    // function add(x: number, y: number): number;
    // function add(x: any, y: any): any {
    //     return x + y;
    // }
    // let result1 = add(5, 4); // 9
    // let result2 = add("5", "4"); // 54
    // console.log(result1);
    // console.log(result2);
}



function add(x: string, y: string): string;
function add(x: string, y: object): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
    return x + y;
}
let obj1 = {
    a: 1,
    b: 2,
    c: 3,
    valueOf: function() { 
        return 1;
    },
    toString: function() {
        return "Объект obj1";
    }
};

let obj2 = {
    a: 1,
    b: 2,
    c: 3,
    valueOf: function() { 
        return 2;
    },
    toString: function() {
        return "Объект obj2";
    }
};


// console.log(obj1 + obj2);
// console.log(obj1 + {});
// console.log(obj1 + []);
console.log(add("1", {}));
