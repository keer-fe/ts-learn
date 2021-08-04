// 抽象类
// 只能被继承，不能被实例化
abstract class Animal {
  eat() {
    console.log('eat')
  }

  abstract sleep(): void // 抽象方法
}
// let animal = new Animal()

// 类成员的属性都是实例属性而不是原型属性
// 类成员的方法都是原型方法
// 实例的属性必须具有初始值或者在构造函数中被初始化
class Dog extends Animal {
  // 构造函数前加上 private，表示该类既不能被继承也不能被实例化
  // 构造函数前加上 protected，表示该类只能被继承，而不能被实例化，相当于声明了一个基类
  constructor(name: string) {
    super()
    this.name = name
  }
  run() {}

  public name: string // 默认 public
  private pri() {} // 私有属性只能在本类中访问
  protected pro() {} // 受保护类属性只能在类和子类中访问，而不能在实例中访问
  readonly legs: number = 4 // 只读属性不可以被更改，需要被初始化
  static food: string = 'bones' // 静态成员只能通过类名来调用

  // 在子类中实现抽象方法
  sleep() {
    console.log('dog sleep')
  }
}
console.log(Dog.prototype)
let dog = new Dog('wangwang')
// dog.pri()
// dog.pro()
console.log(dog)
console.log(Dog.food)
dog.eat()
dog.sleep()

// 继承
class Husky extends Dog {
  // 在构造函数的参数前加上修饰符，则自动变为该类的属性
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
    this.pro()
  }
  // color: string
}
console.log(Husky.food)

// 多态
class Cat extends Animal {
  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog, cat]
animals.forEach(i => {
  i.sleep()
})

// 链式调用
class WorkFlow {
  step1() {
    return this
  }

  step2() {
    return this
  }
}
new WorkFlow().step1().step2()

// this 也可以实现多态
class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
new MyFlow().next().step1().next().step2() // 可以返回子类的类型，也可以返回父类的类型，保存父类和子类的联系