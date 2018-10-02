// 元组 Tuple

// Declare a tuple type
let x: [string, number];
// Initialize 
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error

// console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[2] = 3; // OK, 字符串可以赋值给(string | number)类型
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

// console.log(x[3]);
// console.log(parseInt(x[3]));

// 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);
// Any
// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean


let notSure: any = 4;
notSure.ifItExists();
 // okay, ifItExists might exist at runtime
notSure.toFixed(); 
// okay, toFixed exists (but the compiler doesn't check)

// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
console.log(strLength);
