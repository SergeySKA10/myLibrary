import Els from '../core';

Els.prototype.show = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        
        this[i].style.display = '';
    }

    return this;
}

Els.prototype.hide = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        
        this[i].style.display = 'none';
    }

    return this;
}

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