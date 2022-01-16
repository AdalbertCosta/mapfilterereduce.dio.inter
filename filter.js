// Filter e Sintaxe

/*
O que é o metodo Filter?

Cria um novo array conforme parametros estipulados, sem modificar o original. 

*/

array.filter(callback,thisArg)

/*
Callback: função a ser executada em cada elemento.
thisArg(opicional): valor de 'this' dentro da função de callback.
*/
//exemplo:
const frutas = ['maça fuji', 'maça verde','laranja','abacaxi'];
frutas.filter((fruta) => fruta.includes('maça'))
//returno: ['maça fuji', 'maça verde'];


