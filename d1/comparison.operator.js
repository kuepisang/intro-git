/*
    COMPARISON OPERATOR (OPERATOR PEMBANDING)
    UNtuk membandingkan 2 buah nilai, yang menghasilkan nilai boolean berupa true/false

    Jenis >, >=, <, <=, ==, ===
*/

console.log(10 > 100); // false
console.log(10 >= 10); // true
console.log(10 >= 11); // false
console.log(100 > 10); // true

// == : Comparasi nilai saja
console.log(10 == 10); // true
console.log(10 == '10'); // true

// === : Comparasi nilai dan tipe data
console.log(10 === '10'); //false

// != mirip seperti ==
console.log(10 != 10); // false
console.log(10 != '10') //false

//!== mirip seperti ===
console.log(10 !== '10') // true