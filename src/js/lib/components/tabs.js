import Els from '../core';

Els.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        Els(this[i]).click(() => {
            Els(this[i]).newClass('tab-item--active')  // добавляем элементу - триггеру класс active
                        .siblings() // находим соседние элементы - триггеры
                        .delClass('tab-item--active') // удаляем у соседних элементов - триггеров класс active
                        .findCst('.tab') // находим главный блок табов
                        .find('.tab-content') // находим все элементы с контентом
                        .delClass('tab-content--active') // удаляем у всех элементов с контентом класс active
                        .num(Els(this[i]).index()) // находим нужный элемент с контентом по индексу
                        .newClass('tab-content--active'); // добавляем у элемента с контентом класс active
        });
    }
} 

Els('[data-tabpanel] .tab-item').tab();

// Els.prototype.createTab = function() {

// }