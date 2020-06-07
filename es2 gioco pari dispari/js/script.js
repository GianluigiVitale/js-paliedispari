/*

L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto.

*/

//
var pariODispari = prompt('Scrivi \'pari\' o \'dispari\' per scegliere');
var pariODispariLowerCase = pariODispari.toLowerCase();

var numero = Math.round(parseInt(prompt('Inserisci un numero da 1 a 5')));

var pari = false;
var dispari = false;

if (pariODispariLowerCase == 'pari') {
    pari = true;
} else if (pariODispariLowerCase == 'dispari'){
    dispari = true;
}

var randomNumber = getRndInteger(1, 5)

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var sommaRandomNumberAndInput = numero + randomNumber;

if (pari) {
    console.log('pari');
} else {
    console.log('dispari');
}
console.log(numero + ' :numero utente');
console.log(randomNumber + ' :numero pc');
if (sommaRandomNumberAndInput % 2 == 0 && pari === true) {
    console.log('hai vinto');
} else if (sommaRandomNumberAndInput % 2 == 1 && dispari === true) {
    console.log('hai vinto');
} else {
    console.log('vince il computer');
}






//
