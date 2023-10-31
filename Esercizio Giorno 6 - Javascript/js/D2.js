/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 5;
let num2 = 10;

if (num2 > num1) {
  console.log("Esatto! " + num2 + " è più grande di " + num1);
} else {
  console.log("Sbagliato" + num1 + "è più grande di " + num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numFornito1 = 7;
if (parseInt(numFornito1) === 5) {
  console.log("equal");
} else {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numFornito2 = 30;
if (numFornito2 % 5 === 0) {
  console.log("Il numero è divisibile per 5");
} else if (numFornito2 % 0 === 5) {
  console.log("Il numero è divisibile per 5");
} else {
  console.log("Il numero non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 4;
let num4 = 12;
let sum1 = num3 + num4;
let diff1 = num4 + num3;

if (num3 === 8) {
  console.log("Il numero è pari a 8");
} else if (num4 === 8) {
  console.log("Il numero è pari a 8");
} else if (sum1 | diff1 === 8) {
  console.log("La loro somma o la differenza è pari a 8");
};

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 56;

if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizione gratuita");
} else {
  totalShoppingCart += 10;
  console.log("Costo totale degli articoli + spedizione: " + totalShoppingCart);
};

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart *= 0.8;

if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizione gratuita");
} else {
  totalShoppingCart += 10;
  console.log("Costo totale degli articoli + spedizione: " + parseInt(totalShoppingCart));
};

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 9
let b = 12
let c = 7

if (a >= b && a >= c) {
  if (b >= c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else {
  if (a >= b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num5 = 8;

if (typeof num5 === "stringa") {
  console.log("Il valore inserito è un numero");
} else {
  console.log("Il valore inserito non è un numero");
};

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value = 4;
if (value % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
};

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10 && val >= 6) {
    console.log("Meno di 10");
  } else if (val <= 5) {
    console.log("Minore o uguale a 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  };

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop(2)
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let newArray = [];
newArray.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(newArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
newArray.splice(9, 1, 100);
console.log(newArray);