let array = [[5,5],4,[10,15],[25,10]];

function sumaArrays(array){
    let arra = [];
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])){
        suma = array[i].reduce((pre,curr) => pre + curr,0);
        sumaArrays(array[i]);
        arra.push(suma);
    }else{ if(typeof (array[i] === 'number'))
        arra.push(arra[i]);
    }
   
    
    }return arra;
}
sumaArrays(array)
array
suma

