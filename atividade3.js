function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 !== 0;
}

const meuArray = [1,2,23,56,67,30,6,4];

console.log(filtraPares(meuArray));