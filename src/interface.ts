interface List {
  readonly id: number; // 只读属性不允许修改
  name: string;
  // [x: string]: any // 索引签名
  age?: number // 可选属性
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
  })
}

// 这里采用鸭式辨型：像鸭子一样走路并且嘎嘎叫的就叫鸭子
let result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
}
render(result)
// 传入对象字面量的话，就会对额外的变量进行检查
// 绕过这种检查的方法有三种
// 1. 赋值给一个变量
// 2. 类型断言: as Result 或者 <Result>。明确的告诉编辑器，我们已知这个对象的类型，这样编辑器就会绕过这个类型检查
// 3. 字符串索引签名 [x: string]: any
render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
} as Result)
render(<Result>{
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
})

// 索引签名
interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
  [x: string]: string
  // y: number 不被允许，因为上面已经声明了值为字符串
  [index: number]: string // 两种签名可以混用，但是必须是上面 String 类型的子类型
}
let a
