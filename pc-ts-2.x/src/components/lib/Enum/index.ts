// 1.
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right
// } // 就是为了定义一些带名字的常量, 哈哈哈
// console.log(Direction); // 由此看来枚举并不是type, 而是value


// 2.
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// Direction[Symbol.iterator] = function *() {
//   return this;
// }
// console.log(Direction.Left); // 直接当做对象使用
// console.log(...Direction);// 是否可以遍历呢, 不可以


// 3.
// let obj = {
//   * [Symbol.iterator]() {
//     yield 'first';
//     yield 'second';
//   }
// };
// console.log(...obj);// 是否可以遍历呢, 可以


// 4.
// const sbItr = Symbol.iterator
// let obj: any = {}; // 还是any大法好啊
// obj[sbItr] = function *() {
//   yield 'first';
//   yield 'second';
// }
// console.log(...obj);// 是否可以遍历呢, 可以


// 5.
// enum EResponse {
//   No = 0,
//   Yes = 1,
// }

// function respond(recipient: string, message: EResponse/*枚举EResponse可以作为成员的类型*/): void {
//   console.log(recipient, message)
// }

// respond("Princess Caroline", EResponse.Yes)


// 6.
// enum E {
//   A = '',
//   B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }


// 7.
// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }
// console.log(Direction)


// 8.
// enum BooleanLikeHeterogeneousEnum {
//   No = 0,
//   Yes = "YES",
// }
// console.log(BooleanLikeHeterogeneousEnum)


// 9.
// let a:number = 1;
// enum EMyEnum {
//   first = a,
//   second, // Enum member must have initializer
//   third, // Enum member must have initializer
// }


// 10.
// All enum members in 'E1' and 'E2' are constant.
// enum E1 { X, Y, Z }

// enum E2 {
//     A = 1, B, C
// }


// 11.
// console.log(2 << 1) // <<是将数字2的二进制形式往左移两位


// 12.
// enum ShapeKind {
//   Circle,
//   Square,
// }

// interface Circle {
//   kind: ShapeKind.Circle;
//   radius: number;
// }

// interface Square {
//   kind: ShapeKind.Square;
//   sideLength: number;
// }

// let c: Circle = {
//   kind: ShapeKind.Square, // 首先枚举成员成为了类型, 另一个变化是枚举类型本身变成了每个枚举成员的 联合
//   //    ~~~~~~~~~~~~~~~~ Error!
//   radius: 100,
// }


// 13.
// const enum Enum {
//   A = 1,
//   B = A * 2
// }


// 14.
// const enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }

// let directions:Directions[] = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// console.log(directions)


// 15.
// 外部枚举用来描述已经存在的枚举类型的形状
// declare enum Enum {
//   A = 1,
//   B,
//   C = 2
// }
