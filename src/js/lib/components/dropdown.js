import Els from '../core';

Els.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {
        Els(this[i]).click(() => {
            const idMenu = Els(this[i]).getAtr('id');
            Els(`[data-toggle-id="${idMenu}"]`).changeDsp();
        });
    }
}



// Els.prototype.createDropdown = function() {

// }
