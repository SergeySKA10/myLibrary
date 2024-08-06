import Els from '../core';

Els.prototype.newClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.add(...classNames);
    }

    return this;
}

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

Els.prototype.changeClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.toggle(className);
    }

    return this;
}

Els.prototype.has = function(className) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.contains(className);
    }

    return this;
}