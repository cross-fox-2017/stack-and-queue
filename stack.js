"use strict"

class Stack {
  constructor() {
    this.data      = []
    this.max_size  = 5
  }

  push(x) {
    if (this.data.length > this.max_size) {
      this.isFull()
    } 
    if (this.isEmpty() === "yes"){
      this.data.push(x) 
      return console.log(`"${x}" record added.\n`)
    }
  }

  pop() {
    if (this.data.length === 0) {
      return "Data is empty"
    } else {
      return `"${this.data.pop()}" record deleted.\n`
    }
  }

  peek() {
    return this.data[this.data.length-1]
  }

  isFull(){
    return console.log("Stack is Full!\n")
  }

  isEmpty() {
    if (this.data.length < this.max_size) {
      return "yes"
    } else {
      return this.isFull()
    }
  }
}

let my_stack = new Stack()

console.log(`The stack is empty? ${my_stack.isEmpty()}\n`)

my_stack.push("JavaScript")
my_stack.push("is just so")
my_stack.push("cool")
my_stack.push(15)
my_stack.push("Hacktiv8")
my_stack.push("awesome")

console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())

console.log(`\nThe stack is empty? ${my_stack.isEmpty()}\n`)
console.log(my_stack.pop())