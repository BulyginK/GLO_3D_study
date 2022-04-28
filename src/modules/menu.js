const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');

    const classActive = () => {
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        classActive();
    });

    menu.addEventListener('click', (e) => {
        if (e.target === closeBtn) {
            e.preventDefault();
            classActive();
        } else if (e.target.matches('ul>li>a')) {
            classActive();
        }
    });
}

export default menu