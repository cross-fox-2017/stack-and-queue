"use strict"

class Stack {
  // constructor selalu dipakai untuk mendfinisikan attribut
  // constructor tempat menyimpan variabel
  constructor() {
    // attribut arr, bisa dipakai di dalam class
    this.arr = [];
  }

  // method push, berguna untuk masukkan isi ke dalam arr
  push(isi) {
    return this.arr.push(isi);
  }

  // method push, berguna untuk menghapus isi paling terakhir
  pop() {
    return this.arr.pop()
  }

  // method peek, untuk menampilkan semua data yang ada di dalam arr
  peek() {
    return this.arr;
  }

  // isEmpty, untuk mengecek apakan arr sudah memiliki isi atau belum
  isEmpty() {
    if (this.arr.length == 0) {
      return "array kosong";
    } else {
      return "array sudah terisi";
    }
  }
}

// inisialisasi penampung class
var tampung = new Stack();
tampung.push("endy");
tampung.push("irsan");
tampung.push("fadly");
tampung.push("irwin");
tampung.push("ida");
console.log(tampung.peek());    // [ 'endy', 'irsan', 'fadly', 'irwin', 'ida' ]
tampung.pop();
console.log(tampung.peek());    // [ 'endy', 'irsan', 'fadly', 'irwin' ]
console.log(tampung.isEmpty()); // array sudah terisi

console.log(tampung.arr[2]);
