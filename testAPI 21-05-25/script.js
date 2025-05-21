// Array per memorizzare i dati ricevuti dall'API
let data = [];
// Array per memorizzare solo i confini dei paesi
let confini = []; // (contiene solo i confini)

// Funzione chiamata quando si clicca su "TEST API"
function testApi() {
    let xhr = new XMLHttpRequest();

    // URL della richiesta API per ottenere i dati della Germania
    const requestUrl = "https://restcountries.com/v3.1/name/deutschland";
    xhr.open("GET", requestUrl, true);
    xhr.onload = function () {
        // Mostra la risposta della richiesta nella console
        console.log(xhr.responseText);
        // Effettua il parsing della risposta JSON
        data = JSON.parse(xhr.responseText);
        // Mostra la risposta nel div con id "result"
        document.getElementById("result").textContent = xhr.responseText;
        // Inserisce i confini nell'array confini
        if (data[0] && data[0].borders) {
            confini = data[0].borders; // (contiene solo i confini)
        } else {
            confini = []; // Se non ci sono confini, array vuoto
            console.error("Borders data is not available in the API response.");
        }
        addOption(); // Aggiunge le opzioni alla select
    };
    xhr.send();
}

// data = xhr.responseText; (contiene tutta l'API in formato JSON)
// confini = data[0].borders; (contiene solo i confini)

// Funzione che aggiunge le opzioni alla select in base all'array confini
function addOption() {
    let select = document.getElementById("mioSelect");

    for (let i = 0; i < confini.length; i++) {
        let option = document.createElement("option");
        option.value = confini[i];
        option.innerHTML = confini[i];
        select.appendChild(option);
    }
}