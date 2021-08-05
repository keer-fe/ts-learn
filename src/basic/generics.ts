// 泛型

// 一个打印函数，如果想支持输入字符串数组
function log(value: string): string {
  console.log('value', value)
  return value
}
// 第一种方法，使用前面提到的函数重载
function log1(value: string): string
function log1(value: string[]): string[]
function log1(value: any): any {
  console.log('value', value)
  return value
}
// 第二种方法，使用联合类型
function log2(value: string | string[]): string | string[] {
  console.log('value', value)
  return value
}
// 如果需要这个函数接收任意类型的参数
// 参数类型为 any，会丢失函数返回的约束类型
function log3(value: any) {
  console.log('value', value)
  return value
}

// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定
// 保证输入和返回值的类型相同
function log4<T>(value: T): T {
  console.log('value', value)
  return value
}
log4<string[]>(['a', 'b'])
log4(['a', 'b'])

// 不仅可以定义函数，也可以定义类型
type Log = <T>(value: T) => T
let myLog: Log = log4

// 泛型接口
// 和类型别名等价
interface Log1 {
  <T>(value: T): T
}

// 约束接口的所有成员时，实现时必须指定接口类型或者指定默认类型
interface Log2<T = string> {
  (value: T): T
}
let myLog1: Log2<number> = log4
let myLog2: Log2 = log4
