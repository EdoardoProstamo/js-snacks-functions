/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getFirstChar(elements) {
    const result = []; //salvo un array vuoto [] nella variabile result
    // const test = 1; //salvo un numero nella variabile test
    for (let i=0; i<elements.lenght; i++) {
        const element = elements[i]; //Anna
        //const firstLetter = elements[0];
        const firstLetter = element.charAt(0); //A
        //console.log(firstLetter);
        result.push(firstLetter);
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getFirstChar(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]