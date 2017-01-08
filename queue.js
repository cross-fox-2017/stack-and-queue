"use strict"

class Queue {
  constructor() {
  this.data	     = []
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

  shift() {
    if (this.data.length === 0) {
      return "Data is empty"
    } else {
      return `"${this.data.shift()}" record deleted.\n`
    }
  }

  peek() {
    return this.data[this.data.length-1]
  }

  isFull(){
    return console.log("Queue is Full!\n")
  }

  isEmpty() {
    if (this.data.length < this.max_size) {
      return "yes"
    } else {
      return this.isFull()
    }
  }
}

let my_queue = new Queue()

console.log(`The stack is empty? ${my_queue.isEmpty()}\n`)

my_queue.push("JavaScript")
my_queue.push("is just so")
my_queue.push("cool")
my_queue.push(15)
my_queue.push("Hacktiv8")
my_queue.push("awesome")

console.log(my_queue.shift())
console.log(my_queue.shift())
console.log(my_queue.shift())
console.log(my_queue.shift())
console.log(my_queue.shift())
console.log(my_queue.shift())

console.log(`\nThe stack is empty? ${my_queue.isEmpty()}\n`)
console.log(my_queue.shift())
