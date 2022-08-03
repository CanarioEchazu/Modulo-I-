const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

// ************

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10


// ****************


const arr = [1, 2, 3, 4];
const reducer = (accumulator, curr) => accumulator + curr;
console.log(arr.reduce(reducer));

function prueba (num){
  if ( num === 0) return num
  else return num + prueba(num-1)
}
var a = prueba (5)
a