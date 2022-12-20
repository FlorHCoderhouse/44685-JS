const btnSaludoGenerico = document.getElementById('generico'),
    btnSaludoPersonalizado = document.getElementById('personalizado'),
    titulo = document.querySelector('.codertitulo'),
    btnTest = document.getElementById('prueba'),
    inputNombre = document.querySelector('#inputNombre'),
    caja = document.querySelector('.embajada'),
    inputPassword = document.querySelector('#inputPassword'),
    fotoBotellas = document.getElementById('imgBotellas');


function saludarGenerico() {
    alert("Hola!");
}

/* 
//Primera opción, usar el método addEventListener
//Podemos nombrar el evento que queremos escuchar, así (acá es el evento 'click')
btnSaludoGenerico.addEventListener('click', saludarGenerico);

//O podemos guardar el nombre del evento en una variable y pasarlo así al addEventListener
let evento = 'click';
btnSaludoGenerico.addEventListener(evento, saludarGenerico); */




//Segunda opción, usar la propiedad on (onclick, onmousemove, onkeypress, onchange, etc)
btnSaludoGenerico.onclick = saludarGenerico;

btnSaludoPersonalizado.onclick = () => {
    saludarPersonalizado('Eli')
}

function saludarPersonalizado(nombre) {
    alert('Hola, ' + nombre);
}

/* //No puedo pasar funciones que precisan parámetros directamente al addEventListener
btnSaludoPersonalizado.addEventListener('click',saludarPersonalizado('Flor')); */

/* btnSaludoPersonalizado.addEventListener('click', ()=>{
    let nombre = prompt('Ingresa tu nombre');
    saludarPersonalizado(nombre);
}) */

//Acá capturo el valor de un input para mostrar el nombre en el saludo
btnSaludoPersonalizado.addEventListener('click', () => {
    let nombre = inputNombre.value;
    saludarPersonalizado(nombre);
});

/* 
//Sirve para cualquier elemento clickeable, no sólo botones
titulo.addEventListener('click', saludarGenerico);

//Puedo poner varias tareas a realizarse al momento de que suceda el evento
btnTest.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
    saludarGenerico();
}) */


/* //Eventos Mouse
btnTest.onclick = () => {
    console.log('Hiciste click en el boton');}

btnTest.onmousemove = () => {
    console.log('Moviste el mouse por acá');
}

caja.onmouseover = () => {
    caja.style.backgroundImage = 'url("./img/estados.jpg")';
    console.log('Estados Unidos');
}

caja.onmouseout = () => {
    caja.style.backgroundImage = 'url("./img/australia.jpg")';
    console.log('Australia');

} */


let radios = document.querySelectorAll('input[type="radio"]')
console.log(radios);

/* //Atención que esta línea no funciona, porque no podemos agregar de una sola vez el evento a todos los elementos del nodeList
radios.addEventListener(('click', () => {
    console.log('Hiciste click en el radiobutton');
})) */

/* //Así se agregan eventos a un nodeList
radios.forEach(item=>{
    item.addEventListener('click',()=>{
        console.log('Hiciste click en el radiobutton '+item.value);
    })
}) */

/* //O con un for...of
for (const radio of radios) {
    radio.addEventListener('click',()=>{
        console.log('Hiciste click en el radiobutton '+radio.value);
    })
} */

/* //Ejemplo aplicado
function cambiarImagen(elemento, source) {
    elemento.src = source;
}

const botellas = [{
    id: 1,
    nombre: 'Tupperware Twist 500',
    color: 'rosa',
    imagen: './img/rosa.webp'
}, {
    id: 2,
    nombre: 'Tupperware Twist 500',
    color: 'azul',
    imagen: './img/azul.webp'
}, {
    id: 3,
    nombre: 'Tupperware Twist 500',
    color: 'naranja',
    imagen: './img/naranja.webp'
}, {
    id: 4,
    nombre: 'Tupperware Twist 500',
    color: 'verde',
    imagen: './img/verde.webp'
}]

radios.forEach(item => {
    item.addEventListener('click', () => {
        let colorUsuario = item.value;
        let variante = botellas.find((botella) => botella.color == colorUsuario);
        cambiarImagen(fotoBotellas, variante.imagen);
    })
}) */

