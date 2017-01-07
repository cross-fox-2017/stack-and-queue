"use strict"

class Queue {
  constructor() {
    this.array = []
    this.max_size = 5;
    //this.empty_checker = true
  }

  pushData(x) {
    if(this.isEmpty() === true){
        this.array.push(x);
        return console.log(`"${x}" is succesfully added`)
    }
  }

  shiftData() {
    if(this.array.length === 0){
      return "No data available to be deleted"
    }
    else {
      return `${this.array.shift()} has been deleted`;
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

let my_stack = new Queue()


console.log(`The stack is empty? ${my_stack.isEmpty()}`)

my_stack.pushData("Javascript")
my_stack.pushData("is just so")
my_stack.pushData("cool")
my_stack.pushData(15)

console.log(my_stack.shiftData())
console.log(my_stack.shiftData())
console.log(my_stack.shiftData())
console.log(my_stack.shiftData())


console.log(`The stack is empty? ${my_stack.isEmpty()}`)

console.log(my_stack.shiftData());
