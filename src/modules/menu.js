const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');


    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active-menu');
    });

    menu.addEventListener('click', (e) => {
        if (e.target === closeBtn) {
            e.preventDefault()
            menu.classList.toggle('active-menu');
        } else if (e.target.matches('ul>li>a')) {
            menu.classList.toggle('active-menu');
        }
    })

}

export default menu