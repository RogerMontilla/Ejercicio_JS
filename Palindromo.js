'use strict'

/* Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural". */

var FraceInicial = prompt("Introduzca una frace palindroma", "Palindromo");

function palindromo (frace){
var palabra = frace.toLowerCase().split("")
var length = palabra.length;
var SinEspacios = "";

for(var i=0; i<length; i++){
    if (palabra[i] != " ") {
        SinEspacios += palabra[i];
    }
}

var reverse = SinEspacios.split("").reverse().join("");

console.log(SinEspacios);
console.log(reverse);

if(SinEspacios == reverse){
    var mostrar = true;
} else {
    var mostrar = false;
}
return mostrar;
}

if (palindromo(FraceInicial)) {
    alert("La frace "+FraceInicial+" es un palindromo");
} else{
    alert("La frace "+FraceInicial+" no es un palindromo");
}

var FraceSecundaria = prompt("Ingrasa una seguna frace");

if (palindromo(FraceSecundaria)) {
    alert("La frace "+FraceSecundaria+" es un palindromo");
} else{
    alert("La frace "+FraceSecundaria+" no es un palindromo");
}
