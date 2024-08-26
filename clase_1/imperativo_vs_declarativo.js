// IMPERATIVO
const numbers = [1, 2, 3, 4, 5, 6];
const result = [];

for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 == 0) {
    result.push(numbers[i] * 2);
  }
}

console.log(result);

// DECLARATIVO SIN +ES6

function validarSiEsParYMultiplicarPor2(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
      result.push(array[i] * 2);
    }
  }

  return result;
}


// DECLATIVO

const _numbers = [1, 2, 3, 4, 5, 6];

const _result = numbers.filter(n => n % 2 !== 0).map(n => n * 2);

console.log(_result);

