document.getElementById('formulario').addEventListener('submit', (e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch('post.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('salida').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});