// 类型检查机制
// TS 编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为
// 作用：辅助开发，提高开发效率

// 1. 类型推断
// 不需要指定变量的类型（函数的返回值类型），TS 可以根据某些规则自动地为其推断出一个类型
// 1-1 基础类型推断，从右向左推断
let a = 1 // 推断为 number
let b = [1] // 推断为 number 类型的数组
let c = (x = 1) => x + 1 // x 推断为 number 类型, c 推断为 number 类型

// 1-2 最佳通用类型推断，从右向左推断
// 当需要从多个类型中推断出一个类型的时候，TS 就会推断出一个兼容当前所有类型的通用类型
let d = [1, null] // d 被推断为 (number | null)[] 类型

// 1-3 上下文类型推断
window.onkeydown = (event) => { // 推断 event 类型为 KeyboardEvent
  console.log(event.altKey)
}

// 可以使用类型断言来覆盖 TS 的推断
interface Foo {
  bar: number
}
let foo = {} as Foo
foo.bar = 1
// 但最好不要这样用，因为很可能遗漏 bar
let foo1: Foo = { bar: 2 }

// 2. 类型兼容性
// 当一个类型 Y 可以被赋值给另一个类型 X 时，我们就可以说类型 X 兼容类型 Y
// X 兼容 Y：X（目标类型）= Y（源类型）
let s: string = 'a'
s = null

// 2-1 接口兼容性
// 参数少的兼容参数多的
// 源类型必须具备目标类型的必要属性
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x1: X = { a: 1, b: 2 }
let y1: Y = { a: 1, b: 2, c: 3 }
x1 = y1 // 鸭式辨型
// y1 = x1

// 2-2 函数兼容性
type Handler = (a: number, b: number) => void // 目标类型
function hof(handler: Handler) { // 传入的参数为源类型
  return handler
}

// 1) 参数的个数
// 源函数的参数个数要小于等于目标函数的参数个数
let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2) 不可

// 可选参数和剩余参数
let handler3 = (p1: number, p2: number) => {} // 固定参数
let handler4 = (p1?: number, p2?: number) => {} // 可选参数
let handler5 = (...args: number[]) => {} // 剩余参数
// 固定参数可以兼容可选参数和剩余参数
handler3 = handler4
handler3 = handler5
// 可选参数不兼容固定参数和剩余参数
// 需配置 strictFunctionTypes 为 false
handler4 = handler3
handler4 = handler5
// 剩余参数可以兼容固定参数和可选参数
handler5 = handler3
handler5 = handler4

// 2) 参数类型
let handler6 = (a: string) => {}
// hof(handler6) 不可，类型不兼容

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point2D {
  x: number;
  y: number;
}

let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}

// 参数多的兼容参数少的
// p2d = p3d
p3d = p2d

// 3) 返回值类型
// 目标函数的返回值类型必须为源函数的返回值类型相同，或者是其子类型
let handler7 = () => ({ name: 'Alice' })
let handler8 = () => ({ name: 'Alice', location: 'Beijing' })
handler7 = handler8
// handler8 = handler7

// 函数重载
// 目标函数的参数要多于源函数的参数
// 返回值类型也要符合兼容性要求
function overload(a: number, b: number): number // 目标函数
function overload(a: string, b: string): string // 目标函数
function overload(a: any, b: any): any {} // 源函数

// 2-3 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
// 枚举和 number 是可以互相兼容的
let fruit: Fruit.Apple = 1
let no: Number = Fruit.Banana
// 枚举和枚举之间是不兼容的
// let apple: Fruit.Apple = Color.Red

// 2-4 类兼容性
// 静态成员和构造函数是不参与比较的
// 私有成员都不兼容
class A {
  constructor(p: number, q: number) {}
  id: number = 1
  private name: string = ''
}
class B {
  static s: number = 1
  constructor(p: number) {}
  id: number = 2
  private name: string = ''
}
let aa = new A(1, 2)
let bb = new B(1)
// aa = bb
// bb = aa
// 含有私有成员，父类和子类的实例是可以相互兼容的
class D extends A {}
let dd = new D(1, 2)
dd = aa
aa = dd

// 2-5 泛型兼容性
// 1) 泛型变量
// 当没有属性时，可以兼容，当含有属性时，不能兼容
interface Empty<T> {
  value: T
}
let obj1: Empty<number> = { value: 1 }
let obj2: Empty<string> = { value: 's' }
// obj1 = obj2
// obj2 = obj1

// 2) 泛型函数
// 如果两个泛型函数的定义相同，没有指定类型，是可以兼容的
let log8 = <T>(x: T): T => {
  console.log('x')
  return x
}
let log9 = <U>(y: U): U => {
  console.log('y')
  return y
}
log8 = log9
log9 = log8

// 总结
// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数多的兼容参数少的

// 3. 类型保护
// TS 能够在特定的区块中保证变量属于某种确定的类型
// 可以在此区块中放心的引用次类型的属性，或者调用次类型的方法
enum Type { Strong, Week }
class Java {
  helloJava() {
    console.log('Hello Java')
  }
  java: any
}
class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript')
  }
  javascript: any
}
// 类型谓词
function isJava (lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}
function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  // if ((lang as Java).helloJava) {
  //   (lang as Java).helloJava()
  // } else {
  //   (lang as JavaScript).helloJavaScript()
  // }

  // instanceof
  if (lang instanceof Java) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  // in
  if ('java' in lang) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  // typeof
  if (typeof x === 'string') {
    x.length
  } else {
    x.toFixed(2)
  }

  // 类型保护函数
  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }
  return lang
}
getLanguage(Type.Strong, 1)

// 总结
// 类型检查机制
// 类型推断、类型兼容、类型保护
