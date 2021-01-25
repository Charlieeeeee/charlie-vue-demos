export function initialUpperCase(str: string) {
  return str.replace(/^\w/, m => m.toUpperCase())
}