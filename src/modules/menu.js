const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
     
    const handleMenu = (e) => {
        if (e.target == closeBtn) {e.preventDefault()}
        menu.classList.toggle('active-menu');
    }

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);
    menuItems.forEach(menuItems => menuItems.addEventListener('click', handleMenu));
}

export default menu