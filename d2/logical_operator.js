/*
    LOGICAL OPERATOR
    Digunakan untuk membandingkan lebih dari 1 comparison. Mengembalikan Nilai Boolean

    Tipe - tipe:
    1. OR (||)
    2. AND (&&)
    3. NOT (!)
*/

/*
    OR
    - Apabila salah 1 kondisi bernilai TRUE, aka hasil akhir akan TRUE
    - Ingin hasil akhir bernilai FALSE, maka seluruh konidisi harus bernilai FALSE
*/

console.log(1 === 1 || 2 === 2); // TRUE || TRUE hasilnya TRUE
console.log(1 == '1' || '1' === "i"); // TRUE || FALSE hasilnya TRUE
console.log("abcd" === "dcba" || 1 !== 1); // FALSE || FALSE hasilnya FALSE
console.log(111 === 111 || "a" === "A" || 3 !== "3"); // 1 TRUE hasilnya TRUE

/*
    AND
    - Apabila salah satu kondisi bernilai FALSE, maka nilai akhir akan FALSE
    - Ingin hasil akhir bernilai TRUE, maka seluruh kondisi haru bernilai false
*/

console.log(1 == 1 && 3 == 3); // TRUE || TRUE hasilnya TRUE
console.log(1 === 1 && 2 === 2); // FALSE || FALSE hasilnya FALSE

/*
    NOT/NEGASI
    - Membalikan syarat OR / AND
*/
console.log(!(3 === 3) || !(1 == "1")) // TRUE || FALSE, maka hasilnya TRUE
