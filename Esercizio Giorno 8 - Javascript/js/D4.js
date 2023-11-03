/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(x, y) {
  let area = x * y;
  console.log(area);
}

area(12, 24);

// let l1 = parseInt(prompt("Inserisci un numero"));;
// let l2 = parseInt(prompt("Inserisci un altro numero"));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y) {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
}
let sum = crazySum();

console.log(crazySum(4, 4));

// let num1 = parseInt(prompt("Inserisci un numero"));
// let num2 = parseInt(prompt("Inserisci un altro numero"));
// console.log(crazySum(num1, num2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(x, y) {
  if (x > 19) {
    return Math.abs(x - y) * 3;
  } else {
    return Math.abs(x - y);
  }
}
let diff = crazyDiff(-6, 19);

console.log(diff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
let bound = boundary();

console.log(bound);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify() {
  if (stringa1.startsWith("EPICODE")) {
    return stringa1;
  } else {
    return "EPICODE - " + stringa1;
  }
}

let stringa1 = "EPICODE - Inizia a diventare un Sviluppatore";
console.log(epify());

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(x) {
  if (x < 0) {
    return "Inserisci un numero positivo";
  } else if (x % 3 === 0 || x % 7 === 0) {
    return "E' un multiplo di 3 o 7";
  } else {
    return "Non è multiplo di 3 o 7";
  }
}
console.log(check3and7(6));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(x) {
  return x.split("").reverse().join("");
}
let stringa2 = "TARTARUGA";
console.log(reverseString(stringa2));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringa3 = "Questa è una stringa con tante parole";

function upperFirst(stringa3) {
  let words = stringa3.split(" ");
  let fraseConMaiuscole = "";
  for (var i = 0; i < words.length; i++) {
    let singleWord = words[i];
    fraseConMaiuscole +=
      singleWord.charAt(0).toUpperCase() + singleWord.slice(1) + "";
    if (i < words.length - 1) {
      fraseConMaiuscole += " ";
    };
  };
  return fraseConMaiuscole;
}

console.log(upperFirst(stringa3));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringa4 = "*Questa è una stringa*"
console.log(stringa4);

function cutString(x) {
      return String(x.slice(1, 21));
};

console.log(cutString(stringa4));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = giveMeRandom(10)

function giveMeRandom(n) {
    let randNumb = [];
    for (let i = 0; i < n; i++) {
        let numbs = Math.floor(Math.random() * 11);
        randNumb.push(numbs);
    }
    return randNumb;
};

console.log(giveMeRandom(10));

