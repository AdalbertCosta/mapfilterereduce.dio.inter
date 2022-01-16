//Reduce

/*
O que é o reduce?

Executa uma função em todos os elementos do array, retornando um valor único
*/

array.reduce(callbackFn, initialValue)

//Callback: função a ser executada a partir do acumulador
//InitialValue: valor sobre o qual o retorno final irá atuar

const callbackFn = function(accumulator,cuurentValue, index, array) {
  // do something
}

array.reduce(callbackFn, initialValue)

// Accumulator/prevValue: acumulador de todas as chamadas de callbackFn.
// cuurentValue: elemento atual sendo acessado pela função.