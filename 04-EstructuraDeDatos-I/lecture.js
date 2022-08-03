function algo(num){
    console.log ('entre',num);
    var x = 0;
    console.log (++x);
    if (num === 1) {return 'llegue'
    }
    return algo(num-1)
}
console.log (algo(12));


var arreglo = [1,2,3,4,4,5,5,2,3];
console.log ('Cantidad de valores',arreglo.length);
var set1 = new Set(arreglo)
console.log(arreglo);
console.log(arreglo[0]);
console.log(set1);
console.log(set1.has(7));
console.log(set1.add(7));
console.log(set1.has(7));
console.log(set1);

const aux = Array.from(set1);
aux.sort();
console.log(aux);

const arr = []

arr.push(1);
arr.push(2);
arr.push(3);

console.log (arr);
console.log (arr.pop());
console.log (arr);



