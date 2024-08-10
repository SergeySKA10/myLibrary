import Els from '../core';

Els.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        Els(this[i]).click(() => {
            Els(this[i]).changeClass(headActive);

            Els(this[i].nextElementSibling).changeClass(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';
            }
        });
    }
}

Els('.accordion-head').accordion();

// Els.prototype.createAccordion = function() {

// }