//Eventos teclado
inputPassword.addEventListener('keydown', () => {
    console.log(inputPassword.value);
})

inputPassword.addEventListener('keyup', () => {
    console.log(inputPassword.value);
})

//Evento onchange de inputs
inputNombre.onchange = () => {
    console.log(inputNombre.value);
}

//Información del evento
inputPassword.addEventListener('keypress', (evento) => {
    let codCaracter = evento.charCode;
    if (codCaracter != 0) {
        if (codCaracter < 97 || codCaracter > 122) {
            evento.preventDefault();
            alert("Solo podes usar minusculas");
        }
    }
})



//Ejemplo aplicado para filtrar de manera dinámica mientras el usuario escribe
let contenedorTarjetas = document.querySelector('.contenedorTarjetas');

let catalogo = [{
    id: 1,
    categoria: 'TELEVISORES',
    nombre: 'SMART TV SAMSUNG 32"HD',
    codigo: 'UN32T4300AGCZB',
    precio: 65000,
    imagen: './img/TV32.jpg',
    descripcion_corta: 'Led Smart TV 32"',
    descripcion: 'Led Smart TV 32" HD. Resolucion 1366x768PX. Sintonizador TDA. Brilllo 250 CD/M2. Frecuencia de barrido 60HZ. Sonido Stereo. Potencia RMS 10W. Wi Fi. HDMI. USB. Salidas de audio Optical. Entrada de video componente.'
}, {
    id: 2,
    categoria: 'HELADERAS',
    nombre: 'HELADERA SIDE BY SIDE PHILCO',
    codigo: 'PHSB530XT',
    precio: 390000,
    imagen: './img/heladera.png',
    descripcion_corta: 'Heladera side by side',
    descripcion: 'Heladera Side By Side. Cap.bruta 584L/neta 527L. Color Acero Inoxidable. Controles externos c/display Digital. Fabricadora de Hielo. Alarma de puerta abierta. Luz LED. Estantes de vidrio. Modo vacaciones. EE: A+.'
}, {
    id: 3,
    categoria: 'AIRE ACONDICIONADO',
    nombre: 'AIRE ACONDICIONADO SPLIT SURREY FRIO/CALOR 3001 FRIGORIAS',
    codigo: '553BFQ1201F',
    precio: 134999,
    imagen: './img/aacc.jpg',
    descripcion_corta: 'A/C Split frío/calor',
    descripcion: 'Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.'

},
{
    id: 4,
    categoria: 'AIRE ACONDICIONADO',
    nombre: 'AIRE ACONDICIONADO SPLIT SURREY SOLO FRIO 2700 FRIGORIAS',
    codigo: '553BFQ1201F',
    precio: 99999,
    imagen: './img/aacc.jpg',
    descripcion_corta: 'A/C Split frío/calor',
    descripcion: 'Split PRIA EVOLUTION. Sólo frío de 2700 frigorias. Display. Selector de Temperaturas. Eficiencia Energetica:A+.'

}];

function crearTarjetas(array, contenedor) {
    contenedor.innerHTML = '';
    for (const item of array) {
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
        contenedor.append(tarjeta)
    }

}

function buscar(array, criterio, input) {
    return array.filter((item) => item[criterio].includes(input))
}

crearTarjetas(catalogo, contenedorTarjetas);

let busqueda = document.querySelectorAll('.inputBusqueda');

busqueda.forEach(input => {
    input.addEventListener('input', () => {
        let cadena = (input.value).toUpperCase();
        console.log(cadena);
        crearTarjetas(buscar(catalogo, input.id, cadena), contenedorTarjetas);
    })
    /*    
    //Acá puedo limpiar el input cada vez que me salgo
    input.onblur=()=>{
            input.value='';
        } */
});