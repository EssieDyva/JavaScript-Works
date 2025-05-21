//var, let e const!
/* let b = 20;
let c = 30;
let d = b;

function miaFun() {
    console.log('variabile b: ',b);
    console.log('variabile c: ',c);
    b = c;
    c = d;
    console.log('variabile b: ',b);
    console.log('variabile c: ',c);  
}
miaFun();

function sommaConParametri(valore1, valore2) {
    return valore1 + valore2;
}

console.log(sommaConParametri(10,10));

const somma = sommaConParametri(30,30);
console.log(somma);

 */

let numero = 10;
let stringa = 'sergio';
let booleano = true;
let indefinito = undefined;
let nullo = null;
let oggetto = {
    nome: 'Mario',
    cognome: 'Rossi',
    mioArr: [0,1,2]
};
//console.log(oggetto.nome); //stampa Mario

let collezioni = [1,2,3,4,5,6,7];
for (let index = 0; index < collezioni.length; index++) {
    console.log(collezione[index]);
}

for(const elemento of collezioni) {
    console.log(elemento);
}

//forEach 
//performa un'azione specifica per ogni elemento di un array
collezioni.forEach((elemento) => console.log(elemento *= 2));

//map 
//restituisce un nuovo array sulla base del risultato di una funzione callback. 
//Copia per referenza quando la nuova variabile punta nello stesso spazio di un'altra memoria
//Sottostando ad una condizione restituisce tutti gli elementi dell'array anche se undefined
const newCollezione = collezioni.map((numero) => {
    if (numero < 5) {
        return numero;
    }
});
console.log(newCollezione); 

//filter 
//simile a .map ma gli elementi vengono restituiti solo se hanno valore, quindi non vengono restituiti gli undefined
const newCollezione2 = collezioni.filter((numero) => numero < 5);
console.log(newCollezione2);

//find 
//simile a .filter ma restituisce solo il primo elemento che soddisfa la condizione
const newCollezione3 = collezioni.find((numero) => numero < 5);
console.log(newCollezione3);


const arrayDiNumeri = [10,20,30];
console.log(arrayDiNumeri);
//push
//aggiunge un nuovo elemento ad un array
arrayDiNumeri.push(40);
console.log(arrayDiNumeri);

//pop
//rimuove un elemento da un array
//senza specificazioni toglie l'ultima posizione
arrayDiNumeri.pop();
console.log(arrayDiNumeri);

//shift
//rimuove il primo elemento di un array
arrayDiNumeri.shift();
console.log(arrayDiNumeri)

//unshift
//aggiunge un nuovo elemento all'inizio di un array
arrayDiNumeri.unshift();
console.log(arrayDiNumeri);

//splice
//rimuove un elemento dall'array e, se specificato, lo rimpiazza
arrayDiNumeri.splice(0,1);
console.log(arrayDiNumeri);

/**
 * Crea una nuova istanza di XMLHttpRequest.
 * Questo oggetto viene utilizzato per inviare richieste HTTP e ricevere risposte da un server.
 * 
 * Esempi di utilizzo:
 * - Invio di una richiesta GET per recuperare dati da un'API.
 * - Invio di una richiesta POST per inviare dati a un server.
 * 
 * @type {XMLHttpRequest}
 */
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onload = function () {
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.log(xhr.responseText);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send();