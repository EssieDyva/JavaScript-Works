/**Abbiamo in input un array di numeri interi e una chiave
 * Esempio: [1, 2, 3, 4, 5, 7, 9], chiave = 7
 * Dobbiamo restituire in output un array di json contenete
 * i numeri che sommati restituiscono il valore della chiave
 * Esempio: [{a: 2, b: 5}, {a: 3, b: 4}]
 */

let mioArray = [3, 0, 5, 11, 7, 4];
const chiave = 7;

function sommaCoppie(array, chiave) {
    let risultato = []; // Output

    // Ciclo due volte l'array per trovare le coppie
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {

            // Controllo se la somma dei due elementi è uguale alla chiave 
            // e che non siano lo stesso elemento
            // (i.e., non sommo un elemento con se stesso)
            if (array[i] + array[j] === chiave) {
                risultato.push({ a: array[i], b: array[j] });
            }
        }
    }
    return risultato;
}

function sommaCoppieMigliorata(array, chiave) {
    const visti = new Set(); // Tiene traccia dei numeri già incontrati
    const risultato = new Set(); // Per evitare coppie duplicate

    for (let num of array) {
        let complemento = chiave - num; // Calcola il complemento necessario per raggiungere la chiave

        if (visti.has(complemento)) {
            // Se il complemento è già stato visto, abbiamo trovato una coppia
            // Ordina la coppia per evitare duplicati (es. {3,5} uguale a {5,3})
            let coppia = [Math.min(num, complemento), Math.max(num, complemento)];
            risultato.add(JSON.stringify(coppia)); // Usa stringa per poter usare Set ed evitare duplicati
        }
        visti.add(num); // Aggiungi il numero corrente all'insieme dei visti
    }

    // Converti le stringhe JSON in oggetti con a/b come nel tuo esempio
    return Array.from(risultato).map(str => {
        const [a, b] = JSON.parse(str); // Estrai i valori dalla stringa JSON
        return { a, b }; // Restituisci l'oggetto nel formato richiesto
    });
}