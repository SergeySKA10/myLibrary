import Els from "../core";

// обработчик событий
Els.prototype.watch = function(event, callback, ...options) {
    for (let i = 0; i < this.length; i++) {
        if (event && callback && options.length === 0) {
            this[i].addEventListener(event, callback);
        } else if (event && callback && options.length !== 0) {
            this[i].addEventListener(event, callback, ...options);
        } else {
            throw new Error("Method hasn't parametrs. The function must contain a parameter 'event' and 'callback'");
        } 
    }

    return this;
}

// удаление обработчика событий
Els.prototype.delWatch = function(event, callback) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(event, callback);
    }

    return this;
}

// событие click и обработчик click
Els.prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }

    return this; 
}

// обработчик submit
Els.prototype.submit = function(request) {
    for (let i = 0; i < this.length; i++) {
        if (request) {
            this[i].addEventListener('submit', (e) => {
                e.preventDefaut();
                request();
            });
        } else {
            throw new Error("submit hasn't function 'request'");
        }
    }

    return this;
}

// обработчик input
Els.prototype.input = function(enter) {
    for (let i = 0; i < this.length; i++) {
        if (enter) {
            this[i].addEventListener('input', enter);
        } else {
            throw new Error("input hasn't function 'enter'");
        }
    }

    return this;
}