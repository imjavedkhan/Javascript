'use strict';

const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for(let i=0; i < btnOpenModal.length; i++ ){
    //console.log(btnOpenModal[i].textContent);

    btnOpenModal[i].addEventListener('click', openModal);
    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

        // we have create closeModel function
    // btnCloseModal.addEventListener(
    //     'click', function(){
    //         modal.classList.add('hidden');
    //         overlay.classList.add('hidden');
    //     }
    // );
}

document.addEventListener('keydown', function(e){
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();   
    }
});