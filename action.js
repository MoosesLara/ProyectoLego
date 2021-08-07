//variables
const modal = document.querySelector('.modal');
const button1 = document.querySelector('#button1');
const closeButton = document.querySelector('.modal__content--close');

//eventos
button1.addEventListener('click', () =>{
    modal.classList.remove('hidden');
    modal.classList.add('visible');
})

closeButton.addEventListener('click', () => {
    console.log('here');
    modal.classList.add('hidden');
    modal.classList.remove('visible');
})