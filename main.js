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

/* const firstWord = prompt("Inserisci una parola");
const secondWord = prompt("inserisci un'altra parola"); */

/* let perfectWord; */

/* if (firstWord.length == secondWord.length) {
  console.log(
    "Le parole hanno la stessa lunghezza: " + firstWord + " " + secondWord
  );
} else if (firstWord.length < secondWord.length) {
  console.log(secondWord);
} else if (firstWord.length > secondWord.length) {
  console.log(firstWord);
} */

/* const firstWord = prompt("Inserisci una parola");
const secondWord = prompt("inserisci un'altra parola");

if (firstWord.length == secondWord.length) {
  console.log(
    "Le parole hanno la stessa lunghezza: " + firstWord + ", " + secondWord
  );
} else if (firstWord.length < secondWord.length) {
  console.log(secondWord);
} else {
  console.log(firstWord);
} */

//ESERCIZIO 3

/* Crea un array vuoto e chiedi all'utente 
un numero da inserire nell'array. 
Continua a chiedere i numeri all'utente e
 a inserirli nell'array fino a quando la 
 somma degli elementi è minore di 50.*/

/* Creo un array vuoto */
/* const emptyArray = []; */

/* chiedo all'utente un numero da inserire nell'array */
/* const userNumber = parsInt(prompt("Inserisci qui un numero")); */

/* variabile per contenere la somma*/
/* let sum = 0; */
/* continuo a ripetere il prompt */
/* while (sum < 50) { */
  /* inserire i numeri nell'array fino a quando la somma è minore di 50 */
/*   let userNumber = parseInt(prompt("Inserisci qui un numero"));
  sum += userNumber;

  if (sum < 50) {
    emptyArray.push(userNumber);
  }
}
console.log(sum); */

/* Calcola la media dei numeri inseriti. */
/* const average = sum / emptyArray.length;
console.log(average);
 */

//ESERCIZIO 4

/* Trovare gli errori nel seguente codice */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = "";
for (let i = 0; i < numbers.length - 1; i++;) {
    if (numbers % 2 = 0); {
        evenNumbers.push(i);
    }
}
console.log(evenNumbers);

    // dovrebbe restituire [1,3,5]	