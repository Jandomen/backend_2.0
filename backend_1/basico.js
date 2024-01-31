var nombre = "Juan";
let edad = 25;
const PI = 3.14;

console.log(nombre, edad, PI)

var cadena = "Hola";
var numero = 42;
var booleano = true;
var arreglo = [1, 2, 3];
var objeto = { clave: "valor" };

console.log(objeto)

var suma = 10 + 5;
var asignacion = 5;
var esIgual = (asignacion === 5); 
var andLogico = true && false; 

console.log(esIgual)

var edad1 = 18;
if (edad1 >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Bucle For
for (var i = 0; i < 5; i++) {
    console.log(i);
}
  
  // Bucle While
var contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}

function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}
  
saludar("Homero");

var persona = {
    nombre: "Pablo",
    edad: 25,
    saludar: function() {
      console.log("Hola, soy " + this.nombre);
    }
  };
  
  console.log(persona.nombre); // Pablo
  persona.saludar(); // Hola, soy Pablo
  
  