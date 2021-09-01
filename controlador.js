//CONTROLAR LA ACTIVIDAD DEL FORMULARIO
let nombreRevuelto;
let precioRevuelto;
let pesoRevuelto;
let fotoRevuelto;

let moneda=true;

//1. Controlar con JS el boton del formulario
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");

//2. Detectar el clic en el boton
boton.addEventListener("click",capturarDatos);
botonLimpiar.addEventListener("click",limpiarCarrito);

//3. Crear funcion PROPIA que se llamo en el punto 2
function capturarDatos(){

    //4. Capturar los valores del formulario
    // creo tantas variables como valores del formulario

    let revueltoElegido=document.getElementById("productos").value;
    seleccionarRevuelto(revueltoElegido);

    let cantidad=document.getElementById("cantidad").value;
    
    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible");

    
    let direccion=document.getElementById("comentarios").value;
    
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoRevuelto;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreRevuelto;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioRevuelto} USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso unitario: ${pesoRevuelto} Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso Total del envio: ${pesoRevuelto*cantidad}Lb`;
    
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoRevuelto,cantidad)} USD`;
    
    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${calcularCostoImpuestos(precioRevuelto,cantidad)}`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoRevuelto,cantidad))+(calcularCostoImpuestos(precioRevuelto,cantidad))} USD`;


    let botonCOP=document.getElementById("botonCOP");
    botonCOP.classList.remove("invisible");
    botonCOP.classList.add("visible");

    botonCOP.addEventListener("click",CambiarMoneda);


}

//5. Seleccionar la información del Revuelto segun la selección del usuario
function seleccionarRevuelto(opcion){

    let revuelto={
        nombres:Array("Papa", "Fresas", "Zanahoria", "Arracacha", "Borojo ", "Tomate", "Yuca", "Chontaduro", "Ñame","Mamoncillos", "Ochuvas", "Durian", "Carambolo", "Coliflor", "Remolacha"),
        precios:Array(5,10,5,11,12,7,6,14,13,15,9,10,12,7,6),
        pesos:Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1),
        fotos:Array("https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true",
        "https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true",
        "https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true"),
        
    }

    if(opcion==1){

        nombreRevuelto=revuelto.nombres[0];
        precioRevuelto=revuelto.precios[0];
        pesoRevuelto=revuelto.pesos[0];
        fotoRevuelto=revuelto.fotos[0];

    }else if(opcion==2){
        
        nombreRevuelto=revuelto.nombres[1];
        precioRevuelto=revuelto.precios[1];
        pesoRevuelto=revuelto.pesos[1];
        fotoRevuelto=revuelto.fotos[1];

    }else if(opcion==3){
        
        nombreRevuelto=revuelto.nombres[2];
        precioRevuelto=revuelto.precios[2];
        pesoRevuelto=revuelto.pesos[2];
        fotoRevuelto=revuelto.fotos[2];

    }else if(opcion==4){
        
        nombreRevuelto=revuelto.nombres[3];
        precioRevuelto=revuelto.precios[3];
        pesoRevuelto=revuelto.pesos[3];
        fotoRevuelto=revuelto.fotos[3];

    }else if(opcion==5){
        
        nombreRevuelto=revuelto.nombres[4];
        precioRevuelto=revuelto.precios[4];
        pesoRevuelto=revuelto.pesos[4];
        fotoRevuelto=revuelto.fotos[4];

    }else if(opcion==6){
        
        nombreRevuelto=revuelto.nombres[5];
        precioRevuelto=revuelto.precios[5];
        pesoRevuelto=revuelto.pesos[5];
        fotoRevuelto=revuelto.fotos[5];

    }else if(opcion==7){
        
        nombreRevuelto=revuelto.nombres[6];
        precioRevuelto=revuelto.precios[6];
        pesoRevuelto=revuelto.pesos[6];
        fotoRevuelto=revuelto.fotos[6];

    }else if(opcion==8){
        
        nombreRevuelto=revuelto.nombres[7];
        precioRevuelto=revuelto.precios[7];
        pesoRevuelto=revuelto.pesos[7];
        fotoRevuelto=revuelto.fotos[7];

    }else if(opcion==9){
        
        nombreRevuelto=revuelto.nombres[8];
        precioRevuelto=revuelto.precios[8];
        pesoRevuelto=revuelto.pesos[8];
        fotoRevuelto=revuelto.fotos[8];

    }else if(opcion==10){
        
        nombreRevuelto=revuelto.nombres[9];
        precioRevuelto=revuelto.precios[9];
        pesoRevuelto=revuelto.pesos[9];
        fotoRevuelto=revuelto.fotos[9];

    }else if(opcion==11){
        
        nombreRevuelto=revuelto.nombres[10];
        precioRevuelto=revuelto.precios[10];
        pesoRevuelto=revuelto.pesos[10];
        fotoRevuelto=revuelto.fotos[10];

    }else if(opcion==12){
        
        nombreRevuelto=revuelto.nombres[11];
        precioRevuelto=revuelto.precios[11];
        pesoRevuelto=revuelto.pesos[11];
        fotoRevuelto=revuelto.fotos[11];

    }else if(opcion==13){
        
        nombreRevuelto=revuelto.nombres[12];
        precioRevuelto=revuelto.precios[12];
        pesoRevuelto=revuelto.pesos[12];
        fotoRevuelto=revuelto.fotos[12];

    }else if(opcion==14){
        
        nombreRevuelto=revuelto.nombres[13];
        precioRevuelto=revuelto.precios[13];
        pesoRevuelto=revuelto.pesos[13];
        fotoRevuelto=revuelto.fotos[13];

    }else if(opcion==15){
        
        nombreRevuelto=revuelto.nombres[14];
        precioRevuelto=revuelto.precios[14];
        pesoRevuelto=revuelto.pesos[14];
        fotoRevuelto=revuelto.fotos[14];

    }else{
        nombreRevuelto=null;
        precioRevuelto=null;
        pesoRevuelto=null;
        fotoRevuelto=null;

    }


}

