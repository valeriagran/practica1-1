//CONTROLAR LA ACTIVIDAD DEL FROMULARIO 

let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola;



//1. Controlar con JS el boton del formulario
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");
let cop=document.getElementById("cop");


//2. Detectar el click en el boton
boton.addEventListener("click",capturarDatos);
let hrc=document.getElementById("hrc");


botonLimpiar.addEventListener("click",limpiarCarrito);

cop.addEventListener("click",conversion);

//3. Crear funcion PROPIA que se llamo en el punto 2
function capturarDatos(){

    //4. Capturar los valores del formuario 
    //Creo tantas vaiables como valores del formulario

    let consolaElegida=document.getElementById("productos").value;
    seleccionarConsola(consolaElegida);

    let cantidad=document.getElementById("cantidad").value;

    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible");

    cop.classList.remove("invisible");
    cop.classList.add("visible");
   
    let direccion=document.getElementById ("comentarios").value;

    let fotoCarrito=document.getElementById("foto carrito");
    fotoCarrito.src=fotoConsola;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreConsola;

    let precioIndividual=document.getElementById("precioUniCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioConsola} USD`;

    let pesoIndividual=document.getElementById("pesoUniCarrito");
    pesoIndividual.textContent=`Peso unitario: ${pesoConsola} Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso Total de la Compra: ${pesoConsola*cantidad} Lb`;
    
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo casillero: $${calCostoCasillero(pesoConsola,cantidad)} USD`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta (impuestos):$${calcularCostoImpuestos(precioConsola, cantidad)}`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad))} USD`;

    let hrc1=document.getElementById("hrc1");
    let hrc=document.getElementById("hrc");
    hrc.classList.remove("invisible");
    hrc1.classList.remove("invisible");
}


//5. Seleccionar la informacion de la consola segun la seleccion del usuario
function seleccionarConsola(opcion){

    let consolas={
        nombres:Array("XBOX Series X","Nintendo Switch","PS5","PC"),
        precios:Array(750,700,409,5250),
        pesos:Array(14.2,13.1,4.75,5.51),
        fotos:Array("img/carrucel1.jpg","img/carucel2.jpg","img/carrucel3.jpg","img/pc.jpg")
        
    }

    if(opcion==1){

        nombreConsola=consolas.nombres[0];
        precioConsola=consolas.precios[0];
        pesoConsola=consolas.pesos[0];
        fotoConsola=consolas.fotos[0];

    }
    else if(opcion==2){

        nombreConsola=consolas.nombres[1];
        precioConsola=consolas.precios[1];
        pesoConsola=consolas.pesos[1];
        fotoConsola=consolas.fotos[1];

    }
    else if(opcion==3){

        nombreConsola=consolas.nombres[2];
        precioConsola=consolas.precios[2];
        pesoConsola=consolas.pesos[2];
        fotoConsola=consolas.fotos[2];

    }
    else if(opcion==4){

        nombreConsola=consolas.nombres[3];
        precioConsola=consolas.precios[3];
        pesoConsola=consolas.pesos[3];
        fotoConsola=consolas.fotos[3];

    }
    else{

        nombreConsola=null;
        precioConsola=null;
        pesoConsola=null;
        fotoConsola=null;

    }
}

//6. Calcular el costo del casillero 
function calCostoCasillero(pesoConsola, cantidad){

    let costoCasillero=0;

    let pesoTotalEnvio=pesoConsola*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;

    }
    else{

        let pesoExtra=pesoTotalEnvio-20;

        costoCasillero=85+(pesoExtra*2);

    }

    return costoCasillero;

}

function calcularCostoImpuestos(costoConsola,cantidad){
    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=costoConsola*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;
} 

function limpiarCarrito(){

    console.log("hiciste clic en limpiar");

    let fotoCarrito=document.getElementById("foto carrito");
    fotoCarrito.src="img/amazon.svg";

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent="Tu carro de Amazon esta vacio   ";

    let precioIndividual=document.getElementById("precioUniCarrito");
    precioIndividual.textContent=null;

    let pesoIndividual=document.getElementById("pesoUniCarrito");
    pesoIndividual.textContent=null;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=null;
    
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=null;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=null;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=null;
    
    let hrc1=document.getElementById("hrc1");
    hrc1.classList.add("invisible");

    let hrc=document.getElementById("hrc");
    hrc.classList.add("invisible");
    
    pildora.classList.add("invisible");
    pildora.classList.remove("visible");

    cop.classList.add("invisible");
    cop.classList.remove("visible");


}

function COP(dolares){
    const TRM=3959;

    let pcop = dolares*TRM;

    return pcop;
}

function conversion(){

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUniCarrito");
    precioIndividual.textContent=`Costo unitario: $${COP(precioConsola)} COP`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo casillero: $${COP(calCostoCasillero(pesoConsola,cantidad))} COP`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${COP(calCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad))} COP`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta (impuestos):$${COP(calcularCostoImpuestos(precioConsola, cantidad))}`;

}