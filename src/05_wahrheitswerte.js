
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 1990;

// Berechnung Alter
// let year = 2025;
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// Berechnung Alter Iteration II
let date = new Date();
let year = date.getFullYear();

console.log("Datum: " + date);
console.log("Jahr: " + year);

ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

