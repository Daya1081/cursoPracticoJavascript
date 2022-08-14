const salariosCol = colombia.map(
    function(persona){
        return persona.salario;
    }
);
console.log(salariosCol);
const salariosColOrdenados = salariosCol.sort(
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);
console.log(salariosColOrdenados);

/*FUNCION QUE REDONDEA EL RESULTADO A DOS DECIMALES*/
function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}


function mediana(lista){
    let tamano = lista.length;
    let valor = lista.length/2;
    if(tamano % 2 === 0){
        let valor1 = lista[valor-1];
        let valor2 = lista[valor];
        var promedio = (parseInt(valor1)+parseInt(valor2))/2;
    }else{
        let valoru = Math.ceil(valor);
        var promedio = lista[valoru-1];
    }
    promedio = round(promedio);
    return promedio;
}

const medianaGeneral = mediana(salariosColOrdenados);

const spliceinicio = (salariosColOrdenados.length * 90) / 100;
const splicecuantos = salariosColOrdenados.length - spliceinicio;

const salariosColtop10 = salariosColOrdenados.splice(spliceinicio, splicecuantos);
console.log(salariosColtop10); 

const medianaTop10 = mediana(salariosColtop10);

console.log(
    medianaGeneral,
    medianaTop10,
);

/*function obtenerid(){
    $(document).on('click', '.box', function () {
        var idq = $(this).attr('id');
        $("#oculto").val(idq);
        alert(idq);
        return idq;
    });
}*/
/*document.addEventListener('DOMContentLoaded', function() {
    applyInputMask('servicios', '000.000.000');
});

function applyInputMask(elementId, mask) {
    let inputElement = document.getElementById(elementId);
    let content = '';
    let maxChars = numberCharactersPattern(mask);
    
    inputElement.addEventListener('keydown', function(e) {
        e.preventDefault();
        if (isNumeric(e.key) && content.length < maxChars) {
            content += e.key;
        }
        if(e.keyCode == 8) {
            if(content.length > 0) {
                content = content.substr(0, content.length - 1);
            }
        }
        inputElement.value = maskIt('000.000.000', content);
    })
}
function isNumeric(char) {
    return !isNaN(char - parseInt(char));
}
function maskIt(pattern, value) {
    let position = 0;
    let currentChar = 0;
    let masked = '';
    while(position < pattern.length && currentChar < value.length) {
        if(pattern[position] === '0') {
            masked += value[currentChar];
            currentChar++;
        } else {
            masked += pattern[position];
        }
        position++;
    }
    return masked;
}
function numberCharactersPattern(pattern) {
    let numberChars = 0;
    for(let i = 0; i < pattern.length; i++) {
        if(pattern[i] === '0') {
            numberChars ++;
        }
    }
    return numberChars;
}*/
function validar(){
    var salario = document.getElementById("salario").value;
    var ahorro = document.getElementById("ahorro").value;
    var otrosing = document.getElementById("otrosing").value;
    var alimentacion = document.getElementById("alimentacion").value;
    var servicios = document.getElementById("servicios").value;
    var arriendo = document.getElementById("arriendo").value;
    var colegio = document.getElementById("Colegio").value;
    var tc = document.getElementById("TC").value;
    var remesas = document.getElementById("remesas").value;
    var otros = document.getElementById("otros").value;
    var credito = document.getElementById("credito").value;
    var ludicas = document.getElementById("ludicas").value;
    var telefonos = document.getElementById("telefonos").value;
    if(salario==""||ahorro==""||otrosing==""||servicios==""||arriendo==""||colegio==""||tc==""||remesas==""||otros==""||alimentacion==""||credito==""||ludicas==""||telefonos==""){
        return 1;
    }else{
        return 2;
    }
}
function calcular_totales(){
    var val = validar();
    if(val===1){
        alert("existen campos vacios, llenelos por favor");
    }else{
        var salario = document.getElementById("salario").value;
        var ahorro = document.getElementById("ahorro").value;
        var otrosing = document.getElementById("otrosing").value;
        var servicios = document.getElementById("servicios").value;
        var arriendo = document.getElementById("arriendo").value;
        var colegio = document.getElementById("Colegio").value;
        var tc = document.getElementById("TC").value;
        var remesas = document.getElementById("remesas").value;
        var otros = document.getElementById("otros").value;
        var alimentacion = document.getElementById("alimentacion").value;
        var credito = document.getElementById("credito").value;
        var ludicas = document.getElementById("ludicas").value;
        var telefonos = document.getElementById("telefonos").value;

        var gastos = parseFloat(credito) + parseFloat(ludicas) + parseFloat(telefonos) + parseFloat(servicios) +  parseFloat(arriendo) + parseFloat(colegio) + parseFloat(tc) + parseFloat(remesas) + parseFloat(otros);
        var tingresos = parseFloat(salario) + parseFloat(otrosing) + parseFloat(alimentacion);
        var porc = parseFloat(ahorro)/100;
        var cahorro = tingresos * porc;
        var disponible = salario - cahorro;
        var restante = disponible - gastos;
        document.getElementById("tot_ingresos").innerHTML = tingresos;
        document.getElementById("tot_ahorro").innerHTML = cahorro;
        document.getElementById("tot_gastos").innerHTML = gastos; 
        document.getElementById("restante").innerHTML = disponible;
        document.getElementById("deficit").innerHTML = restante;

    }
}
function salir(){
    var pagina = 'menu.html';
    document.location.href=pagina;
}
function borrar(){
    alert("entro");
    document.getElementById("salario").value="";
    document.getElementById("ahorro").value="";
    document.getElementById("otrosing").value="";
    document.getElementById("servicios").value="";
    document.getElementById("arriendo").value="";
    document.getElementById("Colegio").value="";
    document.getElementById("TC").value="";
    document.getElementById("remesas").value="";
    document.getElementById("otros").value="";
    document.getElementById("alimentacion").value="";
    document.getElementById("credito").value="";
    document.getElementById("ludicas").value="";
    document.getElementById("telefonos").value="";
    document.getElementById("tot_ingresos").innerHTML = "";
    document.getElementById("tot_ahorro").innerHTML = "";
    document.getElementById("tot_gastos").innerHTML = ""; 
    document.getElementById("restante").innerHTML = "";
    document.getElementById("deficit").innerHTML = "";
}


