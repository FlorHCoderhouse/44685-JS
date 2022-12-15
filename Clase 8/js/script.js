/* let primerNodo = document.head;
console.log(primerNodo);
let segundoNodo = document.body;
console.log(segundoNodo); */

/* let elementoID = document.getElementById('parrafoEspecial');
console.log(elementoID);

let elementosClass=document.getElementsByClassName('resaltado');
console.log(elementosClass);

let elementosTag = document.getElementsByTagName('p');
console.log(elementosTag);

//recorrer HTMLCollections
let elementosClassRecorrer=document.getElementsByClassName('col-md-5');

for (const elemento of elementosClassRecorrer) {
    console.log(elemento.innerHTML);  
}

let elementoQS = document.querySelector('span.resaltado');
console.log(elementoQS);

let todosQS = document.querySelectorAll("span.resaltado");
console.log(todosQS);

let especificoQS = document.querySelectorAll("input[type='text']");
console.log(especificoQS); */

let titulo = document.getElementById('tituloPrincipal');

/* titulo.innerText = 'Nuevo título';
titulo.className = 'bg-success text-light'; */

/* let nuevoTitulo = prompt('Ingresa el nuevo título de la web');
titulo.innerText = nuevoTitulo; 
 */

/* let nombreUsuario = document.getElementById('nombreUsuario');
let nuevoNombre = prompt('Ingresá tu nombre');
nombreUsuario.innerText=nuevoNombre; */

/* 
 //Acá cambio el atributo src de una imagen
let imagen = document.getElementById('imagen');
let colorElegido = prompt('Elegí una imagen: \n1-Info sobre DOM en fondo blanco \n2-Info sobre DOM en fondo negro');

if (colorElegido == '1') {
    imagen.src = './img/domWhite.png';
} else if (colorElegido == '2') {
    imagen.src = './img/domBlack.jpg';
} else {
    alert('Elección inválida');
    imagen.src = './img/404.webp';
} */

/* let contenedor = document.querySelector('#teoria');
contenedor.innerHTML +='<p>Soy un nuevo párrafo agregado a través del método innerHTML. Debería aparecer luego de la imagen de DOM. </p>';*/

/* //Crear y agregar un elemento
let nuevoDiv = document.createElement('div');
document.body.appendChild(nuevoDiv);
nuevoDiv.innerHTML = '<footer class="container-fluid bg-warning text-light py-5"><span>Flor Hendel 2022</span></footer>';
//appendChild() sólo nos deja agregar nodos element. Si quiero agregar una cadena de texto y/o un nodo element, puedo usar append() para añadir al final y prepend() para añadir al principio del elemento padre
document.body.append('Soy un texto suelto, me llamo DOMString'); */

/*
//Eliminar un elemento
let imagen = document.querySelector('#imagen');
imagen.remove(); */

let producto ={
    id: 1,
    nombre: 'SMART TV SAMSUNG 32"HD',
    codigo: 'UN32T4300AGCZB',
    precio: 65000,
    imagen: './img/TV32.jpg',
    descripcion_corta: 'Led Smart TV 32"',
    descripcion: 'Led Smart TV 32" HD. Resolucion 1366x768PX. Sintonizador TDA. Brilllo 250 CD/M2. Frecuencia de barrido 60HZ. Sonido Stereo. Potencia RMS 10W. Wi Fi. HDMI. USB. Salidas de audio Optical. Entrada de video componente.'
}

/* 
//Usando concatenacion de strings
let concatenado = "ID: " + producto.id + " - Producto: " + producto.nombre + " - $" + producto.precio;
console.log(concatenado);

//Usando plantillas literales
let plantilla = `ID: ${producto.id} - Producto: ${producto.nombre} - $${producto.precio}`;
console.log(plantilla);
 */

//Ejemplo integrador de los conceptos. Crear una tarjeta de manera dinámica, en base a los atributos de un objeto.
let contenedorTarjetas = document.querySelector('.contenedorTarjetas');

/* let entrada = prompt('Ingresa tu nombre');
let contSaludo = document.querySelector('.tienda .saludo');
contSaludo.innerText = `Hola ${entrada}, estos son los productos que tenemos para vos:` */

/* let tarjeta = document.createElement('div');
tarjeta.className = 'card my-5 bg-light';
tarjeta.id = `${producto.id}`;
tarjeta.innerHTML = `<h4 class="card-header">${producto.nombre}</h4>
<img src="${producto.imagen}" class="card-img-top imagenProducto" alt="${producto.descripcion_corta}">
<div class="card-body">
    <p class="card-text">${producto.descripcion}</p>
    <span class="resaltado" id="precio">$ ${producto.precio}</span>
</div>
<div class="card-footer"><a href="#" class="btn btn-primary">Comprar</a></div>`;
contenedorTarjetas.append(tarjeta) */


//Hacemos lo mismo, pero con un array de productos
let catalogo = [{
    id: 1,
    nombre: 'SMART TV SAMSUNG 32"HD',
    codigo: 'UN32T4300AGCZB',
    precio: 65000,
    imagen: './img/TV32.jpg',
    descripcion_corta: 'Led Smart TV 32"',
    descripcion: 'Led Smart TV 32" HD. Resolucion 1366x768PX. Sintonizador TDA. Brilllo 250 CD/M2. Frecuencia de barrido 60HZ. Sonido Stereo. Potencia RMS 10W. Wi Fi. HDMI. USB. Salidas de audio Optical. Entrada de video componente.'
}, {
    id: 2,
    nombre: 'HELADERA SIDE BY SIDE PHILCO',
    codigo: 'PHSB530XT',
    precio: 390000,
    imagen: './img/heladera.png',
    descripcion_corta: 'Heladera side by side',
    descripcion: 'Heladera Side By Side. Cap.bruta 584L/neta 527L. Color Acero Inoxidable. Controles externos c/display Digital. Fabricadora de Hielo. Alarma de puerta abierta. Luz LED. Estantes de vidrio. Modo vacaciones. EE: A+.'
},{d: 3,
    nombre: 'AIRE ACONDICIONADO SPLIT SURREY FRIO/CALOR 3001 FRIGORIAS',
    codigo: '553BFQ1201F',
    precio: 134999,
    imagen: './img/aacc.jpg',
    descripcion_corta: 'A/C Split frío/calor',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

}];


for (const item of catalogo) {
    let tarjeta = document.createElement('div');
    tarjeta.className = 'card my-5 bg-light';
    tarjeta.id = `${item.id}`;
    tarjeta.innerHTML = `
    <h4 class="card-header">${item.nombre}</h4>
    <img src="${item.imagen}" class="card-img-top imagenProducto" alt="${item.descripcion_corta}">
    <div class="card-body">
        <p class="card-text">${item.descripcion}</p>
        <span id="precio">$ ${item.precio}</span>
    </div>
    <div class="card-footer"><a href="#" class="btn btn-primary">Comprar</a></div>`;
    contenedorTarjetas.append(tarjeta)
}

