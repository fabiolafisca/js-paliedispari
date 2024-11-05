/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/



let parola = prompt(
"inserire una parola per verificare se è palindroma"
).toLowerCase;
let correzione = palindrome(parola);
console.log(correzione);
/**
 * 
 * @param {string} parola "parola inserita"
 * @returns {string} "controllo fatto sulla parola"
 */

function palindroma(parola) {
    // convertire reverseParola in un array
    let reverseParola = parola.split("").reverse().join("");
    // la parola invertita è uguale a quella inserita 
    if (parola === reverseParola) {
        return " la parola" + " : " + parola + " è palindroma";
    }

    // la parola invertita non è uguale a quella inserita 
    else return "la parola" + " : " + parola + " non è palindroma";
    
}
