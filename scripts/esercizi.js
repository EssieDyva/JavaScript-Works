/* //scrivi una funzione che ha in inpu un array di interi e restituisca in output il valore più grande.
let arr = [1, 2, 6, 3, 4, 5];

function maggiore(par) {
    let ret = 0;
    if (par.length > 0) {
        ret = par[0];
    }
    for (let index = 0; index < par.length; index++) {
        if (par[i] > ret) {
            ret = par[i];
            return ret;
        } else {
            return ret;
        }
    }
    console.log(ret);
}

//in input un arry di json, restituire il numero più grande
function maggioreJson(parJson) {
    for (let index = 0; index < parJson.length; index++) {
        //elaboro parJson.mioArr;
        let tmp = maggiore(parJson[i].mioArr);
        if (tmp > ret) {
            ret = tmp;
        }
    } return ret;
}

let studente = {
    nome: 'Pippo',
    voti: [8, 5, 7],
    presenzeGennaio: [3, 6, 8],
    presenzeFebbraio: [7, 8, 10],
    mioJson: { nome: 'pluto' }
};

//studente è un json
//studente.nome è una stringa
//studente.voti è un arraydi interi
//studente.mioJson è un json
//studente.mioJson.nome => 'pluto'

let pippo = 'ciao';

studente.nome == 'Pippo' //vero
studente == 'Pippo' //falso
studente.pippo == pippo //undefined
studente.nome == pippo //falso


function miaFun(par) {
    ret = '';
    for (i = 0; i < par.length; i++) {
        if (par[i].short_name == "Domani") {
            ret = par[i].description;
        } else {
            console.log("Error");
        }
    }
    return ret;
}


function cercaOggi(par, string) /*(json, string) {
    ret = '';
    for (i = 0; i < par.length; i++) {
        if (par[i].short_name == string) {
            ret = par[i].description;
        } else {
            console.log("Error");
        }
    }
    return ret;
}

/* function vocabolario (parola) {
    const letteraSin = parola.split("");
    for (i=0; i< letteraSin.length; i++) {

    }
} */


/* let arrStringhe = ['uno', 'due', 'tre', 'quattro'];
let mioJson = { uno: 1, due: 2, tre: 3 };

function sommaValori(arrStringhe, mioJson) {
    let ret = 0;
    
    // Usa un ciclo for per iterare sull'array arrStringhe
    for (let i = 0; i < arrStringhe.length; i++) {
        let key = arrStringhe[i];

        // Controlla se la chiave è presente in mioJson, se vero la somma
        if (key in mioJson) { 
            ret += mioJson[key]; 
        }
    }
    return ret;
}

sommaValori(arrStringhe, mioJson);
*/


/* let lista = [{ nomeOggetto: 'Acqua', comprato: true }, { nomeOggetto: 'Patate', comprato: true }, { nomeOggetto: 'Carne', comprato: false }, { nomeOggetto: 'Cucchiai', comprato: false }];

function controlloLista(lista) {

    lista.forEach((elemento) => {
        if (elemento.comprato == false) {
            console.log(elemento.nomeOggetto + ' è da comprare');
        }
    });
}

/*OPPURE

let lista1 = [{ nomeOggetto: 'Acqua', comprato: true }, { nomeOggetto: 'Patate', comprato: true }, { nomeOggetto: 'Carne', comprato: false }, { nomeOggetto: 'Cucchiai', comprato: false }];

function controlloLista(lista) {

    for (elemento of lista) {
        if (elemento.comprato == false) {
            console.log(elemento.nomeOggetto + ' è da comprare');
        }
    }
}

 */

/* let json = { chiave1: 'val1', chiave2: 'val2', chiave3: 'val3' };
let chiave = '';

// Ottieni tutte le chiavi dell'oggetto
const keys = Object.keys(json);

//Inserisce le chiavi una alla volta nella variabile chiave
keys.forEach(key => {
    chiave = key;

    //Stampa il nome di ogni chiave con il suo rispettivo valore
    console.log('elemento ' + chiave + ' vale ' + json[chiave]);
});


let arrjson = [{}, { lat: 123, lng: 456, nome: 'pippo' }, { lat: '123', lng: '456' }]

function isInt(param) {
    let ret = [];
    for (i = 0; i < param.length; i++) {
        if (Number.isInteger(param[i].lat) && Number.isInteger(param[i].lng)) {
            ret.push(param[i]);
        }
    }
    return ret;
}


let catalogo = [{}, { codice: 123, titolo: 'Avatar' }, { codice: 345, titolo: 'Batman' }, { titolo: 'Xmen' }];
let visti = ['Avatar', 'Xmen'];

function filmNonVisti(param, visti) {
    let ret = [];
    for (i = 0; i < param.length; i++) {
        if (Number.isInteger(param[i].codice) && !visti.includes(param[i].titolo)) {
            ret.push(param[i]);
        }
    } return ret;
}
 */

/* let mioArr = [3, 5, 7, 9];
function index(arr, num) {
    let ret = arr.indexOf(num);
    return ret;
} */

// Creazione di una nuova Promise
const myPromise = new Promise((resolve, reject) => {
    // Simula un'operazione asincrona con un timeout di 2 secondi
    setTimeout(() => {
        const success = true; // Cambia a false per simulare un errore
        if (success) {
            // Se l'operazione ha successo, chiama resolve con un messaggio
            resolve("Operazione completata con successo!");
        } else {
            // Se l'operazione fallisce, chiama reject con un messaggio di errore
            reject("Si è verificato un errore.");
        }
    }, 5000);
});

// Gestione della Promise
myPromise
    .then((message) => {
        // Questo blocco viene eseguito se la Promise è risolta con successo
        console.log(message); // Stampa il messaggio di successo
    })
    .catch((error) => {
        // Questo blocco viene eseguito se la Promise è rifiutata
        console.error(error); // Stampa il messaggio di errore
    });