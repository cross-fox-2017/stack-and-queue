"use strict"

class Queue {
  constructor() {
    this.max = 5
    this.arr = []
  }
  push(x) {
    this.arr.push(x)
    return this
  }

  peek() {
    this.arr.shift()
    return this
  }

}
let bulok = new Queue()
console.log(bulok.push(1))
console.log(bulok.push(2))
console.log(bulok.push(3))
console.log(bulok.push(4))
// console.log(this.arr);
console.log(bulok.peek());