function calcularCostoCasillero(pesoRevuelto,cantidad){

    let costoCasillero=0;
    let pesoTotalEnvio=pesoRevuelto*cantidad;

    if(pesoTotalEnvio<=15){

        costoCasillero=20;

    }else{ 

        let pesoExtra=pesoTotalEnvio-15;
        costoCasillero=20+(pesoExtra*2);

    }
    
    return costoCasillero;
}

function calcularCostoImpuestos(precioRevuelto,cantidad){

    const IMPUESTO_PAIS=25;
    const VALOR_SEGURO=7;

    let costoCompra=precioRevuelto*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;

} 


function limpiarCarrito(){

    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src="https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/fotoCarrito.PNG?raw=true";

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent="Tu Carrito de Amazon está vacío";

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent="";

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent="";

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=""
    
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent="";
    
    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent="";

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent="";

    let pildora=document.getElementById("pildora");
    pildora.textContent="";
    pildora.classList.remove("visible");
    pildora.classList.add("invisible");

    let botonCOP=document.getElementById("botonCOP");
    botonCOP.classList.remove("visible");
    botonCOP.classList.add("invisible");


}

function CambiarMoneda(){
    if(moneda){

        convertirFacturaCOP()

    }else{

        convertirFacturaDolares()

    }
}

function convertirFacturaCOP(){

    moneda=false;
    let botonCOP=document.getElementById("botonCOP");
    botonCOP.textContent="USD ($)"

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${convertiraPesos(precioRevuelto)} COP`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${convertiraPesos(calcularCostoCasillero(pesoRevuelto,cantidad))} COP`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${convertiraPesos(calcularCostoImpuestos(precioRevuelto,cantidad))} COP`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${convertiraPesos((calcularCostoCasillero(pesoRevuelto,cantidad))+(calcularCostoImpuestos(precioRevuelto,cantidad)))} COP`;

}

function convertirFacturaDolares(){

    moneda=true;

    let botonCOP=document.getElementById("botonCOP");
    botonCOP.textContent="COP ($)"

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioRevuelto} USD`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoRevuelto,cantidad)} USD`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${calcularCostoImpuestos(precioRevuelto,cantidad)} USD`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoRevuelto,cantidad))+(calcularCostoImpuestos(precioRevuelto,cantidad))} USD`;

}


function convertiraPesos(precioDolares){
    
    const TRM=3932; //3932 pesos equivalen a 1 dolar
    let precioPesos= precioDolares*TRM;

    return precioPesos;



}