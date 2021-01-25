// 1.
// function identity<T>(arg: T): T {
//   if(typeof arg === 'string'){
//     console.log(arg.length)
//   }
//   return arg;
// }

// console.log(identity<string>('charlie'))


//2.
// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: <T>(arg: T) => void = identity;
// console.log(myIdentity<string>('charlie'))


//3.
// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: <U>(arg: U) => U = identity;


//4.
// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: {<T>(arg: T): T} = identity;


//5.
// interface ICb{ <T>(str: T): T }
// function greet(cb: ICb):ICb {
//   return cb
// }


//6.
// interface ICb<T>{ (str: T): T }
// function greet(cb: ICb<number>):ICb<number> {
//   return cb
// }


//7.
// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;


//8.
// interface IObj<T>{
//   gender: T;
//   name: string;
//   age: T
// }
// const obj: IObj<string> = {
//   gender: 'male',
//   name: 'charlie',
//   age: '24'
// }
// const another_obj: IObj<number> = {
//   gender: 1,
//   name: 'charlie',
//   age: 24
// }


//9.
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };
// console.log(myGenericNumber.add(1,2));


//10.
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }
// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function(x, y) { return x + y; };

// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));


// 11.
// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);  // Now we know it has a .length property, so no more error
//   return arg;
// }
// loggingIdentity({length: 10, value: 3});

//12.
// function create<T>(c: {new(): T; }): T {
//   return new c();
// }


// 13.
// class BeeKeeper {
//   hasMask: boolean;
// }

// class ZooKeeper {
//   nametag: string;
// }

// class Animal {
//   numLegs: number;
// }

// class Bee extends Animal {
//   keeper: BeeKeeper;
// }

// class Lion extends Animal {
//   keeper: ZooKeeper;
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//   return new c();
// }

// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!