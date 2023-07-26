// Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.
/* const firstNumber = parseInt(prompt("Digita il primo numero !"));

const secondNumber = parseInt(prompt("Digita il secondo numero !"));

let max = firstNumber;
let min = secondNumber; */
/* let generatedNumber; */

/* const genNumber = Math.floor(Math.random() * (max - min)) + min; */

/* const genNumber = Math.floor(Math.random() * firstNumber + secondNumber) + 1; */

/* console.log(genNumber); */

// Correzzione

/* ------------------------------------------------------ */

//ESERCIZIO 2

/* Dare la possibilità di inserire due parole. 
Verificare che le due parole abbiano la stessa lunghezza. 
Se hanno la stessa lunghezza, stamparle entrambe altrimenti 
stampare la più lunga delle due.*/

const firstWord = prompt("Inserisci una parola");
const secondWord = prompt("inserisci un'altra parola");

/* let perfectWord; */

if (firstWord.length == secondWord.length) {
  console.log(
    "Le parole hanno la stessa lunghezza: " + firstWord + " " + secondWord
  );
} else if (firstWord.length < secondWord.length) {
  console.log(secondWord);
} else if (firstWord.length > secondWord.length) {
  console.log(firstWord);
}

if (firstWord.length == secondWord.length) {
  console.log(
    "Le parole hanno la stessa lunghezza: " + firstWord + " " + secondWord
  );
} else if (firstWord.length < secondWord.length) {
  console.log(secondWord);
} else {
  console.log(firstWord);
}
