const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const popupContent = modal.querySelector('.popup-content');
    let count = -750;
    let idInterval;

    const modalAnimate = () => {
        idInterval = requestAnimationFrame(modalAnimate);

        if (count < -400) {
            count = count + 25;
            popupContent.style.transform = 'translateX(' + count + 'px)';
        } else if (count < -200) {
            count = count + 20;
            popupContent.style.transform = 'translateX(' + count + 'px)';
        } else if (count < -50) {
            count = count + 15;
            popupContent.style.transform = 'translateX(' + count + 'px)';
        } else {
            cancelAnimationFrame(idInterval);
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (screen.width > 768) { modalAnimate() };
        })
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        count = -750;
    });
}

export default modal;