// Funzione chiamata quando si clicca su "TEST API"
function testApi() {
    let xhr = new XMLHttpRequest();

    // URL della richiesta API per ottenere i dati della Germania
    const requestUrl = "https://restcountries.com/v3.1/name/deutschland";

    xhr.open("GET", requestUrl, true);
    xhr.onload = function () {
        // Mostra la risposta della richiesta nella console
        console.log(xhr.responseText);
        // Mostra la risposta nel div con id "result"
        document.getElementById("result").textContent = xhr.responseText;

        // Effettua il parsing della risposta JSON
        let data = JSON.parse(xhr.responseText);
        let confini = [];
        // Inserisce i confini nell'array confini
        if (data[0] && data[0].borders) {
            confini = data[0].borders; // (contiene solo i confini)
        } else {
            console.error("Borders data is not available in the API response.");
        }
        addOption(confini); // Aggiunge le opzioni alla select
    };
    xhr.send();
}

// Funzione che aggiunge le opzioni alla select in base all'array confini
function addOption(confini) {
    let select = document.getElementById("mioSelect");
    select.innerHTML = ""; // Svuota la select

    for (let i = 0; i < confini.length; i++) {
        let option = document.createElement("option");
        option.value = confini[i];
        option.innerHTML = confini[i];
        select.add(option);
    }
}