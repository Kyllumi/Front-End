// Strutture di controllo
// // IF-ELE -> esegui un blocco di istruzione SE la condizione è vera
/*
    if(condizione) {
        // Blocco di istruzioni
    } else if(condizione) {
        // Blocco di istruzioni
    } else if(condizione) {
        // Blocco di istruzioni
    } else {
        // Blocco di istruzioni
    }
*/


/* 
    switch (espressione) {
        case value:
            // Blocco di istruzioni
            break;
        case value:
            // Blocco di istruzioni
            break;
        case value:
            // Blocco di istruzioni
            break;
        default:
            // Blocco di istruzioni
            break;
    } 
*/

let giornoSettimana = 9;
if(giornoSettimana === 1) {
    console.log('Oggi è Lunedi');
} else if(giornoSettimana === 2) {
    console.log('Oggi è Martedi');
} else if(giornoSettimana === 3) {
    console.log('Oggi è Mercoledi');
} else if(giornoSettimana === 4) {
    console.log('Oggi è Giovedi');
} else if(giornoSettimana === 5) {
    console.log('Oggi è Venerdi');
} else if(giornoSettimana === 6) {
    console.log('Oggi è Sabato');
} else if(giornoSettimana === 7) {
    console.log('Oggi è Domenica');
} else {
    console.log('Valore Errato!!!');
}

switch (giornoSettimana) {
    case 1: console.log('Oggi è Lunedi'); break;
    case 2: console.log('Oggi è Martedi'); break;
    case 3: console.log('Oggi è Mercoledi'); break;
    case 4: console.log('Oggi è Giovedi'); break;
    case 5: console.log('Oggi è Venerdi'); break;
    case 6: console.log('Oggi è Sabato'); break;
    case 7: console.log('Oggi è Domenica'); break;
    default:
        console.log('Valore Errato!!!');
        break;
}

let mese = 1;

switch (mese) {
    case 12: console.log('è Natale');
    case 1:
    case 2:
        console.log('Inverno');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Primavera');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Estate');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autunno');
        break;
    
    default:
        console.log('Valore Errato!!!');
        break;
}

// Operatore Unario
let val = 5;
// val = val + 1; // val = val - 1
// val += 1; // val -= 1;
val++; // Operatore unario di post incremento
++val; // Operatore unario di pre incremento
val--; // Operatore unario di decremento
--val; // Operatore unario di pre decremento
console.log(val);

// Particolarità di un operatore Unario
let x = 5;
// let y = x + 1;
let y = x;
console.log(x, y);

// NaN
// Un tipo di dato speciale che non è uguale neanche a se stesso
let n = NaN;
console.log(typeof n); // Number
console.log(n === NaN); // False
console.log(isNaN(n)); // True

// Strutture iterative (cicli)
// While -> ripeti un blocco di istruzione FINCHE' la condizione è vera

/* 
    let count = val;
    while (condizione) {
        // Blocco di istruzioni
        count++;
    } 
*/

let count = 0;
while (count > 0) {
    console.log("Ciao " + count);
    //count -= 1;
    count--;
}
let sum = 0;
while(false) { // true
    let v = prompt('Inserisci un numero o end per terminare');
    if(v === 'end' || v === null ) {
        break;
    }
    if(isNaN(Number(v))) {
        console.log("Non hai inserito un numero")
    } else {
        sum += Number(v);
    }
    
}
console.log(sum);

// Do-While -> ripeti un blocco di istruzione FINCHE' la condizione è vera

/* 
    let count = val;
    do {
        // Blocco di istruzioni
        count++;
    } while (condition); 
*/

let count1 = 0;
while (count1 > 0) {
    console.log("While " + count1);
    //count -= 1;
    count1--;
}

let count2 = 0;
do {
    console.log("DoWhile " + count2);
    count2--;
} while (count2 > 0);


/* while(true) {
    let pass = prompt("Inserisci password");
    if(pass === "qwerty") {
        break;
    }
} */

let pass;
do {
    pass = prompt("Inserisci password");
} while(pass !== "qwerty")


// For -> ripeti un blocco di istruzione FINCHE' la condizione è vera

/* 
    for(inizializzazione; condizione; incremento){
        // Blocco di istruzioni
    } 
*/

for(let i = 0; i < 10; i++) {
    console.log("For: " + i);
}

let arr = [28, 9, 15, 7 , 6]; // length = 5

for(let i=0; i<arr.length; i++) {
    /* console.log(i);
    console.log(arr[i]) */
    if(arr[i] > 10) {
        console.log(arr[i])
    } 
}

let arr2 = ['ciao', 'abc', 'qwerty']
for(let i=0; i<arr2.length; i++) {
    /* if(arr2[i].length > 3) {
        console.log(arr2[i])
    } */
    console.log(arr2[i])
}


for(let c = 0;c <5; c++){
    console.log(c);
}

console.log("FINE")