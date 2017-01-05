"use strict"

class Stack {

  constructor() {

    this.arr = [];
  }

  push(x){
    
    return this.arr.push(x);
  }

  pop(){

    return this.arr.pop();
  }

  peek(){
    return this.arr;
  }

  isEmpty() {

    if(this.arr.length === 0){

      return "|IS EMPTY|";
    }
    else {
      return this.peek();
    }
  }
}

let my_stack = new Stack();

console.log(my_stack.isEmpty());

my_stack.push("HACKTIV8");
my_stack.push("HACKTIV9");
my_stack.push("HACKTIV10");

console.log(my_stack.isEmpty());

my_stack.pop();

console.log(my_stack.peek());
