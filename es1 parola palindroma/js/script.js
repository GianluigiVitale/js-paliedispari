/*
Scopo del gioco: Una funzione per capire se la parola è palindroma


*/

//
var parola = prompt('Inserisci una parola per scoprire se e\' palindroma')  // prompt per chiedere parola
var parolaReversed = '';                                                    // definisco una variabile per la parola al contrario

for (var i = parola.length - 1; i >= 0; i--) {                             // ciclo for che si ripete tante volte quante sono i caratteri di 'parola', ad ogni ciclo prende l'ultimo carattere di 'parola' e lo aggiunge alla stringa 'parolaReversed'
    parolaReversed += parola[i];
}

if (parola == parolaReversed) {                                             // se 'parola' e' uguale a 'parolaReversed' vuol dire che la parola e' palindroma
    console.log('La parola e\' polindroma!');
} else {
    console.log('La parola non e\' polindroma!');
}







//
