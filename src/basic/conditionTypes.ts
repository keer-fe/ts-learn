// 条件类型
// 由条件表达式所决定的类型 T extands U ? X : Y

type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' :
  'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// 分布式条件类型
// (A | B) extands U ? X : Y
// (A extands U ? X : Y) | (B extands U ? X : Y)
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | 'b' | 'c'
// T4 为 'b' | 'c'

type NotNull<T> = Diff<T, null | undefined>
type T5 = NotNull<string | number | undefined | null>

// 内置的条件类型
// Diff => Exclude<T, U> 从类型 T 中过滤掉可以赋值给 U 的类型
// NotNull => NonNullable<T>
// Extract 从类型 T 中抽取出可以赋值给 U 的类型
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T> 可以获取一个函数返回值的类型
type T7 = ReturnType<() => 'a'> // 实现里面用到了 infer 表示延迟推断，根据实际情况返回
