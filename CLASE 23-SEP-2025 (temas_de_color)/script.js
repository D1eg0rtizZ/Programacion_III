const body = document.body;
const botones = document.querySelectorAll("button:not(.excluir)");
const contador = document.getElementById("contador");
let incremento = 0;
const temas = ["tema-claro", "tema-oscuro", "tema-morado"];

// CARGAR IMAGEN
const input = document.getElementById("link_imagen");// input
const cargarImagen = document.getElementById("cargar_imagen"); //boton
const demoImage = document.getElementById("demo-image");// span

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const nuevoTema = boton.getAttribute("data-tema");
        const temaActual = temas.find(t => body.classList.contains(t));

        if (nuevoTema !== temaActual) {
            body.classList.remove(...temas);
            body.classList.add(nuevoTema);
            incremento += 1; 
            contador.textContent = incremento;
            localStorage.setItem("tema", nuevoTema);
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("tema");
  if (savedTheme && temas.includes(savedTheme)) {
    body.classList.add(savedTheme);
  } else {
    body.classList.add("tema-claro");
  }
});

//CARGAR IMAGEN
cargarImagen.addEventListener("click", () => {
    const url = input.value.trim();

    if (url) {
    demoImage.innerHTML = `<img src="${url}" alt="Imagen cargada" 
    style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
    
    } else {
    demoImage.textContent = "URL no válida";
    }
});