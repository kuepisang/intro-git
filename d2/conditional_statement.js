/*
    STATEMENT CONDITIONAL
    Pengkondisian, digunakan untuk menentukan kode mana yang akan di eksekusi

    Tipe tipe :
    1. If
    2. If Else
    3. If - Else If - Else If - ... - Else

*/

// IF. if(condition){block of code}
if(10>5){
    console.log('OK');
}

let nilai = 85;
if(nilai < 90){
    console.log('Nilai Tidak Mencukupi!');
}

/*
IF - ELSE

    if(condition){
        block of code 1
    }else{
        block of code 1
    }
*/

let nilai_exam = 70;
if(nilai_exam > 70){
    console.log('Lulus');
}else{
    console.log('Tidak Lulus');
}

/*
IF - ELSE IF - ELSE IF - ... - ELSE

if(condition){
    block of code 1
}else{
    block of code 2   
}...

}else {
    block of code n
}
*/

let fruit = "semangka";

if(fruit === "semangka"){
    console.log("Ini Semangka!");    
}else if(fruit !== 'Pisang'){
    console.log("Ini Bukan Pisang");
}else{
    console.log("ini Bukan Buah");
}