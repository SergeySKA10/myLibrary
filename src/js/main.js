import Els from "./lib/lib";

//display
Els('.hide').hide();
Els('.active').show();
Els('.changeDisplay').changeDsp();

//classes
Els('.five .newClass').newClass('addClass');
Els('.delClass').delClass('hide');
Els('.five div').changeClass('changeClass');
// console.log(Els('div').has('num'));

//atributte
Els('.five').setAtr('id', 'five');
// console.log(Els('.five').getAtr('id'));
// console.log(Els('div').getAtr('data-num'));
Els('.five').delAtr('id', 'five');

//hendlers
function callback() {
    console.log('callback');
}

Els('.one_button').watch('mouseenter', callback, {once: true}); 
//Els('.one_button').delWatch('mouseenter', callback);


Els('.two_button').click((e) => {
    console.log(e);
    e.target.style.width = '100px'
    e.target.style.height = '50px';
    setTimeout(() => {
        e.target.style.width = ''
        e.target.style.height = ''; 
    }, 3000);
});

Els('[name="phone"]').input(function() {
    this.value = this.value.replace(/\D/g, '');
});

Els('.submit').watch('submit', () => { // убрать перезагрузку страницы
    console.log('hi');
})

//actions

//console.log( Els('body').html() );

// Els('body').html(`
//     <div> Hello World </div>
// `)

// console.log(Els('div').num(3));
Els('div').num(3).changeDsp();

// Els('div').click(function() {
//     console.log( Els(this).index() );
// });

// console.log( Els('section').num(1).find('.more') );
// console.log( Els('.some').num(0).findCst('.actions'));
// console.log( Els('.some').num(0).findCst('.findme').newClass('act'));
// console.log( Els('.iHaveSiblings').siblings());

//effects

//effects
Els('.effects_btn').click((e) => {
    Els('.actions').disappear(1500);

    setTimeout(() => {
        Els('.actions').appear(1500);
    }, 3000);
});

Els('.effects_two').click((e) => {
    Els('.more').appearToggle(2000);

});

Els('#first').click(() => {
    Els('.w-500').num(0).disappear(2000, () => console.log('Bye'));
});

Els('[data-count="second"]').click(() => {
    Els('.w-500').num(1).appear(2000);
});

Els('#toggle').click(() => {
    Els('.w-500').appearToggle(2000);
});


// components

//dropdown
Els('.dropdown-toggle').dropdown();
//modal
Els('#trigger').click(() => {
    Els('#trigger').createModal({
        text: {
            title: "Create Modal",
            descr: "Modal Window create with help JS"
        },
        btns: {
            count: 2,
            settings:[
                [
                    'Close Modal',
                    ['btn-danger', 'mr10'], 
                    true
                ],
                [
                    'Callback', 
                    ['btn-success'], 
                    false,
                    () => alert('Hello World')
                ],
            ]
        }
    });
});
