//seleccion por clase de un elemento
const encabezado=document.getElementsByClassName("encabezado");
const encabezado2=document.getElementById("encabezado");
console.log(encabezado)
console.log(encabezado2)

//selecciona con independencia si es Id o Clase
// .clase
// #id
const head=document.querySelector('.header');
const formulario=document.querySelector('#busqueda');
const foot=document.querySelector('footer');
const cont=document.querySelector('.footer .container .row');
const row=document.querySelector('.footer .row');
//seleccionar todas las clases con el mismo nombre
const container=document.querySelectorAll('.row');

console.log(foot)
console.log(cont)
console.log(row)
console.log(container)
//acceder y modificar etiqueta
const title2=document.querySelector('.contenido-hero h2');
title2.textContent="Nuevo texto";
//title2.innerHTML="Nuevo texto2";
let monto=80;
//title2.innerHTML="Nuevo <p><b> texto con inner</b></p>";
const titulo3=document.querySelector('.contenido-hero p');
titulo3.textContent=`todos los cursos a ${monto} `

// accerder al css desde JS
title2.style.backgroundColor='red';
title2.style.textDecoration='underline';
title2.style.textTransform='uppercase';

//

const conteHero=document.querySelector('.contenido-hero p');
console.log(conteHero.classList)

conteHero.classList.add('nuevaclase')
console.log(conteHero.classList)

conteHero.classList.remove('nuevaclase')
console.log(conteHero.classList)

title2.classList.add('estilos')
title2.classList.remove('estilos')
title2.classList.add('estilos')


//tranversind de DOM
const listaDeCursos=document.querySelector('#lista-cursos');
//console.log(listaDeCursos.Children)
//console.log(listaDeCursos.children[1].children[0])
const tit=listaDeCursos.children[0];
tit.textContent='elementom desde el padre';
//desde los padres a los hijos
console.log(listaDeCursos.children[1].children[0].children[0].children[0])
const img=listaDeCursos.children[1].children[0].children[0].children[0]
img.src='./img/estrellas.png';
//console.log(listaDeCursos.children[1].children[0].children[0].children[0])
//desde el hijo hasta el padre
console.log(img.parentElement.parentElement)
//entre hermanos
/*
const hermanos=document.querySelector('#lista-cursos .row .four.columns');
console.log(hermanos);
const nextBrother=hermanos.nextElementSibling;
console.log(nextBrother);
const nextBrother3=hermanos.nextElementSibling.nextElementSibling;
//console.log(nextBrother3);*/
// eliminar elemento del DOM
/* 1 manera: eliminacion directa
listaDeCursos.remove();*/
// 2 manera: eliminacion del nodo padre
listaDeCursos.removeChild(listaDeCursos.children[2])
