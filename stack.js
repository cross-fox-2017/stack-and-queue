"use strict"

class Stack {
  constructor() {
    this.max = 10
    this.arr = []
  }

  push(x) {
    // console.log(this.arr);
    // console.log(this.max);
    if (this.arr.length < this.max) {
      this.arr.push(x)
      return `Add data: ${x}`
    }else {
      return this.isFull()
    }
  }

  pop() {
    if (this.arr.length > 1) {
      this.arr.pop()
      return `Data sudah dihapus`
    }else {
      return this.isEmpty()
    }
  }

  peek() {
    return this.arr.shift()
  }

  isEmpty() {
    if (this.arr.length == 0) {
      return 'Data kosong'
    }
  }

  isFull(){
    if (this.arr.length >= this.max) {
      return `Data Penuh`
    }
  }
}

let bulok = new Stack()

// console.log(bulok.push(1))
// console.log(bulok.push(2))
// console.log(bulok.push(4))
// console.log(bulok.push(5))
// console.log(bulok.push(6))
// console.log(bulok.push(7))
// console.log(bulok.push(8))
// console.log(bulok.push(9))
// console.log(bulok.push(10))
// console.log(bulok.peek());
console.log(bulok.pop());
