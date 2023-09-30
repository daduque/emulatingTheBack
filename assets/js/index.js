let menuTitle = document.querySelector('.aside-title').children[0];

if(menuTitle.innerHTML === 'Menu'){
    menuTitle.innerHTML = 'Hola';
}else {
    menuTitle.innerHTML = 'UTP';
}

console.log(menuTitle);