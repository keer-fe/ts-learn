// 命名空间与类的合并
// 命名空间需要放在类的后面
// 给类增加了静态的属性

class H {}
namespace H {
  export let state = 1
}
console.log(H.state)
