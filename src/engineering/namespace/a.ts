// 命名空间即早期的内部模块，实际上是一个闭包，用于隔离作用域
// 对全局变量时代的兼容

namespace Shape {
  const pi = Math.PI
  export function circle(r: number) {
    return pi * r ** 2
  }
}
