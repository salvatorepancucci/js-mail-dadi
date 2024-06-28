// Mail

function checkEmail() {
    // Lista di chi può accedere
    const allowedEmails = ['pippo@example.com', 'pluto@example.com', 'paperino@example.com', 'topolino@example.com'];

    // Chiediamo all'utente di inserire l'email
    const userEmail = prompt('Inserisci la tua email:');

    // Controlliamo se l'email è nella lista
    let isAllowed = false;
    for (let i = 0; i < allowedEmails.length; i++) {
        if (userEmail === allowedEmails[i]) {
            isAllowed = true;
            break;
        }
    }

    // Stampiamo un messaggio appropriato sull'esito del controllo
    if (isAllowed) {
        alert('Accesso consentito!');
    } else {
        alert('Accesso negato! Email non autorizzata.');
    }
}

// Dice

