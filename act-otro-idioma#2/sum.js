alert("Bienvenido - Ingresa a continuación 2 números para sumar")

//Aquí hacemos la petición del número al usuario
const n1 = prompt("Ingrese el primer número a sumar")
const n2 = prompt("Ingrese el segundo número a sumar")

//Hacemos la operación
const res = parseInt(n1) + parseInt(n2)

//Mostramos el resultado ES5
alert(`El resultado es: ${res}`)