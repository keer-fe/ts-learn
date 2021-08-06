// 交叉类型
// 将多个类型合并为一个类型，新的类型将具有所有类型的特性
// 取所有类型的并集

interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
}
