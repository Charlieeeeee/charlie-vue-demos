// 1.
// interface Box {
//   height: number;
//   width: number;
// }

// interface Box {
//   scale: number;
// }

// let box: Box = {height: 5, width: 6, scale: 10};


// 2.
// namespace Animal {
//   let haveMuscles = true;

//   export function animalsHaveMuscles() {
//       return haveMuscles;
//   }
// }

// namespace Animal {
//   export function doAnimalsHaveMuscles() {
//       return haveMuscles;  // Error, because haveMuscles is not accessible here
//   }
// }


// 3.
// 合并命名空间和类
// class Album {
//   label: Album.AlbumLabel;
// }
// namespace Album {
//   export class AlbumLabel { }
// }

// console.log(Album)

// 你也可以使用命名空间为类增加一些静态属性。


// 4.
// function buildLabel(name: string): string {
//   return buildLabel.prefix + name + buildLabel.suffix;
// }

// namespace buildLabel {
//   export let suffix = "";
//   export let prefix = "Hello, ";
// }

// console.log(buildLabel("Sam Smith"));


// 5.
// enum Color {
//   red = 1,
//   green = 2,
//   blue = 4
// }

// namespace Color {
//   export function mixColor(colorName: string) {
//       if (colorName == "yellow") {
//           return Color.red + Color.green;
//       }
//       else if (colorName == "white") {
//           return Color.red + Color.green + Color.blue;
//       }
//       else if (colorName == "magenta") {
//           return Color.red + Color.blue;
//       }
//       else if (colorName == "cyan") {
//           return Color.green + Color.blue;
//       }
//   }
// }
// console.log(Color.mixColor('yellow'))


// 6.
