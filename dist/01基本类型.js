// 元组 Tuple
// Declare a tuple type
var x;
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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// Any
// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean
var notSure = 4;
notSure.ifItExists();
// okay, ifItExists might exist at runtime
notSure.toFixed();
// okay, toFixed exists (but the compiler doesn't check)
// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
