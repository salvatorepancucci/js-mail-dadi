// Esercizio Mail
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitiamo il submit del form

    // Lista di chi può accedere
    const allowedEmails = ['pippo@example.com', 'pluto@example.com', 'paperino@example.com'];

    // Otteniamo l'email inserita dall'utente
    const userEmail = document.getElementById('inputEmail').value.trim().toLowerCase();

    // Controlliamo se l'email è nella lista
    let isAllowed = false;
    for (let i = 0; i < allowedEmails.length; i++) {
        if (userEmail === allowedEmails[i]) {
            isAllowed = true;
            break;
        }
    }

    // Prepariamo il messaggio da mostrare
    const emailResultDiv = document.getElementById('emailResult');
    if (isAllowed) {
        emailResultDiv.innerHTML = `<div class="alert alert-success" role="alert">Accesso consentito!</div>`;
    } else {
        emailResultDiv.innerHTML = `<div class="alert alert-danger" role="alert">Accesso negato! Email non autorizzata.</div>`;
    }
});

// Esercizio Gioco dei dadi
document.getElementById('giocaDadiBtn').addEventListener('click', function() {
    // Generiamo un numero casuale da 1 a 6 per il giocatore
    const giocatore = Math.floor(Math.random() * 6) + 1;

     // Generiamo un numero casuale da 1 a 6 per il computer
    const computer = Math.floor(Math.random() * 6) + 1;

    // Determiniamo il vincitore
    let risultato;
    if (giocatore > computer) {
        risultato = 'Il giocatore ha vinto!';
    } else if (computer > giocatore) {
        risultato = 'Il computer ha vinto!';
    } else {
        risultato = 'Pareggio!';
    }

    // Stampiamo il risultato
    const dadiResultDiv = document.getElementById('dadiResult');
    dadiResultDiv.innerHTML = `<div class="alert alert-info" role="alert">
                                    Giocatore: ${giocatore}<br>
                                    Computer: ${computer}<br><br>
                                    ${risultato}
                                </div>`;
});