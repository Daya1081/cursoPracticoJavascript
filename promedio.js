//TERCERA PRACTICA CALCULADORA DE PROMEDIO, MODA Y MEDIANA

/*OCULTO EL CONTENEDOR DE SOLICITUD DE DATOS Y EL BOTON BORRAR*/

document.getElementById("marco").setAttribute("hidden","");
document.getElementById("boton_borrar").setAttribute("hidden","");

/*FUNCION LLAMADA DESDE EL BOTON BORRAR*/
function limpiar(){
    borrandito();
    document.getElementById("boton_borrar").setAttribute("hidden","");
    document.getElementById("boton_calcular").setAttribute("hidden","");
    document.getElementById("marco").style.display = "none";
    document.getElementById("marco").setAttribute("hidden","");
    document.getElementById("datos").value="";
    document.getElementById("datos_ponderado").value="";
    var select = document.getElementById("calculos");
    select.value = "Seleccione";
}

/*FUNCION QUE ME BORRA LOS DIV DE SALIDA QUE NO NECESITO*/
function borrandito(){
    document.getElementById("label-ponderado").setAttribute("hidden","");
    document.getElementById("label-general").setAttribute("hidden","");
    document.getElementById("sol_general").setAttribute("hidden","");
    document.getElementById("sol_ponderado").setAttribute("hidden","");
    document.getElementById("cont_promedio").setAttribute("hidden","");
    document.getElementById("cont_moda").setAttribute("hidden","");
    document.getElementById("cont_mediana").setAttribute("hidden","");
    document.getElementById("contprom_ponderado").setAttribute("hidden","");
    document.getElementById("contsalida").setAttribute("hidden","");
}

/*FUNCION QUE ACTIVA EL DIV QUE PIDE LOS DATOS Y EL BOTON CALCULAR*/
function pedirdatos(){
    borrandito();
    document.getElementById("marco").removeAttribute("hidden");
    document.getElementById("marco").style.display = "inline-block";
    document.getElementById("boton_calcular").removeAttribute("hidden");
    var x = document.getElementById("calculos").value;
    if(x==1 || x==2 || x==3){
        document.getElementById("label-general").removeAttribute("hidden","");
        document.getElementById("sol_general").removeAttribute("hidden","");
    }else{
        document.getElementById("label-general").removeAttribute("hidden","");
        document.getElementById("sol_general").removeAttribute("hidden","");
        document.getElementById("label-ponderado").removeAttribute("hidden","");
        document.getElementById("sol_ponderado").removeAttribute("hidden","");
    }
}

/*FUNCION QUE CALCULA EL PROMEDIO*/
function promedio(lista){
    let suma=lista.reduce(
        function(valorAcumulado = 0, valorNuevo){
            return parseInt(valorAcumulado) + parseInt(valorNuevo);
        }
    );
    var promedio = suma/lista.length;
    promedio =round(promedio);
    return promedio;
}

/*FUNCION QUE CALCULA LA MODA*/
function moda(lista){
    const listacontador = {};
    lista.map(
        function(elemento){
            if(listacontador[elemento]){
                listacontador[elemento] += 1;
            }else{
                listacontador[elemento] = 1;
            }
        }
    );
    const listaarreglo = Object.entries(listacontador).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    var moda = listaarreglo[listaarreglo.length-1][0];
    moda = round(moda);
    return moda;
}

/*FUNCION QUE CALCULA LA MEDIANA*/
function mediana(lista){
    const listaordenada = lista.sort(
        function(elementoA, elementoB){
            return elementoA - elementoB;
        }
    );
    let tamano = lista.length;
    let valor = lista.length/2;
    if(tamano % 2 === 0){
        let valor1 = listaordenada[valor-1];
        let valor2 = listaordenada[valor];
        var promedio = (parseInt(valor1)+parseInt(valor2))/2;
    }else{
        let valoru = Math.ceil(valor);
        var promedio = listaordenada[valoru-1];
    }
    promedio = round(promedio);
    return promedio;
}

/*FUNCION QUE CALCULA EL PROMEDIO PONDERADO*/
function promedio_ponderado(lista, lista2){
    let porcentaje =[];
    for(i=0;i<lista2.length;i++){
        porcentaje[i]=lista2[i]/100;
    }
    var listafinal = lista.map((dato, ponderacion) => { 
        return dato*porcentaje[ponderacion];
    });
    let suma=listafinal.reduce(
        function(valorAcumulado = 0, valorNuevo){
            return valorAcumulado + valorNuevo;
        }
    );
    let suma2=porcentaje.reduce(
        function(valorAcumulado2 = 0, valorNuevo2){
            return valorAcumulado2 + valorNuevo2;
        }
    );
    suma = round(suma);
    suma2 = round(suma2);
    let promedio =suma/suma2;
    return promedio;
}

/*FUNCION QUE REDONDEA EL RESULTADO A DOS DECIMALES*/
function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

/*FUNCION QUE INVOCA LOS CALCULOS DE ACUERDO A LO SELECCIONADO*/ 
function calcular(){
    let value = document.getElementById('datos').value;
    let lista = value.split(',');
    var x = document.getElementById("calculos").value;
    if(x==1){
        resultado=promedio(lista);
        mostrar_resultado(resultado);
        document.getElementById("cont_promedio").removeAttribute("hidden","");
    }else{
        if(x==2){
            resultado = moda(lista);
            mostrar_resultado(resultado);
            document.getElementById("cont_moda").removeAttribute("hidden","");
        }else{
            if(x==3){
                resultado = mediana(lista);
                mostrar_resultado(resultado);
                document.getElementById("cont_mediana").removeAttribute("hidden","");
            }
            else{
                let value2 = document.getElementById('datos_ponderado').value;
                let lista2 = value2.split(',');
                const val = validar(lista, lista2);
                if(val == 1){
                    resultado = promedio_ponderado(lista, lista2);
                    mostrar_resultado(resultado);           
                    document.getElementById("label-ponderado").removeAttribute("hidden","");
                    document.getElementById("sol_ponderado").removeAttribute("hidden","");
                    document.getElementById("contprom_ponderado").removeAttribute("hidden","");
                }else{
                    if(val == 2){
                        alert("Error: La cantidad de datos ingresada debe coincidir con la cantidad de ponderados ingresados");
                    }else{
                        alert("Error: la Suma de los ponderados ingresados debe dar 100 o 1");
                    }
                }
            }
        }
    }

    /*FUNCION QUE VALIDA LA CORRECTA CARGA DE DATOS PARA EL PROMEDIO PONDERADO*/
    function validar(lista, ponderados){
        let cantdatos = lista.length;
        let cantponderados = ponderados.length;
        if(cantdatos == cantponderados){
            val1 = 1;
        }else{
            val1 = 2;
        }
        if(val1 == 1){
            let suma=ponderados.reduce(
                function(valorAcumulado = 0, valorNuevo){
                    return parseInt(valorAcumulado) + parseInt(valorNuevo);
                }
            );
            if(suma==100 || suma == 1){
                return 1;
            }
            else{
                return 3;
            }
        }else{
            return 2;
        }
    }
    
    /*FUNCION QUE MUESTRA LOS RESULTADOS*/
    function mostrar_resultado(resultado){
        borrandito();
        document.getElementById("label-general").removeAttribute("hidden","");
        document.getElementById("sol_general").removeAttribute("hidden","");
        document.getElementById("boton_borrar").removeAttribute("hidden","");
        document.getElementById("contsalida").removeAttribute("hidden","");
        document.getElementById("salida").innerHTML = resultado;
    }
}

