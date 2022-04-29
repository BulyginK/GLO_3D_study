const scroll = () => {
    const menu = document.querySelector('menu');
    const itemMenu = menu.querySelectorAll('ul>li>a');

    itemMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(item.hash).scrollIntoView(top);
        })
    });    
}

export default scroll