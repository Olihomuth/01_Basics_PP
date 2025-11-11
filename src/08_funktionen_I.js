
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsaufruf | call
// test();

// Funktionsrumpf | (callee)
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Kevin!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
// ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS ...
    let firstName = "Kevin";
    console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamen2("Kevin"); // Argument --> Daten für Parameter
// ausgabeNamen2("Klaus");
// ausgabeNamen2("Ibrahim");

function ausgabeNamen2(firstName) {  // Parameter
    console.log("Hallo, " + firstName + "!");
}

