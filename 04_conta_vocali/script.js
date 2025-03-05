/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(input) {

    const vowels = 'aeiouAEIOU';

    //let count = 0
    let result = [];

    for (let i=0; i<input.length; i++) {
        const currentLetter = input[i];

        if (vowels.indexOf(currentLetter) >= 0) {
            // count++

            result.push(currentLetter);
        }
    }
    console.log(result);
    return result.length;

}
// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso se si passa 'javascript': 3 (a, a, i)