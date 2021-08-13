// 批量导入
import { a, b, c } from './a'

// 导入接口
import { P } from './a'

// 导入时起别名
import { f as F } from './a'

// 导入模块中的所有成员，绑定在 All 上
import * as All from './a'

// 不加 {}，使用默认导入
import myFunction from './a'

console.log(a, b, c)
let p: P = {
  x: 1,
  y: 2
}
console.log(All)
myFunction()
