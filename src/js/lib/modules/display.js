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
Els.prototype.changeDsp = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }

    return this;
}