const scroll = () => {
    const itemMenu = document.querySelectorAll('menu>ul>li>a');
    const scrollBtn = document.querySelector('main>a');

    itemMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(item.hash).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(scrollBtn.hash).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

export default scroll