//Reduce

function somaNumeros(arr) {
  return arr.reduce(function(prev,current) {
    console.log({prev});
    console.log({current});
    return prev + current;
  },0);
}

const arr = [6,6];

console.log(somaNumeros(arr));