
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1980;

// Berechnung Alter
// let year = 2025;
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// Berechnung Alter Iteration II
//let date = new Date();
//let year = date.getFullYear();

//console.log("Datum: " + date);
//console.log("Jahr: " + year);

//ageJohn = year - birthYearJohn;
//ageMark = year - birthYearMark;

// Ausgabe
//console.log("ageJohn: " + ageJohn);
//console.log("ageMark: " + ageMark);

// Berechnung Alter Iteration III

let year = new Date().getFullYear();
// console.log("Jahr: " + year);
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

//Deklaration / Tests / Aussagenlogik
//let isJohnOlder = true;
let isJohnOlder = (ageJohn > ageMark);  // Test auf ungleichheit
let isJohnEqual = (ageJohn == ageMark); // Test auf Gleichheit

console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnOlder: " + isJohnEqual);
