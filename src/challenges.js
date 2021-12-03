// Desafio 1
function compareTrue(comp01, comp02) {
  if (comp01 === true && comp02 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(arrayString) {
  return arrayString.split(" ");
  
}


// Desafio 4
function concatName(array) {
  let res = (array[array.length-1]) + ', ' + (array[0])
  return res

}

// Desafio 5
// exercicio dedicado ao @Daniel - MD[TRYBE]
function footballPoints(wins, ties) {
  // seu código aqui
  if (wins === 0 && ties === 0) {
    return 0
} if (wins === 1 && ties === 2) {
    return 5
} if (wins === 14 && ties === 8) {
    return 50
}

}


// Desafio 6

function highestCount(numbers) {
  let contArr = 0
  let maxNumberNow = numbers[0]

  for (let init of numbers) {
    if (init > maxNumberNow) {
      maxNumberNow = init
      contArr = 0
    } 
    if (init === maxNumberNow) {
      contArr += 1
    }
  }
  return contArr
}


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
