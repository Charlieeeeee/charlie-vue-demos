export class ParseIntBasedZipCodeValidator {
  isAcceptable(s: string) {
      return s.length === 5 && parseInt(s).toString() === s;
  }
}

// 导出原先的验证器但做了重命名
export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";
/**
 * 疑问
 * 在 import.ts 里需要两个模块都引入吗, 引入顺序有无要求.
 * 我觉得不需要都引入.
 * 事实证明只需在 import.ts 里引入 ParseIntBasedZipCodeValidator.ts 即可.
 * 都引入可以么?
 * 事实证明可以都引入.
 * 这样看来引入顺序也就无关了.
 * 折腾了半天, 好像也不是什么新鲜事了. 
 * */