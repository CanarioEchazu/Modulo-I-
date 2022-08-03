"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length = 0;
  }
function Node(value){
  this.dato = value;
  this.next = null;
  }
  
LinkedList.prototype.add = function(data){
  let node = new Node(data);
    //si lista vacia
    if(this.head === null){
      this.head = node;
  }else{            //si ya tiene nodos
    let actual = this.head;
    while(actual.next){
      actual = actual.next;
  }
  actual.next = node;
  }
  this._length++;
  return node;
  }

/*ESTO ES LO QUE HABIA ENCONTRADO EN GOOGLE
** * * * * * *  *
  LinkedList.prototype.deleteFirst = function(){
    if (this._length === 0) return console.log('Es una lista vacia');
    else{
    let aux = this.head.dato;
    this.head = this.head.next;
    this._length--;
    console.log("Elemnt elim: " +aux);
    }
    }
    *** * * *  F* * * * *
     HASTA AQCÁ
     */

  LinkedList.prototype.remove = function(){
    // pseudo código:
    // me fijo si hay head, o si solo tiene 1 nodo
    // recorrer hasta llegar al penúltimo nodo
    // a este nodo le dgo qeu nul, así pierdo la referencia del que tenia antes.

    if (!this.head) return false;

    if (this.head.next === null){
      let caja = this.head;
      this.head = null;
      return aux.value 
    } else {
      let current = this.head;
      while (current.next.next === !null) {
        current = current.next
      }
      let tomarInformacion = current.next.value;
      current.next = null;
      return tomarInformacion;
    }

  }

  LinkedList.prototype.search = function (algo) {
    if (!this.head) return null;

    if (typeof algo !== "function"){  // si el argumento que  recibimos no es una funcion.
      callBack = function(data){
        return data === algo;
      };
    


    }else {
      callBack = algo;
    }

    let current = this.head;
    while (current.next) {

     if(current.value === algo){
        return (current.value)          
      } else {
        current = current.next;
      }
      current = current.next;
    }
  }

  /*
  
var lista1 = new LinkedList();
lista1.add('Henrry');
lista1.add(11111);
lista1.add(6);
lista1.add(5);
lista1.add(7);
lista1.add(3);
lista1.add(4);
console.log (
  lista1.search (function (dato) {
    if (dato /2 === 0) {
      return true;
    }
    return false;
  }
  )
)
*/


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {

  this.buckets = [],
  this.numBuckets = 0

  let sum = 0;

for (let i = 0; i < key.length; i++) {
  sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
