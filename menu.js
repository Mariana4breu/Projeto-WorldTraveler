const btnMenu = document.getElementById('bt__menu');

function toggleMenu() {
    const menu = document.getElementById('menu-nav');
    menu.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);

