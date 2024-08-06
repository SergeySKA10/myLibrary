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

Els('div').click(function() {
    console.log( Els(this).index() );
});

// console.log( Els('section').num(1).find('.more') );
// console.log( Els('.some').num(0).findCst('.actions'));
// console.log( Els('.some').num(0).findCst('.findme').newClass('act'));
// console.log( Els('.iHaveSiblings').siblings());