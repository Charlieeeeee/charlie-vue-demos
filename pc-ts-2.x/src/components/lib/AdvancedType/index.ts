// import './IntersectionTypes'

// 1.
// function extend<T, U>(first: T, second: U): T & U { // 返回的是两种类型的交叉类型
//   let result = <T & U>{};
//   for (let id in first) {
//       (<any>result)[id] = (<any>first)[id];
//   }
//   for (let id in second) {
//       if (!result.hasOwnProperty(id)) {
//           (<any>result)[id] = (<any>second)[id];
//       }
//   }
//   return result;
// }

// class Person {
//   constructor(public name: string) { }
// }
// interface Loggable {
//   log(): void;
// }
// class ConsoleLogger implements Loggable {
//   log() {
//       // ...
//   }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// var n = jim.name;
// jim.log();


// 2.
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
// function padLeft(value: string, padding: string | number) {
//   if (typeof padding === "number") {
//       return Array(padding + 1).join(" ") + value;
//   }
//   if (typeof padding === "string") {
//       return padding + value;
//   }
//   throw new Error(`Expected string or number, got '${padding}'.`);
// }

// padLeft("Hello world", 4); // returns "    Hello world"


// 3.
// interface Bird {
//   fly();
//   layEggs();
// }

// interface Fish {
//   swim();
//   layEggs();
// }

// function getSmallPet(): Fish | Bird {
//   // ...
// }

// let pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim();    // errors


// 4.
// interface Bird {
//   fly();
//   layEggs();
// }

// interface Fish {
//   swim();
//   layEggs();
// }
// function getSmallPet(): Fish | Bird {
//   // ...
//   let p: Fish = {
//     swim(){},
//     layEggs(){}
//   }
//   return
// }
// let pet = getSmallPet();

// if ((<Fish>pet).swim) {
//   (<Fish>pet).swim();
// }
// else if ((<Bird>pet).fly) {
//   (<Bird>pet).fly();
// }


// 5.
// interface Bird {
//   fly();
//   layEggs();
// }

// interface Fish {
//   swim();
//   layEggs();
// }
// function getSmallPet(): Fish | Bird {
//   // ...
//   let p: Fish = {
//     swim(){},
//     layEggs(){}
//   }
//   return
// }
// let pet = getSmallPet();
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (<Fish>pet).swim !== undefined;
// }
// // 'swim' 和 'fly' 调用都没有问题了

// if (isFish(pet)) {
//   pet.swim();
// }
// else {
//   pet.fly();
// }


// 6.
// function isNumber(x: any): x is number {
//   return typeof x === "number";
// }

// function isString(x: any): x is string {
//   return typeof x === "string";
// }

// function padLeft(value: string, padding: string | number) {
//   if (isNumber(padding)) {
//       return Array(padding + 1).join(" ") + value;
//   }
//   if (isString(padding)) {
//       return padding + value;
//   }
//   throw new Error(`Expected string or number, got '${padding}'.`);
// }


// 7.
// function padLeft(value: string, padding: string | number) {
//   if (typeof padding === "number") {
//       return Array(padding + 1).join(" ") + value;
//   }
//   if (typeof padding === "string") {
//       return padding + value;
//   }
//   throw new Error(`Expected string or number, got '${padding}'.`);
// }


// 8.
// let s = "foo";
// s = null; // 错误, 'null'不能赋值给'string'
// let sn: string | null = "bar";
// sn = null; // 可以

// sn = undefined; // error, 'undefined'不能赋值给'string | null'


// 9.
// function f(x: number, y?: number) {
//   return x + (y || 0);
// }
// f(1, 2);
// f(1);
// f(1, undefined);
// f(1, null); // error, 'null' is not assignable to 'number | undefined'


// 10.
// function broken(name: string): string {
//   function postfix(epithet: string) {
//     return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
//   }
//   name = name || "Bob";
//   return postfix("great");
// }

// function fixed(name: string | null): string {
//   function postfix(epithet: string) {
//     return name.charAt(0) + '.  the ' + epithet; // ok
//   }
//   name = name || "Bob";
//   return postfix("great");
// }


// 11.
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;
// function getName(n: NameOrResolver): Name {
//     if (typeof n === 'string') {
//         return n;
//     }
//     else {
//         return n();
//     }
// }


// 12.
// type Container<T> = { value: T };
// type Tree<T> = {
//   value: T;
//   left: Tree<T>;
//   right: Tree<T>;
// }


// 13.
// 类型别名与交叉类型一起使用，我们可以创建出一些十分稀奇古怪的类型。
// type LinkedList<T> = T & { next: LinkedList<T> };
// interface Person {
//     name: string;
// }
// var people: LinkedList<Person> = {
//   name: 'charlie',
//   next: undefined
// };
// people.next = people
// var s = people.name;
// var s = people.next.name;
// var s = people.next.next.name;
// var s = people.next.next.next.name;
// console.log(s);


// 14.
// type Yikes = Array<Yikes>; // error


// 15.
// type Alias = { num: number }
// interface Interface {
//     num: number;
// }
// declare function aliased(arg: Alias): Alias;
// declare function interfaced(arg: Interface): Interface;
// 在编译器中将鼠标悬停在 interfaced上，显示它返回的是 Interface，但悬停在 aliased上时，显示的却是对象字面量类型。
// 另一个重要区别是类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）


// 16.
// type Easing = "ease-in" | "ease-out" | "ease-in-out";
// class UIElement {
//     animate(dx: number, dy: number, easing: Easing) {
//         if (easing === "ease-in") {
//             // ...
//         }
//         else if (easing === "ease-out") {
//         }
//         else if (easing === "ease-in-out") {
//         }
//         else {
//           console.log('error! should not pass null or undefined.')
//         }
//     }
// }

