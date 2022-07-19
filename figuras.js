//***********************CALCULANDO AREAS Y PERIMETROS CON VARIABLES***********

/*CÓDIGO DEL CUADRADO

console.group("Cuadrado");
const ladoCuadrado=5;
console.log("los lados del cuadrado miden: " + ladoCuadrado +" cm");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perímetro del cuadrado es: " + perimetroCuadrado + "cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//CÓDIGO DEL TRIANGULO

console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo =  4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo son: Lado 1 = " + ladoTriangulo1 + ", Lado 2 = " + ladoTriangulo2 + ", Base = " + baseTriangulo);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("el perimetro del triangulo es: " + perimetroTriangulo + "cm");
console.log("area del triangulo es: " + areaTriangulo + "cm2");
console.groupEnd();

//CODIGO DEL CIRCULO

console.group("Circulo");
const radioCirculo= 4;
console.log("el radio es: " + radioCirculo + "cm");
const pi = Math.PI;
console.log("el valor de pi es:" + pi);
const perimetroCirculo = 2 * pi * radioCirculo;
const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log("El perimetro del circulo es: " + perimetroCirculo);
console.log("el area del circulo es: " + areaCirculo);
console.groupEnd();

*********************************************************************************************/

//**********************CALCULANDO AREAS Y PERIMETROS CON FUNCIONES**************************

//CÓDIGO DEL CUADRADO

console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//CÓDIGO DEL TRIANGULO

console.group("Triangulo");

function perimetroTriangulo (ladoT1, ladoT2, baseT) {
    var lado1 = parseInt(ladoT1);
    var lado2 = parseInt(ladoT2);
    var base = parseInt(baseT);
    return (lado1 + lado2 + base);
}

function areaTriangulo(baseT, alturaT){
   return (baseT * alturaT)/2;
}

console.groupEnd();

//CODIGO DEL CIRCULO

console.group("Circulo");

function perimetroCirculo(radio){
    const pi = Math.PI;
    return 2 * pi * radio;
} 

function areaCirculo(radio){
    const pi = Math.PI;
    return pi * (radio * radio);
} 

console.groupEnd();

document.getElementById("datoscuadrado").setAttribute("hidden","");
document.getElementById("datostriangulo").setAttribute("hidden","");
document.getElementById("datoscirculo").setAttribute("hidden","");
document.getElementById("botones").setAttribute("hidden","");
document.getElementById("resultados").setAttribute("hidden","");
document.getElementById('baltura').disabled = true;

let ee = document.getElementById('opciones');
let cs = document.getElementById('tipostriangulo');
ee.addEventListener("change", function(){
    if (ee.value == 'Triangulo') {
        cs.disabled = false;
    }else {
        cs.disabled = true;
    }
});

function solicitarDatos(){
    var x = document.getElementById("opciones").value;
    if(x!=="Sin valor"){
        document.getElementById("titFigseleccionada").innerHTML = x;
    }
    
    if(x=="Cuadrado"){
        document.getElementById("datoscuadrado").removeAttribute("hidden");
        document.getElementById("datostriangulo").setAttribute("hidden","");
        document.getElementById("datoscirculo").setAttribute("hidden","");
        document.getElementById("botones").removeAttribute("hidden");
        document.getElementById('baltura').disabled = true;
    }else{
        if(x=="Triangulo"){
            document.getElementById("datostriangulo").removeAttribute("hidden");
            document.getElementById("datoscuadrado").setAttribute("hidden","");
            document.getElementById("datoscirculo").setAttribute("hidden","");
            document.getElementById("botones").removeAttribute("hidden");
            document.getElementById('baltura').disabled = true;
        }else{
            if(x=="Circulo"){
                document.getElementById("datoscirculo").removeAttribute("hidden");
                document.getElementById("datostriangulo").setAttribute("hidden","");
                document.getElementById("datoscuadrado").setAttribute("hidden","");
                document.getElementById("botones").removeAttribute("hidden");
                document.getElementById('baltura').disabled = true;
            }else{
                document.getElementById("datoscuadrado").setAttribute("hidden","");
                document.getElementById("datostriangulo").setAttribute("hidden","");
                document.getElementById("datoscirculo").setAttribute("hidden","");
                document.getElementById("botones").setAttribute("hidden","");
                document.getElementById('baltura').disabled = true;
            }
        }
    }
}

