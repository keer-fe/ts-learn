// 类与接口的关系

// 一个接口可以约束类成员有哪些属性以及他们的类型
// 接口只能约束类的公有成员
// 接口不能约束类的构造函数
interface Human {
  // new (name: string): void
  name: string;
  eat(): void;
}

// 类实现接口时，必须实现接口中定义的所有属性
// implements 实现接口
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  // private name: string
  name: string
  eat() {}
  sleep() {}
}

// 接口可以相互继承
// 一个接口可以继承多个接口
// 接口的继承可以抽离出克重用的接口
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

// 继承多个接口
interface Boy extends Man, Child {}

let body: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

// 接口还可以继承类
// 接口可以把类的结构成员抽离出来，包含公共成员、私有成员以及受保护的成员
class Auto {
  state = 1
  // private state2 = 0
}
interface AutoInterface extends Auto {

}
class C implements AutoInterface {
  state = 1
  // private state2: number = 12
}
class Bus extends Auto implements AutoInterface {

}

// 总结
// 接口之间可以相互继承
// 类之间可以相互继承
// 接口可以通过类实现，但是接口只能约束类的公有成员
// 接口可以抽离出类的成员，包括共有成员、私有成员和受保护的成员
