"use strict"

class Stack {
  constructor() {
    this.array=[]
  }

  push(x) {
    if(this.array.length < 10){
      return this.array.push(x)
    }
    else if(this.array.length===10){
      return this.isFull()
    }
  }

  pop() {
    if(this.array.length===0){
      console.log('array kosong ga ada yang bisa diambil')
    }
    else{
      return this.array.pop()
    }
  }

  peek() {
    return console.log(this.array[this.array.length-1])
  }

  isFull(){

      return console.log("array sudah penuh")

  }

  isEmpty() {
    if(this.array.length===0){
      return  console.log("array kosong")
    }
  }

}

let newStack = new Stack
newStack.isEmpty();
newStack.push('a')
newStack.push('b')
newStack.push('a')
newStack.push('c')
newStack.push('d')
newStack.push('e')
newStack.push('f')
newStack.push('g')
newStack.push('h')
newStack.push('i')
newStack.pop()
newStack.peek()
