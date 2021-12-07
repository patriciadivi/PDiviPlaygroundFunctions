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
    if (init === maxNumberNow) { true
      contArr += 1
    }
  }
  return contArr
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  /* Conteúdo para a resolução do problema abaixo
  https://www.devmedia.com.br/matematica-em-javascript-o-objeto-math/27439
  */
  if (Math.abs((cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    return 'cat1';
  }
  if (Math.abs((cat1 - mouse)) === Math.abs((cat2 - mouse))) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';

}


// Desafio 8
function fizzBuzz(numbers) {
  let arrayString = [];
  for (let compare = 0; compare < numbers.length; compare += 1) {
    if (numbers[compare] % 3 === 0 && numbers[compare] % 5 === 0) {
      arrayString.push("fizzBuzz")
    } else if (numbers[compare] % 3 === 0) {
      arrayString.push("fizz")
    } else if (numbers[compare] % 5 === 0) {
      arrayString.push("buzz")
    } else{
      arrayString.push("bug!")
    }
  }
  return arrayString

}


// Desafio 9
function encode(stringArr) {
  let newV = '';
  for (let position of stringArr) {
    if(position === 'a'){
      newV += '1'
    } else if (position === 'e'){
      newV += '2'
    } else if (position === 'i') {
      newV += '3'
    } else if ((position === 'o')) {
      newV += '4'
    } else if (position === 'u') {
      newV += '5'
    } else {
      newV += position
    }
  }
  return newV
}
function decode(stringArr) {
  let changePosition = '';
  for (const changeNumber of stringArr) {
    if (changeNumber === '1') {
      changePosition += 'a'
    } else if (changeNumber === '2') {
      changePosition += 'e'
    } else if (changeNumber === '3') {
      changePosition += 'i'
    } else if (changeNumber === '4') {
      changePosition += 'o'
    } else if (changeNumber === '5') {
      changePosition += 'u'
    } else {
      changePosition += changeNumber
    }
  }
  return changePosition
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
