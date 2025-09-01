/*  exercise :
    1. write a code to find area of rectangle 

    hint : 
    panjang = 5
    lebar = 3

    luas? L=P x L
    L=5 x 3
    L= 15
*/


const panjang = 5;
const lebar = 3;
const luas = panjang * lebar;
console.log(luas);

/*  2. mencari keliling persegi panjang 

    hint : 
    length = 10
    width = 15
    perimeter= 2(length + width) 
*/

const length = 10;
const width = 15;
const perimeter = 2 * (length + width);
console.log(perimeter);

/*
    3. Write a code to find diameter, circumference and area of a circle
    
    Hint :
    Radius          = 5
    Diameter        = 10
    Circumference   = 3.14159
    Area            = 78.539

    Find : diameter, circumference, and area of a circle
    
    Solution :
    Area            = PI * (radius * radius)
    diameter        = 2 * radius
    circumference   = 2 * PI * radius / 2 * diameter
*/

let radius          = 5;

let area            = Math.PI * Math.pow(radius, 2);
let diameter        = 2 * radius;
let circumference   = 2 * Math.PI * radius;

console.log(area);
console.log(diameter);
console.log(circumference);

/*
4. Write a code to find angles of triangle if two angles are given

    Hint :
    a       = 80
    b       = 65
    output  = 35

    solution :
    c angle = 180 - (a + b)
*/

let angleA = 80;
let angleB = 65;

let angleC = 180 - (80 + 65);

console.log(angleC);


/*
    5. Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 months : 30 days)
    hint : 
    400 days = 1 year, 1 month, 5 days
    366 days = 1 year, 0 month, 1 days

    solution :
    year = math.floor (400 days / 365 days)  = 1 (remaining 35 days)
    month = math.floor (35 days / 30 days)   = 1 (remaining 5 days)
    day = 5 days

*/

let days_in_year    = 365;
let days_in_month   = 30;
let days_total      = 400;

// find how many year from 400 days
const year          = Math.floor (days_total / days_in_year);
let remaining_days  = days_total % days_in_year;

const month         = Math.floor(remaining_days / days_in_month);
const day           = remaining_days - days_in_month;
console.log(days_total, "days =", year, "year", month, "month", day, "days");

// Find how many year from 366 days



/* 
    6. write a code to get difference between dates in days
    hint: 
    date1   = 2022-01-20
    date2   = 2022-01-22
    output  = 2

    solution :
    
*/