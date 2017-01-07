"use strict"

class Stack {
  constructor() {
    this.array = []
    this.max_size = 5;
    //this.empty_checker = true
  }

  push(x) {
    if(this.isEmpty() === true){
        this.array.push(x);
        return console.log(`"${x}" is succesfully added`)
    }
  }

  pop() {
    if(this.array.length === 0){
      return "No data available to be deleted"
    }
    else {
      return `${this.array.pop()} has been deleted`;
    }
  }

  peek() {
    return this.array[this.array.length-1]
  }

  isFull(){
    return console.log("Stack is full!")
  }

  isEmpty() {
    if(this.array.length < this.max_size){
      return true
    }
    else{
      return this.isFull()
    }
  }
}

let my_stack = new Stack()


console.log(`The stack is empty? ${my_stack.isEmpty()}`)

my_stack.push("Javascript")
my_stack.push("is just so")
my_stack.push("cool")

my_stack.push(15)

console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())


console.log(`The stack is empty? ${my_stack.isEmpty()}`)

console.log(my_stack.pop());
