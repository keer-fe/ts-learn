// 命名空间与枚举的合并
// 给枚举类型增加方法
enum Color {
  Blue,
  Green
}
namespace Color {
  export function mix() {}
}
console.log(Color)
