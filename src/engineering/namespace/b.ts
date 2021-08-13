/// <reference path="a.ts" />

namespace Shape {
  export function square(x: number) {
    return x * x
  }
}

console.log(Shape.circle(1));
console.log(Shape.square(1));

import circle = Shape.circle
console.log(circle(2))
