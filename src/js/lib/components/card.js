import Els from '../core';

Els.prototype.createCard = function(parentSelector, src, alt, title, text, link, id, classes, attributes, linkText) {
    const card = document.createElement('div');

    Els(card).newClass('card');

    Els(card).html(`
        <img class="card-img" src="${src}" alt="${alt}">
        <div class="card-body">
            <div class="card-title">${title}</div>
            <p class="card-text">${text}</p>
            <a href=">${link}" id=">${id}" class="${classes}" ${attributes.join('')}>${linkText}</a>
        </div>
    `);

    document.querySelector(parentSelector).append(card);
}

