import Els from '../core';

Els.prototype.slider = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width,
              sliderId = this[i].getAttribute('id'),
              slides = this[i].querySelectorAll('.carousel-item'),
              slidesField = this[i].querySelector('.carousel-slides'),
              dots = this[i].querySelectorAll('.carousel-indicators li');

        let offset = 0,
            slideIndex = 0;

        // установка ширины блока слайдов
        slidesField.style.width = `${slides.length * 100}%`;
        
        // установка ширины самих слайдов
        slides.forEach(slide => {
            slide.style.width = width;
        });

        //обработчик на next
        Els(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();

            if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex === slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        //обработчик на prev
        Els(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();

            if (offset === 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex === 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        //обработчик на кнопки
        Els(`#${sliderId} .carousel-indicators li`).click((e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            
            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    }
    
}

Els('.carousel').slider();