'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  // tomar el numero binariuo (num)
  // vamos a empezar desde el final (exponente)
  // base 2
  // acumulando la suma en una caja

  var sumaTotal = 0;
  var contador = 0;
  for (let i = num.length-1; i >= 0 ; i--) {
    sumaTotal = sumaTotal + Math.pow (2,contador) * num[i];
    contador ++;
  }
  return sumaTotal
}
  // 3210
  // 1001
  // i =3

/*
var binario = num.split('').reverse();
var resultado = 0;
var b;
for (var i=0; i < binario.length; i++){
  b = Math.pow(2,i);
  resultado += b*binario [i];
}
return resultado;
}*/
  /*
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
     sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}
*/
function DecimalABinario(num) {
  // tu codigo aca
var numeroEnBinario = []
while (num>=1) {
  numeroEnBinario.unshift(num % 2);
//  num = Math.floor (num %2);

num = (num - (num%2)) / 2
}
console.log (numeroEnBinario.join(''));
return numeroEnBinario.join('');

  //  return num.toString(2);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}