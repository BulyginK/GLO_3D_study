const menu = () => {
    const body = document.querySelector('body');
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');


    const classActive = () => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (e) => {
        if (menu.classList.contains('active-menu') && e.target.closest('button')) {
            e.preventDefault();
            classActive();
        };

        if (menu.classList.contains('active-menu') && !e.target.closest('menu')) {
            classActive();
        };

        if (menuBtn.contains(e.target) || e.target === closeBtn) {
            e.preventDefault();
            classActive();
        };

        if (e.target.matches('menu>ul>li>a')) {
            classActive();
        };
    });
}

export default menu