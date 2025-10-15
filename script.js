//Variables
var datoUno;
var datoDos;
var operacion;

//Funciones
function miFuncion(){
    var resultado = document.getElementById("resultado");
    var division = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicacion");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var borrar = document.getElementById("borrar");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    borrar.onclick = function(e){
        resetear();
    }
    //Funciones de operaciones
    suma.onclick = function(e){
        datoUno = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        datoUno = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        datoUno = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        datoUno = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        datoDos = resultado.textContent;
        resolver();
    }


}


function resetear(){
    resultado.textContent = "";
    datoUno = 0;
    datoDos = 0;
    operacion = "";
}

function limpiar(){
    resultado.textContent = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case"+":
            res = parseFloat(datoUno) + parseFloat(datoDos);
            break;
        case"-":
            res = parseFloat(datoUno) - parseFloat(datoDos);
            break;
        case"*":
            res = parseFloat(datoUno) * parseFloat(datoDos);
            break;
        case"/":
            res = parseFloat(datoUno) / parseFloat(datoDos);
            break;
    }
    resetear();
    resultado.textContent = res;
}