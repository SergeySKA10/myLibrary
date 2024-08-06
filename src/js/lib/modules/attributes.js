import Els from "../core";

// функция назначения или изменения аттрибута
Els.prototype.setAtr = function(attribute, value) {
    for (let i = 0; i < this.length; i++) {
        if (attribute && value) {
            this[i].setAttribute(attribute, value);
        } else {
            this[i].setAttribute(attribute, value);
            console.error(new Error("Method hasn't parametrs. Please you mast write attribute and value")); 
        }
    }

    return this;
}

// функция получения аттрибута
Els.prototype.getAtr = function(attribute) { // доработать в соответствии с документацией => должно быть значение, плюс дополнительно можно получить доп свойства
    if (!attribute) throw new Error("Method hasn't parametrs. The function must contain a parameter 'attribute'");

    if (this.length === 1) {
        return this[0].getAttribute(attribute);
    } else {
        let countLength = 0;

        for (let i = 0; i < this.length; i++) {
            this[i] = this[i].getAttribute(attribute);
            if (this[i]) countLength++;
        }
        this.length = countLength;

        const objLength = Object.keys(this).length;

        for (; countLength < objLength; countLength++) {
            delete this[countLength];
        }
    }

    return this;
}

// функция удаления аттрибута
Els.prototype.delAtr = function(attribute, value) {
    if (!attribute) throw new Error("Method hasn't parametrs. The function must contain a parameter 'attribute'");
    
    for (let i = 0; i < this.length; i++) { 
        this[i].removeAttribute(attribute, value);  
    }

    return this;
}