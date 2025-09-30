// LANZAR ALERTA
let boton = document.getElementById("boton_alerta");
boton.addEventListener("click", function(){
    alert("EPALE!!");
});

// CAMBIAR COLOR
let cambio_color = document.getElementsByTagName("div")[0]; // [arreglo]
cambio_color.addEventListener("mouseover", function(){
    cambio_color.style.backgroundColor = 'green';
});

// AGREGAR ELEMENTOS A LA LISTA

let lista = document.getElementById("lista");
let boton_agregar = document.getElementById("agregar_elemento");
let elemento;
let input_texto = document.getElementById("input_texto");

boton_agregar.addEventListener("click", function(){
    elemento = document.createElement('li');
    elemento.textContent = input_texto.value;
    lista.appendChild(elemento);
});