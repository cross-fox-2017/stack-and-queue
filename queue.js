"use strict"

class Queue {
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

  shift() {
    if(this.array.length===0){
      console.log('array kosong ga ada yang bisa diambil')
    }
    else{
      return this.array.shift()
    }
  }

  peek() {
    return console.log(this.array)
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

let newQueue = new Queue
newQueue.isEmpty();
newQueue.push('a')
newQueue.push('b')
newQueue.push('a')
newQueue.push('c')
newQueue.push('d')
newQueue.push('e')
newQueue.push('f')
newQueue.push('g')
newQueue.push('h')
newQueue.push('i')
newQueue.shift()
newQueue.peek()
