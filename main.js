// Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.
const firstNumber = prompt("Digita il primo numero !");

const secondNumber = prompt("Digita il secondo numero !");

/* let generatedNumber; */

const genNumber = Math.floor(Math.random() * firstNumber + secondNumber);

console.log(genNumber);
