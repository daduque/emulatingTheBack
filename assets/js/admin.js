//TODO: Consultar en el sessionStorage si el rol existe
//Si el rol existe y es admin, entonces mostrar la pagina de admin
//Si el rol existe y es user, entonces mostrar la pagina principal
//Si el rol no existe, entonces redireccionar al login

const rol = sessionStorage.getItem('rol');

if(rol === 'admin'){
    console.log('Bienvenido admin');
}else{
    window.location.href = "login.html";
}