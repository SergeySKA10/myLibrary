import Els from '../core';

// функция добавления класса
Els.prototype.newClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.add(...classNames);
    }

    return this;
}

// функция удаления класса
Els.prototype.delClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.remove(...classNames);

        if (classNames.find(el => el === 'hide')) {
            this[i].style.display = '';
        }
    }

    return this;
}

// функция изменения класса
Els.prototype.changeClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.toggle(className);
    }

    return this;
}

// функция поиска наличия класса
Els.prototype.has = function(className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.contains(className);
    }

    return this;
}