# Libray_progect

Components:

1. Buttons:
    btn: общий класс display inline-block
    btn-primary:
    btn-success:
    btn-danger:
    btn-warning:
    btn-dark:
    btn-outline-primary:
    btn-outline-success:
    btn-outline-danger:
    btn-outline-warning:
    btn-outline-dark:
    btn-block: display: block

2. dropdown
HTML
```
<div class="dropdown m30">
    <button class="btn btn-primary dropdown-toggle" id="">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="">
        <a href="#" class="dropdown-item">Action</a>
        <a href="#" class="dropdown-item">Action #2</a>
        <a href="#" class="dropdown-item">Action #3</a>
    </div>
</div>
```
3. modal
HTML
```
<div class="modal" id="">
    <div class="modal-dialog">
        <div class="modal-content">
            <button class="close" data-close>
                <span>&times;</span>
            </button>
            <div class="modal-header">
                <div class="modal-title">
                    Modal title
                </div>
            </div>
            <div class="modal-body">
                Modal text
            </div>
            <div class="modal-footer">
                <button class="btn btn-danger" data-close>Close</button>
                <button class="btn btn-success">Success</button>
            </div>
        </div>
    </div>
</div>
```

создание с поощью JS:
```
Els(selector).click(() => {       // обработчик события
    Els(selector).createModal({
        text: {
            title: "Title Modal",
            descr: "Text Modal"
        },
        btns: {
            count: 2,             // количество кнопок
            settings:[            // настройки кнопок
                [
                    'Close Modal',               // текст 1-ой кнопки
                    ['btn-danger', 'mr10'],      // классы 1-ой кнопки
                    true                         // закрывает или нет модальное окно (true or false)
                    () => alert('Hello World')   // callback function or false
                ],
                [
                    'No Close Modal',            // текст 2-ой кнопки
                    ['btn-danger', 'mr10'],      // классы 2-ой кнопки
                    false                        // закрывает или нет модальное окно (true or false)
                    () => alert('Hello World')   // callback function or false
                ],
            ]
        }
    });
});
```

4. tabs

5. card
HTML:
```
<div class="card">
    <img class="card-img" src="" alt="">
    <div class="card-body">
        <div class="card-title">Card title</div>
        <p class="card-text">Card text</p>
        <a href="#">Card link or button</a>
    </div>
</div>
```

6. carousel

7. accordion

UI styles:

1. display

2. align

3. font

4. margin

5. padding

6. sizes


