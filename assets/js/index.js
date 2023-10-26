//Mover el listado de noticias a un archivo .json, ojo con el formato
//Consumir ese archivo json utilizando fetch y pintar el listado de noticias en el index.html

const getNoticias = async() => {

    const data = await fetch('./data/news.json');
    const noticias = await data.json();
    let news = document.querySelector('#news');
    
    noticias.forEach( (element) => {
    
        news.innerHTML += `
        <article class="news">
    
            <h3>${ element.title }</h3>
            <img src="./assets/images/${ element.image }.jpg" alt="">
            <p>${ element.description }</p>
            <a href="#">Leer más</a>
    
        </article> 
    `;
    
    })
}

getNoticias();

