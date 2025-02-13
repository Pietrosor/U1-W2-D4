/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2)
  e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2
}

console.log(area(3, 6))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri,
  ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3
  } else return a + b
}

console.log(crazySum(10, 10))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra 
 un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre 
 qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(x) {
  const diff = 19
  if (x > 19) {
    return (x - diff) * 3
  } else {
    return x - diff
  }
}
console.log(crazyDiff(24))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro,
  e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20, n <= 100 || n === 400)) {
    return true
  } else {
    return false
  }
}

console.log(boundary(324))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
  ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
  const word = "EPICODE"
  if (stringa.startsWith("EPICODE")) {
    return stringa
  } else {
    return "EPICODE " + stringa
  }
}

console.log(epify("EPICODE tarantella "))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro.
  La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
  if (n < 0) {
    return "Numero negativo"
  } else if ((n % 3 === 0, n % 7 === 0)) {
    return "Numero divisibile per 3 o 7"
  } else {
    return "Numero non divisibile per 3 o 7"
  }
}
console.log(check3and7(-3))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire
  una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(i) {
  return i.split("").reverse().join("")
}
console.log(reverseString("EPICODE"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa 
 formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(frase) {}
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
  La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
  return stringa.substring(1, stringa.length - 1)
}
console.log(cutString("Tarantella"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n
  e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const randomNumbers = []
  for (i = 0; i < randomNumbers; i++) {
    randomNumbers.push(Math.random() * 10)
  }
  return randomNumbers
}
console.log(giveMeRandom(5))
