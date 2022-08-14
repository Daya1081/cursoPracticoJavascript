//SEGUNDA PRACTICA CALCULADORA DE DESCUENTOS

//document.getElementById("productos").style.border = "thin dotted red";
//document.getElementById("productos").style.borderRadius = "25px";
document.getElementById("marco").setAttribute("hidden","");
document.getElementById("precio_descuento").setAttribute("hidden","");
document.getElementById("cupones1").setAttribute("hidden","");
document.getElementById("cupones2").setAttribute("hidden","");
document.getElementById("cupones3").setAttribute("hidden","");
var elemento = document.getElementById('precio_descuento');
elemento.classList.remove('salida');
var elemento = document.getElementById('precio_descuentocupon');
elemento.classList.remove('salida');

function infoProductos(){
    document.getElementById("marco").removeAttribute("hidden");
    document.getElementById("marco").style.display = "inline-block";
    var x = document.getElementById("productos").value;
    var select = document.getElementById("productos");
    var options = select.getElementsByTagName("option"); //Te regresa un arrego con todos los options de tu select
    var optionHTML = options[select.selectedIndex].innerHTML;  //Te regresa el innetHTML del option seleccionado
    document.getElementById("nom_prod").setAttribute("readonly", "readonly"); 
    document.getElementById("precio_pro").setAttribute("readonly", "readonly"); 
    if(x==1){
        document.getElementById("cupones1").removeAttribute("hidden");
        document.getElementById("cupones2").setAttribute("hidden","");
        document.getElementById("cupones3").setAttribute("hidden","");
        document.getElementById("nom_prod").innerHTML = optionHTML;
        document.getElementById("precio_pro").innerHTML = 35000;
        var elem = document.getElementById('imagen');
        elem.classList.add('imagen1'); 
        elem.classList.remove('imagen2');
        elem.classList.remove('imagen3');
        document.getElementById("precio_descuento").innerHTML="";
        document.getElementById("desc_pro").value="";
        document.getElementById("precio_descuento").setAttribute("hidden","");
        var elemento = document.getElementById('precio_descuento');
        elemento.classList.remove('salida');
        var elemento = document.getElementById('precio_descuentocupon');
        elemento.classList.remove('salida');
        document.getElementById("precio_descuentocupon").innerHTML="";
    }else{
        if(x==2){
            document.getElementById("cupones2").removeAttribute("hidden");
            document.getElementById("cupones1").setAttribute("hidden","");
            document.getElementById("cupones3").setAttribute("hidden","");
            document.getElementById("nom_prod").innerHTML = optionHTML;
            document.getElementById("precio_pro").innerHTML = 48200;
            var elem = document.getElementById('imagen');
            elem.classList.add('imagen2'); 
            elem.classList.remove('imagen1');
            elem.classList.remove('imagen3');
            document.getElementById("precio_descuento").innerHTML="";
            document.getElementById("desc_pro").value="";
            document.getElementById("precio_descuento").setAttribute("hidden","");
            var elemento = document.getElementById('precio_descuento');
            elemento.classList.remove('salida');
            var elemento = document.getElementById('precio_descuentocupon');
            elemento.classList.remove('salida');
            document.getElementById("precio_descuentocupon").innerHTML="";
        }else{
            document.getElementById("cupones3").removeAttribute("hidden");
            document.getElementById("cupones2").setAttribute("hidden","");
            document.getElementById("cupones1").setAttribute("hidden","");
            document.getElementById("nom_prod").innerHTML = optionHTML;
            document.getElementById("precio_pro").innerHTML = 28450;
            var elem = document.getElementById('imagen');
            elem.classList.add('imagen3'); 
            elem.classList.remove('imagen1');
            elem.classList.remove('imagen2');
            document.getElementById("precio_descuento").innerHTML="";
            document.getElementById("desc_pro").value="";
            document.getElementById("precio_descuento").setAttribute("hidden","");
            var elemento = document.getElementById('precio_descuento');
            elemento.classList.remove('salida');
            var elemento = document.getElementById('precio_descuentocupon');
            elemento.classList.remove('salida');
            document.getElementById("precio_descuentocupon").innerHTML="";
        }
    }
}

function calcular_descuento(){
    var precio_original = document.getElementById("precio_pro").innerHTML;
    var descuento = document.getElementById("desc_pro").value;
    var porcentaje = descuento / 100;
    var desc = precio_original * porcentaje;
    var precio_descuento = precio_original - desc;
    document.getElementById("precio_descuento").removeAttribute("hidden");
    var elemento = document.getElementById('precio_descuento');
    elemento.classList.add('salida');
    document.getElementById("precio_descuento").innerHTML = "Precio con descuento: " + precio_descuento;
}
function salir(){
    var pagina = 'menu.html';
    document.location.href=pagina;
}
function calc_precio_cupones(){
    var precio_original = document.getElementById("precio_pro").innerHTML;
    var x = document.getElementById("productos").value;
    if(x==1){
        var quien=document.getElementById("cupones1").value;
    }else{
        if(x==2){
            var quien=document.getElementById("cupones2").value;
        }else{
            var quien=document.getElementById("cupones3").value;
        }
    }
    if(document.getElementById("desc_pro").value!=0){
        var descuento = document.getElementById("desc_pro").value;
        var porcentaje = descuento / 100;
        var desc = precio_original * porcentaje;
        var precio_descuento = precio_original - desc;
        var porcentaje2 = quien / 100;
        var desc2 = precio_descuento * porcentaje2;
        var precio_descuento2 = precio_descuento - desc2;
    }else{
        var porcentaje2 = quien / 100;
        var desc2 = precio_original * porcentaje2;
        var precio_descuento2 = precio_original - desc2;
    }
    document.getElementById("precio_descuentocupon").removeAttribute("hidden");
    var elemento = document.getElementById('precio_descuentocupon');
    elemento.classList.add('salida');
    document.getElementById("precio_descuentocupon").innerHTML = "Descuento con cupon: " + precio_descuento2;
}