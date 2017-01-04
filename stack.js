"use strict"

class Stack {
  constructor() {
    this.max_size = 15;
    this.size = 0
    this.data = []
  }
//tambah data
  push(x) {
    if (this.max_size >= this.size){
      this.size += 1
      return this.data.push(x);
    } else {
      return "Stack is Already full"
    }
  }
//ngilangin data
  pop() {
    this.size -= 1
    return this.data.pop();
  }
//cek data paling atas
  peek() {
    return this.data[this.data.length-1]
  }
//cek kosong atau isi
  isEmpty() {
    if (this.size == 0){
      return "Yes, This Stack is Empty"
    } else {
      return `No, This Stack have ${this.size} in it`
    }
  }
//cek jumlah isi
  size() {
    return this.size
  }
//cek data pertama
  first() {
    return this.data[0]
  }
//cek apakah max_size = size
  isFull() {
    if (this.size == this.max_size){
      return "This Stack is Full"
    } else {
      return `This Stack still have ${this.max_size - this.size} space`
    }
  }
}

let my_stack = new Stack()
// console.log(my_stack.push("x"));
// console.log(my_stack.peek());
// console.log(my_stack.data);

console.log(`The Stack is empty? ${my_stack.isEmpty()}`);

my_stack.push("Javascript")
my_stack.push("is just so")
my_stack.push("cool")

my_stack.push(15)

console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());

console.log(`The Stack is empty? ${my_stack.isEmpty()}`);

console.log(my_stack.pop());
