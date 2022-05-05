// 
const slider = (classSliderBlock, classSliders, classDots, classActiveSlider = 'active-slide', classActiveDot = 'active-dot') => {
    const sliderBlock = document.querySelector(classSliderBlock);
    const sliders = document.querySelectorAll(classSliders);
    const portfolioDots = document.querySelector(classDots);

    if (!sliderBlock) return
    if (!sliders) return
    if (!portfolioDots) return

    const timeInterval = 2000;
    let currentSlide = 0;
    let interval;
    let dots;

    for (let i = 0; i < sliders.length; i++) {
        let dot = document.createElement('li');
        portfolioDots.appendChild(dot);
        dot.classList.add('dot');
        if (i == 0) {
            dot.classList.add(classActiveDot);
        }
        dots = document.querySelectorAll('.dot');
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlide = () => {
        prevSlide(sliders, currentSlide, classActiveSlider);
        prevSlide(dots, currentSlide, classActiveDot);
        currentSlide++;
        if (currentSlide >= sliders.length) {
            currentSlide = 0;
        }
        nextSlide(sliders, currentSlide, classActiveSlider);
        nextSlide(dots, currentSlide, classActiveDot);
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return
        }

        prevSlide(sliders, currentSlide, classActiveSlider);
        prevSlide(dots, currentSlide, classActiveDot);

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        };

        if (currentSlide >= sliders.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = sliders.length - 1;
        }

        nextSlide(sliders, currentSlide, classActiveSlider);
        nextSlide(dots, currentSlide, classActiveDot);
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    startSlide(timeInterval);
}

export default slider