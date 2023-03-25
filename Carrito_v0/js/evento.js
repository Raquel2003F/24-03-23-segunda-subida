/* alert('Estos son eventos');
console.log('evento') */

//evento que indica que el html fue descargado al navegador


//EVENTO DE TIPO STRING, FUNCION DE FLECHA
// e o event

// console.log('PRIMERO EN IMPRIMIR')

document.addEventListener('DOMContentLoaded',(e)=>{
 console.log('El HTML YA FUE DESCARGADO')
});

// console.log('ULTIMO EN IMPRIMIR')
//

/* ANGULAR=>tYPESCRIT=>jS ES CERRADO
JYverry
Node.js
React 
*/

//Eventos de mouse
//NOTA PADRE, HIJO , SI VA JUNTO SE AGREGA .
const car=document.querySelector('.container .row .four.columns .card');
console.log(car.children);

car.addEventListener('click', (e)=>{
//console.log('Diste click en el card');
});

//eVENTO DE TECLADO
//input
const buscador=document.querySelector('#buscador');
buscador.addEventListener('input',(e)=>{
console.log(e.target.value)
});

//blur
buscador.addEventListener('blur',(e)=>{
console.log('Perdi el foco');
});

//submit
const form=document.querySelector('#busqueda');
form.addEventListener('submit', enviarFormulario);

//funcion para llamar en el evento
function enviarFormulario(e){
    e.preventDefault(); //para que no se caiga
    console.log('imprimiento');
}

//EventBubbling

const card=document.querySelector('.container .row .four.columns .card');

const info=document.querySelector('.container .row .four.columns .card .info-card');

card.addEventListener('click',(e)=>{

    //primera manera
    // e.stopPropagation()
    // console.log('Estas dando clic al card')
});

info.addEventListener('click',(e)=>{
    // e.stopPropagation()
    // console.log('Estas dando clic al infoCard ')
});

//3 maneras

card.addEventListener('click',(e)=>{
    console.log(e.target.classList);
    if (e.target.classList.contains('info-card')){
        console.log('haga esto');
    }

    console.log(e.target.classList);
    if (e.target.classList.contains('card')){
        console.log('haga esto otro');
    }
});