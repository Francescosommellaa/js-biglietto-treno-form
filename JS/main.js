// funzione per la generazione del biglietto
document.getElementById('genera-biglietto').addEventListener('click', 

function() {

    // richiesta nome
    var nome = document.getElementById('nome').value;

    // richiesta età e kilometri da percorrere
    var km = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;

    // calcolo prezzo biglietto
    var prezzo = 0.21 * km;
    var sconto = '';

    // sconto per minorenni e over 65
    if (eta < 18) {
        prezzo -= prezzo * 20 / 100;
        sconto = 'Sconto Minorenni del 20';
    } else if (eta > 65) {
        prezzo -= prezzo * 40 / 100;
        sconto = 'Sconto Over 65 del 40';
    } else {
        sconto = 'Biglietto intero';
    }

    // visualizzazione biglietto
    document.getElementById('nome-passeggero').innerHTML = 'Ciao ' + nome;
    document.getElementById('prezzo-biglietto').innerHTML = 'il prezzo del tuo biglietto è di: ' +  prezzo.toFixed(2) + ' €';
    document.getElementById('sconto-applicato').innerHTML = 'questo biglietto è applicato al:  ' + sconto;
});
