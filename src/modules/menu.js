const menu = () => {
    const body = document.querySelector('body');
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');

    const classActive = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (e) => {
        if (menuBtn.contains(e.target) || e.target === closeBtn || e.target.matches('menu>ul>li>a') || (menu.classList.contains('active-menu') && !e.target.closest('menu'))) {
            e.preventDefault();
            classActive();
        };
    });
}

export default menu