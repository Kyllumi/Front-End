// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let giveMeRandom = randomNumbers(10);
console.log(giveMeRandom);

function randomNumbers(x) {
  let arrayRandom = [];
  for (let i = 0; i < x; i++) {
    let numbers = Math.floor(Math.random() * 10) + 1;
    arrayRandom.push(numbers);
  }
  return arrayRandom;
}

function checkArray(arr) {
  let sumOver5 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log("Il numero è maggiore di 5");
      sumOver5 += arr[i];
    } else {
      console.log("Il numero non è maggiore di 5");
    }
  }
  return sumOver5;
}
const sumOfValuesGreaterThan5 = checkArray(giveMeRandom);
console.log(
  `La somma di tutti i valori maggiori di 5 è: ${sumOfValuesGreaterThan5}`
);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  {
    price: 20,
    name: "Computer",
    id: "F0747",
    quantity: 48,
  },
  {
    price: 60,
    name: "TV",
    id: "F0217",
    quantity: 12,
  },
  {
    price: 10,
    name: "CD",
    id: "F0787",
    quantity: 32,
  },
  {
    price: 21,
    name: "Tappeto",
    id: "F0397",
    quantity: 7,
  },
];

function shoppingCartTotal(x) {
  let totalCart = 0;
  for (let i = 0; i < x.length; i++) {
    totalCart += x[i].price * x[i].quantity;
  }
  console.log(totalCart);
}

let totalDue = shoppingCartTotal(shoppingCart);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let newObject = { price: 89, name: "Lampada", id: "F0117", quantity: 72 };

function addToShoppingCart(x) {
  shoppingCart.push(x);
  console.log(shoppingCart.length);
}

addToShoppingCart(newObject);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let maxPrice = maxShoppingCart(shoppingCart);

function maxShoppingCart(x) {
  let biggerPrice = [];
  for (let i = 0; i < x.length; i++) {
    biggerPrice.push(x[i].price);
  }
  console.log(
    Math.max(
      biggerPrice[0],
      biggerPrice[1],
      biggerPrice[2],
      biggerPrice[3],
      biggerPrice[4]
    )
  );
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(x) {
  return x.pop();
}
console.log(shoppingCart);

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let array1 = [1, 4, 9, 12, 31, 2, -4];
let media = average(array1);

function average(x) {
  let sum = 0;
  let count = 0;

  x.forEach((element) => {
    if (!isNaN(element)) {
      sum += parseFloat(element);
      count++;
    }
  });

  if (count === 0) {
    console.log("Error!");
    return 0
  }
  return sum / count;
};

console.log(average(array1));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringa1 = ["ciaoo", "ciaooo", "ciaoooo", "ciaooooo", "ciaoooooo"];

function longest(x) {
  x.slice(", ");
  for (let i = 0; i < x.length; i++) {
    return Math.max(x[i].length);
  }
};

console.log(longest(stringa1));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let messaggio = "SPAM Questa è una mail"

function emailContent(x) {
  if (x.search("SPAM") === "SPAM" || x.search("SCAM") === "SCAM") {
    return false;
  } else {
    return true
  };
};

console.log(emailContent(messaggio));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let data = Date(2021-11-4);
console.log(data);

function dateDiff (x) {
  let diff = (newDate() - x.getMilliseconds()) / 8.64;
}

console.log(dateDiff(data));
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
