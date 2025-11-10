// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 25;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
 console.log("ageJohn: " + ageJohn);
 console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");


/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)


// if(true)             // Wahrheitswerte
// if(false)            
// if(isJohnOlder)      // Verweis
// if(ageJohn > ageMark)   // direkter Test
// {
//    console.log("John is älter."); 
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if(true)
// if(false)
// if(isJohnolder)
if (ageJohn > ageMark) {
    console.log("John is älter.");   
} else {
    console.log("John is jünger.");
}    
