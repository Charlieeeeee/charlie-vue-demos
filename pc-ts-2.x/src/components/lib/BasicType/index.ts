// // 布尔值
// let isDone: boolean = false;

// // 数字
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;

// // 字符串
// let myname: string = "bob";
// myname = "smith";

// // 数组
// let list1: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3];

// // 元组 Tuple
// let x: [string, number] =  ['hello', 10];
// // x = [10, 'hello']; // Error

// // 枚举
// enum Color {Red, Green, Blue}
// let c: Color = Color['Green'];

// // Any
// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean

// // Void
// function warnUser(): void {
//   console.log("This is my warning message");
// }

// // Null 和 Undefined
// let _u: undefined = undefined;
// let _n: null = null;

// // Never
// // 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//   throw new Error(message);
// }
// // 推断的返回值类型为never
// function fail() {
//   return error("Something failed");
// }
// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//   while (true) {
//   }
// }

// // Object
// // object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
// create(null); // OK
// // create(42); // Error
// // create("string"); // Error
// // create(false); // Error
// // create(undefined); // Error

// // 类型断言
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
// let _someValue: any = "this is a string";
// let _strLength: number = (someValue as string).length;


// 函数重载
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }