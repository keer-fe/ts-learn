// 索引类型

let obj3 = {
  a: 1,
  b: 2,
  c: 3
}
function getValues(obj: any, keys: string[]) {
  return keys.map(key => obj[key])
}
console.log(getValues(obj3, ['a', 'b']))
console.log(getValues(obj3, ['e', 'f']))

// 查询操作符
// keyof T
// 表示类型 T 的所有公共属性的字面量的联合类型
interface Obj {
  a: number
  b: string
}
let key: keyof Obj = 'a'

// 索引访问操作符 T[K]
let value: Obj['a'] = 12

// 泛型约束 T extends U
function getValues1<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getValues1(obj3, ['a', 'b']))
// console.log(getValues1(obj3, ['e', 'f']))

