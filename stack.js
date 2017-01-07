"use strict"

class Stack {
  constructor() {
    this.arr = []
  }

  push(x) {
    return this.arr.push(x);
  }

  pop() {
    return this.arr.pop()
  }

  peek() {
    return this.arr

  }

  isEmpty() {
    if (this.arr.length == 0) {
      return 'Yes it\'s Empty';
    } else {
        return this.peek()
    }
  }
}

let my_stack = new Stack()

console.log(`The stack is empty? ${my_stack.isEmpty()}`)

my_stack.push(15);
my_stack.push('hacktiv8');
my_stack.push('crossfox');
my_stack.push('JavaScript')
my_stack.push('FullStack Developer')

console.log(my_stack.isEmpty());

my_stack.pop();

console.log(my_stack.peek());
