import Els from '../core';

// функция открытия и закрытия модального окна
Els.prototype.modal = function(created) {
    for (let i = 0; i < this.length; i++) {
        const idModal = Els(this[i]).getAtr('data-target');

        Els(this[i]).click((e) => {
            e.preventDefault();
            Els(idModal).appear(500);
            document.body.style.overflow = 'hidden';
        });

        const closeElems = document.querySelectorAll(`${idModal} [data-close]`);

        closeElems.forEach(elem => {
            Els(elem).click(() => {
                Els(idModal).disappear(500);
                document.body.style.overflow = '';

                // если модальное окно создано с помощью JS - оно удаляется
                if (created) {
                    document.querySelector(idModal).remove();
                }
            });
        });

        Els(idModal).click((e) => {
            if (e.target && e.target.classList.contains('modal')) {
                Els(idModal).disappear(500);
                document.body.style.overflow = '';

                // если модальное окно создано с помощью JS - оно удаляется
                if (created) {
                    document.querySelector(idModal).remove();
                }
            }
        });
    }
}

Els('[data-toggle="modal"]').modal();

Els.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        const buttons = [],
              modal = document.createElement('div');

        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');

            btn.classList.add('btn', ...btns.settings[j][1]);
            btn.textContent = btns.settings[j][0];

            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }

            if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') {
                btn.addEventListener('click', btns.settings[j][3]);
            }

            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.descr}
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.append(modal);

        Els(this[i]).modal(true);
        Els(this[i].getAttribute('data-target')).appear(500); // появление подложки с модальным окном ('.modal')
    }
}