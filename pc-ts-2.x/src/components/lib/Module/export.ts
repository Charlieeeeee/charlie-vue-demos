// 1.
// export interface StringValidator {
//   isAcceptable(s: string): boolean;
// }

// export const numberRexExp = /^[1-9]+$/;

// export class ZipCodeValidator implements StringValidator {
//   isAcceptable(s: string) {
//     return s.length === 5 && numberRexExp.test(s)
//   }
// };


// 2.
// export interface StringValidator {
//   isAcceptable(s: string): boolean;
// }

// export const numberRexExp = /^[1-9]+$/;
// class ZipCodeValidator implements StringValidator {
//   isAcceptable(s: string) {
//     return s.length === 5 && numberRexExp.test(s)
//   }
// };

// export { ZipCodeValidator };
// export { ZipCodeValidator as MainValidator }


// 3.
