// 函数定义
function add1(x: number, y: number) {
  return x + y
}

// 变量
let add2: (x: number, y: number) => number

// 类型别名
type add3 = (x: number, y: number) => number

// 接口
interface add4 {
  (x: number, y: number): number
}

add1(1, 2)

// 可选参数
function add5(x: number, y?: number) { // 可选参数必须位于必选参数之后
  return y ? x + y : x
}
add5(1)

// 为函数提供默认值
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
console.log(add6(1, undefined, 3))

// 剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur, 0)
}
console.log(add7(1, 3, 5, 1))

// 函数重载
function add8(...rest: string[]): string
function add8(...rest: number[]): number
function add8(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}
console.log(add8(1, 2, 3))
console.log(add8('1', 's', 'b'))
