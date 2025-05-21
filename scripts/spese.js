//esercizio 2
let comprare = ["pane", "vino", "insalata", "olio", "carne"];
let comprati = ["pane", "olio", "vino", "insalata"];

function es2(comprare, comprati) {
    ret = [];
    for (let i = 0; i < comprare.length; i++) {
        if (!comprati.includes(comprare[i])) {
            ret.push(comprare[i]);
        }
    }
    return ret;
}

//esercizio 3
let comprare3 = ["pane", "vino", "insalata", "olio", "carne"];
let comprati3 = { pane: true, vino: false };

function es3(comprare, comprati) {
    let ret = [];

    for (let i = 0; i < comprare.length; i++) {
        let item = comprare[i];     
        // Controlla se l'elemento è presente in comprati3 (json) e se non è stato comprato
        if (comprati[item] === false || comprati[item] === undefined) {
            ret.push(item);
        }
    }
    return ret;
}

//esercizio 4
let comprare4 = ["pane", "vino", "insalata", "olio", "carne"];
let comprati4 = { pane: 10, vino: 15, birra:20}; //dove il valore è il costo in euro

function es4(comprare, comprati) {
    let ret = 0;

    // Iteriamo sulla lista dei prodotti da comprare
    for (let i = 0; i < comprare.length; i++) {
        let item = comprare[i];       
        // Controlliamo se il prodotto è stato acquistato e se è presente in comprati
        if (comprati.hasOwnProperty(item)) {
            ret += comprati[item];
        }
    }
    return ret;
}