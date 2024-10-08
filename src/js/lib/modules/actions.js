import Els from "../core";

// функция innerHTML
Els.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
}

// функция поиска по номеру
Els.prototype.num = function(i) {
    const elem = this[i],
          length = Object.keys(this).length;

    for (let i = 0; i < length; i++) {
        delete this[i];
    }
    
    this[0] = elem;
    this.length = 1;

    return this;
}

// функция определения индекса элемента
Els.prototype.index = function() {
    const parent = this[0].parentNode,
          childs = [...parent.children];

    const findMyIndex = item => {
        return item == this[0];
    }

    return childs.findIndex(findMyIndex);
}

// функция поиска элементов по селектору
Els.prototype.find = function(selector) {
    let numberOfItems = 0,
        counter = 0;
    
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);

        if (arr.length == 0) continue;

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;

    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
}

// функция поиска ближайшего селектра по родителям => closest
Els.prototype.findCst = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector)) {
            this[i] = this[i].closest(selector);
            counter++;
        } else continue;
        
    }

    this.length = counter;

    const objLength = Object.keys(this).length;

    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
}

// функция поиска соседних элементов
Els.prototype.siblings = function() {
    let numberOfItems = 0,
        counter = 0;
    
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) continue;
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;

    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
}

