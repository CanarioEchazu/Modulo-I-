/*var aux = 'Hola';

function a() {
    console.log (aux);
    aux = 'Hello!';
}

function b() {
    var aux = 'chau'
    console.log (aux);
}
a ();
b ();
console.log(aux);

const pepe = () => 5;
console.log (pepe ());*/
console.log (this)

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);