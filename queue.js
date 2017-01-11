"use strict"

class Queue {
  constructor() {
    this.array = []
  }

  push(val) {
    return this.array.push(val);
  }

  shift() {
    return this.array.shift();
  }

  peek() {
    return this.array;
  }

  isEmpty() {
    if (this.array.length == 0) {
      return "Kosong"
    } else if (this.array.length > 0) {
      return "Penuh";
    }

  }
}

let stackNew = new Queue()

console.log(`The stack is empty? ${stackNew.isEmpty()}`)

stackNew.push("Belajar")
stackNew.push("JavaScript")
stackNew.push("Seru")

stackNew.push("Tapi")
stackNew.push("pusing")

console.log(stackNew.shift())
console.log(stackNew)
console.log(stackNew.shift())
console.log(stackNew)
console.log(stackNew.shift())
console.log(stackNew)
console.log(stackNew.shift())
console.log(stackNew)
console.log(stackNew.shift())
console.log(`The stack ${stackNew.isEmpty()}`)