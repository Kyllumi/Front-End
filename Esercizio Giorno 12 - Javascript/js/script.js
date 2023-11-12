// Variabili per creazione tabellone
const tabellone = document.querySelector("div#tabellone");
const extractBtn = document.querySelector("button#btn");
let numeriCasualiArray = [];
let numeriCasualiTabellineArray = [];

// Variabili per utente
const tabelline = document.querySelector("div.tabelline");
let formInput = document.querySelector("form input#numeroTabellina");
const buyTicketBtn = document.querySelector("form button");

// Generare il tabellone
creaTabellone();
function creaTabellone() {
  for (let i = 1; i < 77; i++) {
    let cella = document.createElement("div");
    cella.innerText = [i];
    tabellone.appendChild(cella);
  }
}

function numeriCasuali() {
  // Numero casuale finchè non è unico
  let numeriRandom;
  do {
    numeriRandom = Math.ceil(Math.random() * 76);
  } while (
    numeriCasualiArray.includes(numeriRandom) &&
    numeriCasualiArray.length < 76
  );
  numeriCasualiArray.push(numeriRandom);
}

function numeriEstratti() {
  // Colorare le celle per ogni numero casuale uscito
  for (let i = 0; i < tabellone.children.length; i++) {
    let cella = tabellone.children[i];
    let numeroCella = parseInt(cella.innerText);

    if (numeriCasualiArray.includes(numeroCella)) {
      cella.classList.add("estratto");
    }
  }
}

// Evento al click del pulsante
extractBtn.addEventListener("click", () => {
  numeriCasuali();
  numeriEstratti();
});



// Evento per l'utente
buyTicketBtn.addEventListener("click", () => {
  let numeroTabelline = formInput.value;

  function creaTabellina() {
    // Creo la tabellina
    // Creare un nuovo elemento div per la tabellina
    let nuovaTabellina = document.createElement("div");
    nuovaTabellina.classList.add("tabellina");
    tabelline.appendChild(nuovaTabellina);

    for (let i = 0; i < 24; i++) {
      let numeroCasualeTabellina;

      // Numeri casuali unici per la tabellina
      do {
        numeroCasualeTabellina = Math.ceil(Math.random() * 76);
      } while (numeriCasualiTabellineArray.includes(numeroCasualeTabellina));

      // Aggiungi il numero casuale alla tabellina
      numeriCasualiTabellineArray.push(numeroCasualeTabellina);

      let cellaTabellina = document.createElement("div");
      cellaTabellina.innerText = numeroCasualeTabellina;
      nuovaTabellina.appendChild(cellaTabellina);
    }

    // Mostra la tabellina
    tabelline.style.display = "block";
  }

  for (let i = 0; i < numeroTabelline; i++) {
    creaTabellina();

  }


});