function solicitaraltura(){
    var y = document.getElementById("tipostriangulo").value;
    if(y=="Isoseles"){
        document.getElementById('baltura').disabled = false;
        document.getElementById('altura').disabled = true;
    }
}

function validarIsoseles(lado1, lado2){
    if(lado1===lado2){
        return 1;
    }else{
        return 2;
    }
}

function alturaisoseles(lado1, lado2, base){
    var catadyacente = base/2;
    var hipotenusa = lado1;

    var a = ((hipotenusa * hipotenusa) - (catadyacente * catadyacente));
    var h = Math.sqrt(a);
    document.getElementById('altura').value = h;
}
function calcularAltura(){
    var ladoT1 = document.getElementById("ladoT1").value;
    var ladoT2 = document.getElementById("ladoT2").value;
    var base = document.getElementById("base").value;
    var val = validarIsoseles(ladoT1, ladoT2);
    if(val==1){
            alert("Medidas si correspondes a un triangulo isoseles");
            var alt_isoseles = alturaisoseles(ladoT1, ladoT2, base);
    }else{

    }
    var perimetroT = perimetroTriangulo(ladoT1, ladoT2, base);
}
function calcularAreas(){
    var quien=document.getElementById("titFigseleccionada").innerHTML;
    if(quien==='Cuadrado'){
        var lado = document.getElementById("lado").value;
        var areaC = areaCuadrado(lado);
        document.getElementById("rArea").innerHTML = areaC;
        document.getElementById("resultados").removeAttribute("hidden");
        
    }else{
        if(quien==='Triangulo'){
            var base = document.getElementById("base").value;
            var altura = document.getElementById("altura").value;
            var areaT = areaTriangulo(base, altura);
            document.getElementById("rArea").innerHTML = areaT;
            document.getElementById("resultados").removeAttribute("hidden");
        }else{
            if(quien==='Circulo'){
                var radio = document.getElementById("radio").value;
                var areaCi = areaCirculo(radio);
                document.getElementById("rArea").innerHTML = areaCi;
                document.getElementById("resultados").removeAttribute("hidden");
                
            }
        }
    }
}

function calcularPerimetros(){
    var quien=document.getElementById("titFigseleccionada").innerHTML;
    if(quien==='Cuadrado'){
        var lado = document.getElementById("lado").value;
        var perimetroC = perimetroCuadrado(lado);
        document.getElementById("rPerimetro").innerHTML = perimetroC;
        document.getElementById("resultados").removeAttribute("hidden");
        document.getElementById('baltura').disabled = true;
    }else{
        if(quien==='Triangulo'){
            var ladoT1 = document.getElementById("ladoT1").value;
            var ladoT2 = document.getElementById("ladoT2").value;
            var base = document.getElementById("base").value;
            var perimetroT = perimetroTriangulo(ladoT1, ladoT2, base)
            document.getElementById("rPerimetro").innerHTML = perimetroT;
            document.getElementById("resultados").removeAttribute("hidden");
        }else{
            if(quien==='Circulo'){
                var radio = document.getElementById("radio").value;
                var perimetroCi = perimetroCirculo(radio);
                document.getElementById("rPerimetro").innerHTML = perimetroCi;
                document.getElementById("resultados").removeAttribute("hidden");
                document.getElementById('baltura').disabled = true;
            }
        }
    }
}

function borrar(){
    document.getElementById("datoscuadrado").setAttribute("hidden","");
    document.getElementById("datostriangulo").setAttribute("hidden","");
    document.getElementById("datoscirculo").setAttribute("hidden","");
    document.getElementById("botones").setAttribute("hidden","");
    document.getElementById("resultados").setAttribute("hidden","");
    document.getElementById("titFigseleccionada").innerHTML = "";
    document.getElementById("rArea").innerHTML = "";
    document.getElementById("rPerimetro").innerHTML = "";
    document.getElementById("ladoT1").value = "";
    document.getElementById("ladoT2").value = "";
    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("radio").value = "";
    document.getElementById("lado").value = "";
    var select = document.getElementById("opciones");
    select.value = "Sin valor";
    var select2 = document.getElementById("tipostriangulo");
    select2.value = "Seleccione";
    document.getElementById('baltura').disabled = true;
}