const menu = () => {
    const body = document.querySelector('body');
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');

    const classActive = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (e) => {contains
        if (menuBtn.contains(e.target) || e.target === closeBtn || e.target.matches('menu>ul>li>a') || (menu.classList.contains('active-menu') && !e.target.matches('menu'))) {
            e.preventDefault();
            classActive();
        };

        // !e.target.matches('menu')
    });
}

export default menu