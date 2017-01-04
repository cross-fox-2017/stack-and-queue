"use strict"

class Queue {
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
      return "Queue is Already full"
    }
  }
//ngilangin data
  pop() {
    this.size -= 1
    return this.data.unshift();
  }
//cek data paling atas / terakhir masuk
  peek() {
    return this.data[this.data.length-1]
  }
//cek kosong atau isi
  isEmpty() {
    if (this.size == 0){
      return "Yes, This Queue is Empty"
    } else {
      return `No, This Queue have ${this.size} thing(s) in it`
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
      return "This Queue is Full"
    } else {
      return `This Queue still have ${this.max_size - this.size} space`
    }
  }
}

let my_queue = new Queue()
// console.log(my_queue.push("x"));
// console.log(my_queue.peek());
// console.log(my_queue.data);

console.log(`The Queue is empty? ${my_queue.isEmpty()}`);

my_queue.push("Javascript")
my_queue.push("is just so")
my_queue.push("cool")

my_queue.push(15)

console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.peek());
console.log(my_queue.pop());
console.log(`The Queue is empty? ${my_queue.isEmpty()}`);
console.log(my_queue.pop());


console.log(my_queue.pop());
