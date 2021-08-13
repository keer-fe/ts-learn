let c1 = require('./a.node')
let c2 = require('./b.node')
let c3 = require('../es6/a')
import c4 from '../es6/d'

console.log(c1, c2)
// 在 commonJs 中导入 es6 模块时，会将默认导出赋值给 defaule
console.log(c3)
c3.default()
c4()
