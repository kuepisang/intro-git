/*
    1.Write a code to check whether the number is odd or even
    Example: 25 → odd number, 2 → even number
*/

let number1  = 25;
let number2  = 2;

console.log(number1 + " " + (number1 % 2 === 0 ? "Adalah Bilangan Genap" : "Adalah Bilangan Ganjil"));
console.log(number2 + " " + (number2 % 2 === 0 ? "Adalah Bilangan Genap" : "Adalah Bilangan Ganjil"));


/*
    2. Write a code to check whether the number is prime number or not
        Example: 7 → 7 is a prime number
        Example: 6 → 6 is not a prime number
*/

let bilangan = 9;
let isPrime  = true;

if(bilangan <= 1){
    console.log("Masukkan angka lain");
}else{
 for(let i = 2; i < bilangan; i++){
        if(bilangan % i === 0){
            console.log("Bukan bilangan prima");
            break;
        }else{
            console.log("Bilangan prima");
            break;
        }
    }
}



/*
    3. Write a code to find the sum of the numbers 1 to N
        Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
        Example: 3 → 1 + 2 + 3 = 6
*/


let p = 5;
let q = 3;

let N 

for(i = 1; i < N; i++){
    console.log(N)
} 


/*
    4.Write a code to find factorial of a number
        Example: 4! → 4 x 3 x 2 x 1 = 24
        Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/
/*
let n       = 4;
let sum     = 0;
let message = `${n} => `;

for(i = 1; i <= n; i++){}
sum += 1;
message += i === n ? `${i} = ${sum} : ${i} +`


/*
    Write a code to print the first N fibonacci numbers
    Example: 15 → 610
*/

let x = 15;
let a = 1, b = 1;

console.log("Angka Fibonacci:"); 
console.log(a);
console.log(b);

for (let i = 2; i < x; i++) {
  let next = a + b;
  console.log(next);
  a = b;
  b = next;
}
