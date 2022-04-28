const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const sliders = document.querySelectorAll('.portfolio-item');

    let currentSlide = 0;

    const autoSlide = () => {
        sliders[currentSlide].classList.remove('portfolio-item-active');
        currentSlide++;
        if (currentSlide >= sliders.length) {
            currentSlide = 0;
        }
        sliders[currentSlide].classList.add('portfolio-item-active');
    };

    const startSlide = () => {
        setInterval(autoSlide, 2000)
    };

    const stopSlide = () => {

    };

    startSlide()
}

export default slider