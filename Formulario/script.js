const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let celular = document.getElementById("celular").value;
    let correo = document.getElementById("email").value;
    confirm("Los datos ingresados son:"+"\nNombre: "+nombre+
        "\nApellido: "+apellido+
        "\nCelular: "+celular+
        "\nEmail: "+correo+
        "\nLos datos son correctos?"
    );
})