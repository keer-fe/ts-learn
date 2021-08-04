// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3] // 叠合类型

// 元祖
let tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2]

// 函数
let addF = (x: number, y: number) => x + y // 函数返回值类型可以省略，用到了 ts 的类型推断
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3 // 如果只定义为 object 类型，则不允许设置 x 的值，因为 object 没有定义 obj 都有哪些属性

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

// undefined and null
// undefined 和 null 是所有类型的子集
// 如果把这两个类型复制给其他类型，需要设置 stictNullCheck = false
// 或者设置联合类型中包括 undefined null
let un: undefined = undefined
let nu: null = null
// num = un
// num = nu

// void
let noReturn = () => {}

// any
let x
x = 1
x = []
x = () => {}

// never
// 永远不会有返回值的类型
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}
