let i = 0;

document.querySelector('#bottone1').addEventListener('click', () => {
    let username = document.querySelector('#form1 input');

    let p = document.createElement('p');
    p.innerText = username.value;
    document.querySelector('#nome').appendChild(p);

    localStorage.setItem(`Username${i}`, username.value)
    i++;

    localStorage.removeItem('username');

    username.value = '';
});


document.querySelector('#bottone2').addEventListener('click', () => {
    document.querySelector('#nome p:last-child').remove();

    localStorage.removeItem(`Username${i - 1}`);
    i--;

    if (`Username${i}` === 'Username0') {
        localStorage.clear();
    }
});


// ----------------------------------------------------------------------------


function updateCounter() {
    // Recupera il valore corrente dal sessionStorage
    let currentValue = sessionStorage.getItem('counterValue');

    // Se il valore non esiste, imposta il valore iniziale a 0
    let newValue = (currentValue ? parseInt(currentValue, 10) : 0) + 1;

    // Aggiorna il valore nel sessionStorage
    sessionStorage.setItem('counterValue', newValue);

    // Aggiorna il display del contatore
    document.getElementById('counter').textContent = 'Tempo trascorso: ' + newValue + ' secondi';

    // Richiama la funzione ogni secondo
}

// Avvia l'aggiornamento del contatore
setInterval(updateCounter, 1000);
