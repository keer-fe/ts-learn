// 映射类型
// 预先定义的泛型接口

interface Obj1 {
  a: string;
  b: number;
  c: boolean;
}

// 同态：映射只作用于 Obj1 已有的属性，而不会引入新的属性
type ReadonlyObj = Readonly<Obj1>
type PartialObj = Partial<Obj1>
type PickObj = Pick<Obj1, 'a' | 'b'>

// 非同态：创建新的属性
type RecordObj = Record<'x' | 'y', Obj1>
