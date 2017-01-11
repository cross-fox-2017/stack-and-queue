"use strict"
class Stack {
  constructor() {
    this.array = []
  }

  push(val) {
    return this.array.push(val);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array;
  }

  isEmpty() {
    if (this.array.length == 0) {
      return "kosong"
    } else if (this.array.length > 0) {
      return "penuh";
    }

  }
}

let stackNew = new Stack()

console.log(`The stack is empty? ${stackNew.isEmpty()}`)

stackNew.push("Belajar")
stackNew.push("JavaScript")
stackNew.push("seru")

stackNew.push("Tapi")
stackNew.push("Pusing")

console.log(stackNew.pop())
console.log(stackNew)
console.log(stackNew.pop())
console.log(stackNew)
console.log(stackNew.pop())
console.log(stackNew)
console.log(stackNew.pop())
console.log(stackNew)
console.log(stackNew.pop())
console.log(`The stack ${stackNew.isEmpty()}`)

