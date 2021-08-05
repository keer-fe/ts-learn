// 枚举类型

// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter, Role.Maintainer)
console.log(Role)

// 字符串
enum Message {
  Success = '恭喜你，成功了',
  Error = '抱歉，失败了'
}

// 异构枚举
enum Answer {
  N,
  Y = 'yes'
}

// 枚举成员
// Role.Reporter = 2 // 枚举成员的值是只读类型
enum Char {
  // const member 常量枚举
  a,
  b = Char.a,
  c = 1 + 3,
  // computed member 需要计算的表达式，被保留到程序的执行阶段
  d = Math.random(),
  e = '123'.length,
  // 在 computed member 后面的变量，需要被赋初始值
  f = 4
}

// 常量枚举
// 编译后被移除
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]
console.log(month)

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 2

let e1: E.a = 1
let e2: E.b
// 两种枚举类型是不可以比较的
// e1 === e2
let e3: E.a = 1
// 相同枚举类型可以比较
// e1 === e3

let g1: G = G.b
let g2: G.a = G.a

