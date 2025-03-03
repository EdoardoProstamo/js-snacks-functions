/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
console.log(userName);
// Dichiara la funzione qui.
function saluta(userName) {
    return `Ciao ${userName}`;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluta(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
