//TODO: Consultar en el sessionStorage si el rol existe
//Si el rol existe y es admin, entonces mostrar la pagina de admin
//Si el rol existe y es user, entonces mostrar la pagina principal
//Si el rol no existe, entonces redireccionar al login

const rol = sessionStorage.getItem('rol');

if(rol !== 'admin'){
    console.log('Bienvenido admin');
}else{
    window.location.href = "login.html";
}


const tableShow = window.location.search.split('=')[1];
const tableSection = document.querySelector('#tableSection');

console.log(tableSection);

fetch(`./data/${tableShow}.json`)
.then( response => response.json())
.then( data => {

    // console.log(Object.keys())
    tableSection.innerHTML = `
    <table class="table table-striped" id="myTable">
        <thead>
            <tr>
                ${Object.keys(data[0]).map( key => `<th scope="col">${key.toUpperCase()}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${data.map( row => `
                <tr>
                    ${Object.keys(row).map( cell => `<td>${row[cell]}</td>`).join('')}
                </tr>
            `).join('')}
        
        <tbody>
        </tbody>
    </table>
    `

    let table = new DataTable('#myTable', {
        // options
    });

    
})