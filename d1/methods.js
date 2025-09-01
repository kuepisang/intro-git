/*
    Method adalah fungsi bawaan JavaScript untuk mempermudah kita dalam memanipulasi data.
*/

// String Methods
const text = 'Hello World';
console.log(text.slice(0, 5)); // index ke-0 sampai index ke-4
console.log(text.slice(0, 6)); // index ke-0 sampai index ke-5

// .length Untuk mengetahui panjang karakter pada string
const name = 'John Doe';
console.log(name.length); // Output : 8

// .top_upper_case(); Untuk mengubah semua karakter pada string menjadi huruf besar
// .top_lower_case(); Untuk mengubah semua karakter pada string menjadi huruf kecil
const greeting = 'abc, DEF';
console.log(greeting.toUpperCase()); //Output : ABC, DEF
console.log(greeting.toLowerCase()); //Output : abc, def

// indexOf(): Untuk mencari index dari sebuah karakter pada string
const description = 'Hello World';
console.log(description.indexOf('W')); //Output : 6
console.log(description.indexOf('o')); //Output : 4 (index pertama dari karakter 'o')
console.log(description.lastIndexOf('o')); // Output : 7 (index terakhir dari karakter 'o')

//replace(): Untuk mengganti karakter pada string dengan karakter lain
const phrase = 'Hello World';
console.log(phrase.replace('World', 'JavaScript')); // Output : Hello JavaScript

//Number Method
// .toString(): Untuk mengubah number menjadi String
const num = 123;
const num_to_string = num.toString(); // '123'
console.log(num);
console.log(num_to_string);
console.log(typeof num); // Output : number
console.log(typeof num_to_string); // Output : string

const point = 100; // 100
const newpoint = point;
 
const string_point = '1000';
// Number: untuk mengubah string menjadi number
console.log(Number(string_point)); //Output : 1000

// parseInt: untuk mengubah string menjadi number (integer)
console.log(parseInt(string_point)); // Output : 1000

// .toFind(): untuk membulatkan angka desimal pada number
const decimalNum = 3.369; 
console.log(decimalNum.toFixed(2)); // Output 3.37