// let button = new UIElement();
// button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
// button.animate(0, 0, null);


// 17.
// function createElement(tagName: "img"): HTMLImageElement;
// function createElement(tagName: "input"): HTMLInputElement;
// // ... more overloads ...
// function createElement(tagName: string): Element {
//     // ... code goes here ...
// }


// 18.
// function foo(x: number) {
//   if (x !== 1 || x !== 2) { // This condition will always return 'true' since the types '1' and '2' have no overlap
//       //         ~~~~~~~
//       // Operator '!==' cannot be applied to types '1' and '2'.
//   }
// }


// 11.
// enum EShape {
//   square,
//   rectangle,
//   circle,
//   triangle
// }
// 可辨识联合
// interface Square {
//   kind: EShape.square;
//   size: number;
// }
// interface Rectangle {
//   kind: EShape.rectangle;
//   width: number;
//   height: number;
// }
// interface Circle {
//   kind: EShape.circle;
//   radius: number;
// }
// type TShape = Square | Rectangle | Circle;
// function area(s: TShape) {
//   switch (s.kind) {
//       case EShape.square: return s.size * s.size;
//       case EShape.rectangle: return s.height * s.width;
//       case EShape.circle: return Math.PI * s.radius ** 2;
//   }
// }



// 12.
// interface Triangle {
//   kind: EShape.triangle,
//   width: number;
//   height: number;
// }
// type TShape = Square | Rectangle | Circle | Triangle;
// function assertNever(x: never): never {
//   throw new Error("Unexpected object: " + x);
// }
// function area(s: TShape) {
//     switch (s.kind) {
//         case EShape.square: return s.size * s.size;
//         case EShape.rectangle: return s.height * s.width;
//         case EShape.circle: return Math.PI * s.radius ** 2;
//         case EShape.triangle: return s.height * s.width * 0.5;
//         default: return assertNever(s);
//     }
// }


// 13.
// class BasicCalculator {
//   public constructor(protected value: number = 0) { }
//   public currentValue(): number {
//       return this.value;
//   }
//   public add(operand: number): this {
//       this.value += operand;
//       return this;
//   }
//   public multiply(operand: number): this {
//       this.value *= operand;
//       return this;
//   }
//   // ... other operations go here ...
// }

// let v = new BasicCalculator(2)
//           .multiply(5)
//           .add(1)
//           .currentValue();
// console.log(v)

// class ScientificCalculator extends BasicCalculator {
//   public constructor(value = 0) {
//       super(value);
//   }
//   public sin() {
//       this.value = Math.sin(this.value);
//       return this;
//   }
//   // ... other operations go here ...
// }

// let v = new ScientificCalculator(2)
//       .multiply(5)
//       .sin()
//       .add(1)
//       .currentValue();

// console.log(v)


// 14.
// function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
//   return names.map(n => o[n]);
// }

// interface Person {
//     name: string;
//     age: number;
// }
// let person: Person = {
//     name: 'Jarid',
//     age: 35
// };
// let strings: string[] = pluck(person, ['name']); // ok, string[]


// 13.
// function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
//   return o[name]; // o[name] is of type T[K]
// }
// let _name: string = getProperty(person, 'name');
// let age: number = getProperty(person, 'age');
// let unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'


// 14.
// interface MyMap<T> {
//   [key: string]: T;
// }
// let keys: keyof MyMap<number>; // string
// let value: MyMap<number>['foo']; // number


// 15.
// interface PersonPartial {
//   name?: string;
//   age?: number;
// }
// interface PersonReadonly {
//   readonly name: string;
//   readonly age: number;
// }


// 16.
// interface MyPersion {
//   name: string;
//   age: number;
// }
// type MyReadonly<T> = {
//   readonly [P in keyof T]: T[P];
// }
// type MyPartial<T> = {
//   [P in keyof T]?: T[P];
// }
// type PersonPartial = MyPartial<MyPersion>;
// type ReadonlyPerson = MyReadonly<MyPersion>;
// let pp: PersonPartial = {
//   name: 'charlie',
// }
// let pr: ReadonlyPerson = {
//   name: 'george',
//   age: 25
// }
// pr.age = 26 // error


// 17.
// type Keys = 'option1' | 'option2';
// type Flags = { [K in Keys]: boolean };
// let flag: Flags = {
//   option1: false,
//   option2: true
// }


// 18.
// interface MyPerson {
//   name: string;
//   age: number;
// }
// type NullablePerson = { [P in keyof MyPerson]: MyPerson[P] | null }
// type PartialPerson = { [P in keyof MyPerson]?: MyPerson[P] }


// 19.
// type Nullable<T> = { [P in keyof T]: T[P] | null }
// type MyPartial<T> = { [P in keyof T]?: T[P] }


// 20.
// type Proxy<T> = {
//   get(): T;
//   set(value: T): void;
// }
// type Proxify<T> = {
//   [P in keyof T]: Proxy<T[P]>;
// }
// function proxify<T>(o: T): Proxify<T> {
//  // ... wrap proxies ...
// }
// let proxyProps = proxify(props);


// 21.
// type MyPick<T, K extends keyof T> = {
//   [P in K]: T[P];
// }

// type MyRecord<K extends string, T> = {
//   [P in K]: T;
// }
// interface MyPerson {
//   name: string;
//   age: number;
// }
// let mp: MyPick<MyPerson, 'name' | 'age'> = {
//   name: 'charlie',
//   age: 24
// }
// let mr: MyRecord<'record', MyPerson> = {
//   record: mp
// }


// 22.
