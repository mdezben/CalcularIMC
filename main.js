var PESO=0
var Estaturaaa=0
var IMC=0
function peso(){
    PESO=prompt("Ingresa tu peso en kg:")
}
function estatura(){
    Estatura2=prompt("Ingresa tu estatura en metros:")
}
function imc(){
    IMC=PESO/(Estatura2*Estatura2)
    alert("Tu imc es: "+IMC)

    if (IMC < 18.5){
        alert("estas muy delgado")
    }
    else if (IMC < 25){
        alert("estas saludable")
    }
    else{
        alert("tienes sobrepeso")
    }
}