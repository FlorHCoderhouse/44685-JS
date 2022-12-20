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

function saludarPersonalizado(nombre) {
    alert('Hola, ' + nombre);
}

/* 
//Primera opción, usar el método addEventListener
//Podemos nombrar el evento que queremos escuchar, así (acá es el evento 'click')
btnSaludoGenerico.addEventListener('click', saludarGenerico);

//O podemos guardar el nombre del evento en una variable y pasarlo así al addEventListener
let evento = 'click';
btnSaludoGenerico.addEventListener(evento, saludarGenerico); */


/*
//Segunda opción, usar la propiedad on (onclick, onmousemove, onkeypress, onchange, etc)
btnSaludoGenerico.onclick = saludarGenerico;

btnSaludoPersonalizado.onclick = () => {
    saludarPersonalizado('Eli')
}

*/

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
//console.log(radios);

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

//Ejemplo aplicado

function cambiarImagen(elemento, source){
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

radios.forEach(item=>{

    item.addEventListener('click', ()=>{
        let colorUsuario = item.value;
        let variante = botellas.find(botella=>botella.color==colorUsuario);
        cambiarImagen(fotoBotellas,variante.imagen)
    })
})

//Eventos teclado

/* inputPassword.addEventListener('keyup', ()=>{
    console.log(inputPassword.value);
})
inputPassword.addEventListener('keydown', () => {
    console.log(inputPassword.value);
}) */

//Evento onchange de inputs
inputNombre.onchange = () => {
    console.log(inputNombre.value);
}

//Información del evento
inputPassword.addEventListener('keypress', (evento) => {
    let codCaracter = evento.charCode;
    console.log(evento.key); 

    if (codCaracter != 0) { //chequeo que no se haya presionado un caracter nulo
        if (codCaracter < 97 || codCaracter > 122) { //chequeo si el caracter es algo diferente a una minuscula en el código ascii
            evento.preventDefault();
            alert("Solo podes usar minusculas");
        }
    }
})

const btnRegistrar = document.getElementById('registrar');

btnRegistrar.onclick=(evento)=>{
    //evento.preventDefault();
    console.log('Te registraste exitosamente');
}