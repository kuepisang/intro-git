console.log('Hello World');

/*variable adalah tempat untuk menyimpan data.

    Syntax:
    var nama_variable = nilai variable;
*/

var fullname = 'Andri';

//menampilkan nama 'Andri' sebanyak 10x menggunakan console log.

console.log(fullname);
console.log(fullname);
console.log(fullname);
console.log(fullname);
console.log(fullname);
console.log(fullname);
console.log(fullname);
console.log(fullname);
console.log(fullname);
console.log(fullname);

/*
    VARIABLE NAMING RULES:
    1. Tidak boleh diawali dengan angka (harus huruf atau _ atau $).
    2. Tidak boleh ada spasi (gunakan camelCase, snake_case, PascalCase).
    3. Penamaan harus deskriptif.
    4. Tidak boleh menggunakan kata yang sudah ada di JavaScript (reverse words).
*/

// var #fullname = 'Defryan'; // Salah 
// var 1fullname = 'Defryan'; // Salah
// var fullname = 'Defryan'; // Benar
// var $fullname = 'Defryan'; // Benar
// var _fullname = 'Defryan'; // Benar

//var campusPurwadhika = 'Cabang BSD'; // camelCase
//var campus_purwadhika = 'Cabang BSD'; // snake_case
//var CampusPurwadhika = 'Cabang BSD'; // PascalCase

//var stadium = 'Bung Karno'; 
//var function = ''; // salah karna menyebutkan comman function JavaScript

//selain var dalam penyebutan variable di JavaScript jga bisa menggunakan let & const
let discount = 100;
const point = 1000;

/* 
    var
    - Dapat mendeklarasikan variable dengan nama yang sama
    - Value nya dapat diubah/diupdate.

    let
    - Tidak dapat mendeklarasikan variable dengan nama yang sama.
    - Value nya dapat diubah/diupdate.

    const
    - Tidak dapat mendeklarasikan variable dengan nama yang sama.
    - Value nya tetap (tidak bisa diubah/diupdate).

*/

var student = 'Nata';
var student = 'Andri';
console.log(student);

//let fruit = 'Semangka';
//let fruit = 'Melon';

//const = 'Ayam Goreng';
//const = 'Ayam';

let student_name = 'M Defryan';
student_name = 'Ryan';
console.log(student_name);