function generador(cantidad){
    var aux = {prop: cantidad}
    var arr = []
    arr[cantidad] = "hola"

    return function(){
        console.log(arr[cantidad])
        var caja = aux
        console.log(caja)
        caja.name = "Her"
        console.log(aux)
    }
}

const pepe = generador(5)

console.log(pepe.length)




// function hacerSaludo(lenguaje) {
//   if (lenguaje === "en") {
//     return function () {
//       console.log("Hi!");
//     };
//   }

//   if (lenguaje === "es") {
//     return function () {
//       console.log("Hola!");
//       console.log(lenguaje)
//     };
//   }
// }

// var saludoIngles = hacerSaludo("en");
// var saludoEspaniol = hacerSaludo("es");

// saludoIngles()
// saludoEspaniol()

// var creaFuncion = function(){
// 	var arreglo = [];

// 	for ( var i=0; i < 3; i++){
// 		arreglo.push(
//             (function(j){

// 				return function() {console.log(j);}

// 			}(i))
// 		)
// 	}
// 	return arreglo;
// }

// var pepe = creaFuncion();

// pepe[0]() // 3 sale un 3, qué esperaban ustedes??
// pepe[1]() // 3
// pepe[2]() // 3

// function saludar(saludo) {
//   return function (nombre) {
//     console.log(saludo + " " + nombre);
//   };
// }

// var caja = saludar("Hola"); // Esto devuelve una función
// // var saludarEn = saludar("Hello")

// saludarEs("Toni"); // 'Hola Toni'
// // saludarEn("Toni")

// // contexto, lexical: nombre
// // closure: saludo

// function cualquierNombre(nombre) {
//   let aux = "asdasd";
//   let codigo = 2334;

//   return function () {
//     // closure
//     console.log(nombre);
//     console.log(codigo);
//     console.log(aux);
//   };
// }

// var caja = cualquierNombre("Her"); // se abre el contexto de cualquierNombre
// // avanza el hilo
// caja();

// caja = "otra cosa";

// console.log(caja)

/*

CONTEXTO DE EJECUCION CUALQUIER NOMBRE {
        lexical
        codigo
        outer: global
                        
    }

    [    CLOSURE   ](TODO LO QUE HABIA EN EL CONTEXTO DEL PADRE)

    
    CONTEXTO DE EJE CAJA {
                            lexical
                            codigo: console.log
                            outer: cualquierNombre


                        }



*/
// }