/*const btnMenu = document.querySelector('.btn__menu');
const menu = document.querySelector('.menu-lista');

btnMenu.addEventListener('click', () =>{
    menu.classList.toggle('menu-lista--ativo')
})*/


const btnMenu = document.getElementById('bt__menu');

function toggleMenu() {
    const menu = document.getElementById('menu-nav');
    menu.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);

