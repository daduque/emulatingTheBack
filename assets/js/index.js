// objeto literal
const noticias = [
    {
        title: 'Nuevos edificios en la ciudad',
        image : 'buildings',
        description : 'JSON Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vel rerum? Numquam labore nihil officia eligendi provident. Maiores dolores minus blanditiis quis repudiandae commodi modi, porro, tempore, asperiores ipsa reiciendis!'
    },
    {
        title: 'Llegó un nuevo servicio a la ciudad',
        image : 'deliveries',
        description : 'JSON Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vel rerum? Numquam labore nihil officia eligendi provident. Maiores dolores minus blanditiis quis repudiandae commodi modi, porro, tempore, asperiores ipsa reiciendis!'
    },
    {
        title: 'El lago solitario',
        image : 'lonely',
        description : 'JSON Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vel rerum? Numquam labore nihil officia eligendi provident. Maiores dolores minus blanditiis quis repudiandae commodi modi, porro, tempore, asperiores ipsa reiciendis!'
    },
    {
        title: 'Escaleras de evacuación',
        image : 'stairs',
        description : 'JSON Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vel rerum? Numquam labore nihil officia eligendi provident. Maiores dolores minus blanditiis quis repudiandae commodi modi, porro, tempore, asperiores ipsa reiciendis!'
    }
]

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