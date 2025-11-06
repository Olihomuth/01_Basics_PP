// Zeilenkommentar
/**
 * 
 * 
 * Block-Kommentar
 * 
 * 
 */
/******* Variablen 01 *********/

//console.log("Hi!");
//console.log("Hi!");
//console.log(Hi);

/* Deklaration + Wertzuweisung I */

//let firstName; // Deklaration (Definition)

//console.log(firstName); // Ausgabe
//firstName = "Max"; // Wertzuweisung / assignment
//console.log("Inhalt: " + firstName); // Ausgabe
//let familyName = "Mütze"; // Deklartation & Wertzuweisung
//console.log("Hi, ich bin " + firstName + " " + familyName + "!");

/*  
    Wertzuweisung II + Datentypen 
    JS ist ein untypisierte Sprache!
*/

//let test;

/* undefined */
//console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
//console.log("Inhalt: " + test); // Ausgabe Inhalt
//console.log("----------------");

//test = "hi"; // string
//console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
//console.log("Inhalt: " + test); // Ausgabe Inhalt
//console.log("----------------");

//test = 2; // number
//console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
//console.log("Inhalt: " + test); // Ausgabe Inhalt
//console.log("----------------");

//test = true; // boolean
//console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
//console.log("Inhalt: " + test); // Ausgabe Inhalt
//console.log("----------------");

/* Variablen vs. Konstanten in JS */

// Variable
let Test; // Variable : Deklaration
test = "hi"; // Wertzuweisung (Initsialisierung)
test = "hello"; // überschreiben
console.log("inhalt: " + test); // Ausgabe

// Konstante
const test2 = "Hi!"; // Deklaration + Wertzuwweisung gemeinsam
test2 ="hello"; // Laufzeitfehler
console.log("Inhalt: " +test2); // Ausgabe 