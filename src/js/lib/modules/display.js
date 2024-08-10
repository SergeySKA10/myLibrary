import Els from '../core';

// функция демонстрации элемента
Els.prototype.show = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        
        this[i].style.display = '';
    }

    return this;
}

// функция скрытия элемента
Els.prototype.hide = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        
        this[i].style.display = 'none';
    }

    return this;
}

// функция изменения свойства display
Els.prototype.changeDsp = function(display = 'block') {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display;
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
}