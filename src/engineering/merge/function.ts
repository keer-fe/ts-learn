// 命名空间和函数的合并
// 需要放在函数的后面
function Lib() {}

namespace Lib {
  export let version = '1.0'
}

console.log(Lib.version)
