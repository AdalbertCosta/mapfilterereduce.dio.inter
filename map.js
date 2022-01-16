//Apresentação do Curso

//O que é, Sintaxe e Map vs forEach

// Map - Quando um conjunto passa por uma operação e passa a ser  outro conjunto. (Interpretação matemática)

/*

Cria um novo array
Não modifca o array original
Realiza oprações em ordem

Sintaxe**

Callback: função a ser executada em cada elemento.

thisArg(opcional): valor de 'this dentro da função callback.

*/

//Map vs forEach

// Usando Map
const array = [1,2,3,4,5];
array.map((item) => item * 2); //retorno: [2,4,6,8,10]

//usando forEach
const array = [1,2,3,4,5];
array.forEach((item) => item * 2); // retorno undefined 