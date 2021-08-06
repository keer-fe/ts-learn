// 联合类型
// 声明的类型并不确定，可以为多个类型中的一个

let a1: number | string = 1
let a2: 'a' | 'b' | 'c' = 'a'
let a3: 1 | 2 | 3 = 2

class Dog1 implements DogInterface {
  run() {}
  eat() {}
}
class Cat1 implements CatInterface {
  jump() {}
  eat() {}
}
enum Master { Boy, Girl }
function getPer(master: Master) {
  // 如果一个对象为联合类型，在类型未确定的情况下，只能访问共有成员
  // 取联合类型的交集
  let pet = master === Master.Boy ? new Dog1() : new Cat1()
  pet.eat()
  // pet.run()
  return pet
}

interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
interface Circle {
  kind: 'circle';
  r: number;
}
type Shape = Square | Rectangle | Circle
function area(s: Shape) {
  // 访问共有属性，来创建不同的类型访问区块
  switch(s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.r ** 2
    default:
      return ((e: never) => { throw new Error(e) })(s)
  }
}
console.log(area({ kind: 'circle', r: 12 }))