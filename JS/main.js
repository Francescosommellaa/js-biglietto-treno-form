// funzione per la generazione del biglietto
document.getElementById('genera-biglietto').addEventListener('click', 

function() {

    // richiesta nome
    var nome = document.getElementById('nome').value;

    console.log(nome);

    // richiesta età e kilometri da percorrere
    var km = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;

    console.log(km + eta);

    // calcolo prezzo biglietto
    var prezzo = 0.21 * km;
    var sconto = '';

    console.log(prezzo);

    // sconto per minorenni e over 65
    if (eta < 18) {
        prezzo -= prezzo * 20 / 100;
        sconto = 'Sconto Minorenni del 20%';
    } else if (eta > 65) {
        prezzo -= prezzo * 40 / 100;
        sconto = 'Sconto Over 65 del 40%';
    } else {
        sconto = 'Prezzo intero';
    }

    console.log(prezzo + sconto);

    // visualizzazione biglietto
    document.getElementById('nome-passeggero').innerHTML = 'Ciao ' + nome;
    document.getElementById('prezzo-biglietto').innerHTML = 'il prezzo del tuo biglietto è di: ' +  prezzo.toFixed(2) + ' €';
    document.getElementById('sconto-applicato').innerHTML = 'Questo biglietto è applicato al:  ' + sconto;
});



// funzione per l'acquisto del biglietto
document.getElementById('acquista-biglietto').addEventListener('click',

function() {
    // calcolo codice biglietto
    var codiceBiglietto = Math.floor(Math.random() * 100000);
    
    console.log(codiceBiglietto);

    // visualizzazione codice biglietto
    document.getElementById('biglietto-acquistato').innerHTML = 'Complimenti il tuo biglietto è stato acquistato.';
    document.getElementById('codice-biglietto').innerHTML = 'Il tuo codice biglietto corrispoinde a: ' + codiceBiglietto;


});