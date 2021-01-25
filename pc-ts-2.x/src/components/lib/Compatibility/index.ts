// 1.
// interface Named {
//   name: string;
// }

// class Person {
//   name: string;
// }

// let p: Named;
// // OK, because of structural typing
// p = new Person();


// 2
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;

// y = x; // OK
// x = y; // Error


// 3.
// let x = () => ({name: 'Alice'});
// let y = () => ({name: 'Alice', location: 'Seattle'});

// x = y; // OK
// y = x; // Error, because x() lacks a location property


// 4.
// enum EventType { Mouse, Keyboard }

// interface Event { timestamp: number; }
// interface MouseEvent extends Event { xPosi: number; yPosi: number } // All declarations of 'x' must have identical modifiers
// interface KeyEvent extends Event { keyCode: number }

// function listenEvent(eventType: EventType, handler: (n: Event) => void) {
//     /* ... */
// }

// // Unsound, but useful and common
// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.xPosi + ',' + e.yPosi));

// // Undesirable alternatives in presence of soundness
// listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).xPosi + ',' + (<MouseEvent>e).yPosi));
// listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.xPosi + ',' + e.yPosi)));

// // Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));


//5.
// function invokeLater(args: any[], callback: (...args: any[]) => void) {
//   /* ... Invoke callback with 'args' ... */
// }

// // Unsound - invokeLater "might" provide any number of arguments
// invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// // Confusing (x and y are actually required) and undiscoverable
// invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));


// 6.
// let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x: {suit: string; card: number; }[]): number;
// function pickCard(x: number): {suit: string; card: number; };
// function pickCard(x): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


// 7.
// enum MyStatus { Ready, Waiting };
// enum Color { Red, Blue, Green };

// let mstatus = MyStatus.Ready; // 如此会被自动认定为MyStatus类型
// // mstatus = Color.Green;  // Error


// 8.
// class Animal {
//   feet: number;
//   constructor(name: string, numFeet: number) { }
// }

// class Size {
//   feet: number;
//   constructor(numFeet: number) { }
// }

// let a: Animal;
// let s: Size;

// a = s;  // OK
// s = a;  // OK


// 9.
// class Father {
//   protected name: string;
// }

// class Child extends Father{
//   age = 24;
// }

// class Another {
//   protected name: string;
// }
// let f = Father;
// let a = Another;
// f = Child; // 允许子类赋值给父类
// a = Child; // err 不能赋值给其它有同样类型的类
// a = Father; err


// 10.
// interface Empty<T> {
// } // 没有使用T
// let x: Empty<number>;
// let y: Empty<string>;

// x = y;  // OK, because y matches structure of x


// 11.
// interface NotEmpty<T> {
//   data: T; // 使用了T
// }
// let x: NotEmpty<number>;
// let y: NotEmpty<string>;

// x = y;  // Error, because x and y are not compatible


// 12.
// let identity = function<T>(x: T): T {
//   // ...
// }

// let reverse = function<U>(y: U): U {
//   // ...
// }

// identity = reverse;  // OK, because (x: any) => any matches (y: any) => any


// 13.
