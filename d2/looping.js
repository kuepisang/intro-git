/*
    LOOPING
    Digunakan untuk pengulangan. 
    
    Tipe tipe looping :
    1. While
    2. Do-While
    3. For Loop
*/

/* 
    WHILE

    Syntax :
    while(condition){
        block of code
    }
*/

let start_looping = 1; // 1 -> 2 -> 3 -> 4 -> 5
while(start_looping <= 5){
    console.log('loop');

    start_looping++;
}

/*
    DO - WHILE

    Syntax :
    do{
        block of code
    }while(condition);
*/

let j = 1;

do{
    console.log('Web Development');
    j++;
}while(j <= 5);

/*
    FOR LOOP
    Looping yang menyerupai WHILE

    Syntax :
    
    for(startCondition; condition; exitWay){
        block of code
    }
*/

for(let i = 1; i<=5; i++){
    console.log("Purwadhika School");
}
