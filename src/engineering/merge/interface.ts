// 接口合并
// 不在一个文件中的同名接口也会合并

interface M {
  x: number;
  // y: string; // 非函数成员重复属性，必须具有相同的属性类型
  foo(bar: number): number; // 5 // 函数成员重名，实现函数重载。
  foo(bar: 'a'): number; // 2
}

interface M {
  y: number;
  // 函数重载顺序
  // 接口内部按照书写的顺序
  // 接口之间，后面的接口排在前面
  // 拥有字符串字面量的参数的函数，会排在第一位
  foo(bar: string): string; // 3
  foo(bar: number[]): number[]; // 4
  foo(bar: 'b'): number; // 1
}

let m: M = {
  x: 1,
  y: 2,
  foo: (bar: any) => {
    return bar
  }
}
