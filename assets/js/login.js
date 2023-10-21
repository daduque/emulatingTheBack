document.addEventListener('DOMContentLoaded', () => {
    

    document.addEventListener('submit', (event) => {
        event.preventDefault();
        const user = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        fetch('../data/users.json')
        .then(response => response.json())
        .then(data => {

            //verificamos si el usuario existe, en caso de que exista validamos el rol
            //TODO: guardar todos los datos del usuario en el session storage
            //si el usuario tiene rol admin, entonces lo vamos a reedireccionar a la pagina de admin
            //si el rol de usuario es user, entonces lo vamos a redireccionar a la pagina principal	

            console.log(data);
            window.location.href = "admin.html";
        })

    })


});

