"use strict"

class Queue {
  constructor() {
    this.array = []
  }

  push(x) {
    return this.array.push(x);
  }

  shift() {
    return this.array.shift();
  }

  peek() {
    return this.array;
  }

  isEmpty() {
    if (this.array.length == 0) {
      return "yes"
    } else if (this.array.length > 0) {
      return "no";
    }

  }
}

let my_stack = new Queue()

console.log(`The stack is empty? ${my_stack.isEmpty()}`)

my_stack.push("JavaScript")
my_stack.push("is just so")
my_stack.push("cool")

my_stack.push(15)
my_stack.push(14)

console.log(my_stack.shift())
console.log(my_stack.shift())
console.log(my_stack.shift())
console.log(my_stack.shift())

console.log(`The stack is empty? ${my_stack.isEmpty()}`)

console.log(my_stack.shift())

console.log(`The stack is empty? ${my_stack.isEmpty()}`)
