const Els = function(selector) {
    return new Els.prototype.init(selector);
};

Els.prototype.init = function(selector) {
    if (!selector) {
        return this;
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;

    return this;
};

Els.prototype.init.prototype = Els.prototype;

window.Els = Els;

export default Els;