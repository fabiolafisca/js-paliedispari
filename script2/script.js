/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// l'utente scegle pari o dispari
let userChoice = prompt("scegli pari o dispari");
// generare un numero random da 1 a 5
function randComputer() {
    return Math.floor(Math.random() * 5 + 1);
}
let userNumber = parseInt(prompt("inserisci numero da 1 a 5"));
if (userNumber < 1 || userNumber > 5) {
    
} else {
    // numero random per il computer
    let computerNumber = getRandomNumber();

// sommare i due numeri
let sum = userNumber + computerNumber;

// stabiliamo se la somma dei due numeri è pari o dispari
let sumIsEven = sumIsEven;
let result = sumIsEven? "pari" : "dispari";

// dichiariamo chi ha vinto
if (userChoice === result) {
    alert("hai vinto");
} else {
    alert("hai perso");
 }

}