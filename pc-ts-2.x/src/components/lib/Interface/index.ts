// //1. 可选属性
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// //2. 只读属性
// interface Point {
//   readonly x: number;
//   readonly y: number;
// }
// /*----------------------------------------*/
// //TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// // ro[0] = 12; // error!
// // ro.push(5); // error!
// // ro.length = 100; // error!
// // a = ro; // error!

// //3. 函数类型
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// // 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：
// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// }
// /*------------------分割线----------------------*/
// let _mySearch: SearchFunc;
// _mySearch = function(src, sub) {
//     let result = src.search(sub);
//     return result > -1;
// }

// //4. 可索引的类型
// interface StringArray {
//   [index: number]: string;
// }
// let myArray: StringArray;
// myArray = ["Bob", "Fred"];
// let myStr: string = myArray[0];

// //5. 类类型
// interface ClockInterface {
//   currentTime: Date; // 必须实现这一个属性, 而且一定得是公有属性
// }
// class Clock implements ClockInterface {
//   currentTime: Date; // 不写public也会默认是public
//   constructor(h: number, m: number) { }
// }
// /*------------------分割线----------------------*/
// interface ClockInterfaceS {
//   currentTime: Date;
//   setTime(d: Date);
// }
// class ClockS implements ClockInterfaceS {
//   currentTime: Date;
//   setTime(d: Date) {
//       this.currentTime = d;
//   }
//   constructor(h: number, m: number) { }
// }
// // 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
// // interface ClockConstructor {
// //   new (hour: number, minute: number);
// // }
// // class ClockT implements ClockConstructor {
// //   currentTime: Date;
// //   constructor(h: number, m: number) { }
// // } // 错误
// /*------------------分割线----------------------*/
// interface ClockConstructor {
//   new (hour: number, minute: number): ClockInterfaceT;
// } // 接口描述构造函数, 当类作为属性或参数时可以使用;
// interface ClockInterfaceT {
//   tick();
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterfaceT {
//   return new ctor(hour, minute);
// }
// class DigitalClock implements ClockInterfaceT {
//   constructor(h: number, m: number) { }
//   tick() {
//       console.log("beep beep");
//   }
// }
// class AnalogClock implements ClockInterfaceT {
//   constructor(h: number, m: number) { }
//   tick() {
//       console.log("tick tock");
//   }
// }
// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

// // 6.继承接口
// interface Shape {
//   color: string;
// }
// interface Square extends Shape {
//   sideLength: number;
// }
// let square = <Square>{}; // 可以给赋值的一侧断言, 就是说用户自己确信这就是该类型, 不用检查啦
// square.color = "blue";
// square.sideLength = 10;
// /*------------------分割线----------------------*/
// // 一个接口可以继承多个接口，创建出多个接口的合成接口。
// interface Shape {
//   color: string;
// }
// interface PenStroke {
//   penWidth: number;
// }
// interface Square extends Shape, PenStroke {
//   sideLength: number;
// }
// let squareS = <Square>{};
// squareS.color = "blue";
// squareS.sideLength = 10;
// squareS.penWidth = 5.0;

// // 混合类型
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }
// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) { };
//   counter.interval = 123;
//   counter.reset = function () { };
//   return counter;
// }
// let _c = getCounter();
// _c(10);
// _c.reset();
// _c.interval = 5.0;

// // 接口继承类
// class Control {
//   private state: any = 'state';
//   obj: SelectableControl;
//   constructor() {
//     this.obj = <SelectableControl>{}
//     console.log('Control: ',this.obj.state)
//   }
// }
// interface SelectableControl extends Control {
//   select(): void;
// }
// /**
//  * 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
//  * 接口同样会继承到类的private和protected成员。这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，
//  * 这个接口类型只能被这个类或其子类所实现（implement）
//  * */
// class Button extends Control implements SelectableControl {
//   select() { }
// }
// // 错误：“Image”类型缺少“state”属性。
// // class Image implements SelectableControl {
// //   select() { }
// // }


