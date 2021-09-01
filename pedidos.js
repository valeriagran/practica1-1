let pedidos=[
    
    {
        id:1,
        nombre:"Papa",
        precio:5,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:2,
        nombre:"Fresas",
        precio:10,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },
    
    {
        id:3,
        nombre:"Zanahoria",
        precio:5,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:4,
        nombre:"Arracacha",
        precio:11,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:5,
        nombre:"Borojo",
        precio:12,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:6,
        nombre:"Tomate",
        precio:7,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },
  
    {
        id:7,
        nombre:"Yuca",
        precio:6,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:8,
        nombre:"Chontaduro",
        precio:14,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:9,
        nombre:"Ñame",
        precio:13,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:10,
        nombre:"Mamoncillos",
        precio:15,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:11,
        nombre:"Ochuvas",
        precio:9,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:12,
        nombre:"Durian",
        precio:10,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:13,
        nombre:"Carambolo",
        precio:12,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:14,
        nombre:"Coliflor",
        precio:7,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:15,
        nombre:"Remolacha",
        precio:6,
        peso:1,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    }

];

let contenedorPadre= document.getElementById("padre");

pedidos.forEach(function(pedido){

    let columna=document.createElement("div");
    columna.classList.add("col");

    let cuerpo=document.createElement("div");
    cuerpo.classList.add("card");
    cuerpo.classList.add("h-100");

    let img=document.createElement("img")
    img.classList.add("card-img-top");
    img.src=pedido.foto;

    let cabeza=document.createElement("div");
    cabeza.classList.add("card-body");

    let h5=document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent=`${pedido.nombre}`;;

    let p=document.createElement("p")
    p.classList.add("card-text");
    p.textContent=`Precio: ${pedido.precio} USD`;

    let cuerpoT=document.createElement("p");
    cuerpoT.classList.add("card-text");
    cuerpoT.textContent=`Cantidad: ${pedido.cantidad}`;

    let boton1=document.createElement("button");
    boton1.classList.add("btn");
    boton1.classList.add("btn-info");
    boton1.classList.add("align-self-left");
    boton1.textContent=("Editar");


    let boton2=document.createElement("button");
    boton2.classList.add("btn");
    boton2.classList.add("btn-danger");
    boton2.textContent=("Eliminar");
    
    contenedorPadre.appendChild(columna);
    columna.appendChild(cuerpo);
    cuerpo.appendChild(img);
    cuerpo.appendChild(cabeza);
    cabeza.appendChild(h5);
    cabeza.appendChild(p);
    cabeza.appendChild(cuerpoT);
    cabeza.appendChild(boton1);
    cabeza.appendChild(boton2);
    
    
});

console.log(pedidos);