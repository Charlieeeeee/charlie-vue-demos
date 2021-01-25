// 1.
// namespace Validation {
//   export interface StringValidator {
//       isAcceptable(s: string): boolean;
//   }

//   const lettersRegexp = /^[A-Za-z]+$/;
//   const numberRegexp = /^[0-9]+$/;

//   export class LettersOnlyValidator implements StringValidator {
//       isAcceptable(s: string) {
//           return lettersRegexp.test(s);
//       }
//   }

//   export class ZipCodeValidator implements StringValidator {
//       isAcceptable(s: string) {
//           return s.length === 5 && numberRegexp.test(s);
//       }
//   }
// }

// // Some samples to try
// let strings = ["Hello", "98052", "101"];

// // Validators to use
// let validators: { [s: string]: Validation.StringValidator; } = {};
// validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();

// // Show whether each string passed each validator
// for (let s of strings) {
//   for (let name in validators) {
//       console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
//   }
// }


// 2.
// namespace Shapes {
//   export namespace Polygons {
//       export class Triangle { }
//       export class Square { }
//   }
// }

// import polygons = Shapes.Polygons; // import会生成与原始符号不同的引用
// let sq = new polygons.Square(); // Same as "new Shapes.Polygons.Square()"


// 3.
// /// <reference path="./D3.d.ts" />
// console.log(d3) // 总算是体会到了声明文件带来的快乐了


// 4.
