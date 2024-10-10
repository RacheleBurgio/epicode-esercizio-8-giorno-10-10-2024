/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  return l1 * l2
}

console.log(area(3, 5))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  let total
  if (n1 !== n2) {
    total = n1 + n2
    return total
  } else {
    total = (n1 + n2) * 3
    return total
  }
}
console.log(crazySum(10, 20))
console.log(crazySum(20, 20))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num) {
  let diff = Math.abs(num - 19)
  if (num > 19) {
    return diff * 3
  } else {
    return diff
  }
}

console.log(crazyDiff(15))
console.log(crazyDiff(20))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if (n > 20 && n < 100) {
    return true
  } else if (n === 400) {
    return true
  } else {
    return false
  }
}

console.log(boundary(50))
console.log(boundary(400))
console.log(boundary(19))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (miao) {
  if (miao !== 'epicode') {
    return 'epicode' + miao
  } else {
    return miao
  }
}

console.log(epify('epicode'))
console.log(epify('miao'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (numpPositivo) {
  if (numpPositivo % 3 === 0 || numpPositivo % 7 === 0) {
    return 'Il numero è positivo: Accettato!'
  } else {
    return 'il numero è negativo: Rifiutato!'
  }
}

console.log(check3and7(70))
console.log(check3and7(30))
console.log(check3and7(25))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (miau) {
  let contrario = ''
  for (let i = miau.length - 1; i >= 0; i--) {
    contrario = contrario + miau[i]
  }
  return contrario
}

console.log(reverseString('miao'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst2 = function (cosine) {
  let isUpperCase = true
  let maiuscolo = ''

  for (let i = 0; i < cosine.length; i++) {
    if (isUpperCase) {
      maiuscolo += cosine[i].toUpperCase()
      isUpperCase = false
    } else {
      maiuscolo += cosine[i]
      if (cosine[i] === ' ') isUpperCase = true
    }
  }

  return maiuscolo
}

console.log(upperFirst2('mi chiamo rachele'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const cutString = function () {}
const cutString = function (lettere) {
  return lettere.slice(1, 6)
}

console.log(cutString('Macarena'))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  let array = []
  for (i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 11))
  }
  return array
}

console.log(giveMeRandom(2))
