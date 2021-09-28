const modalViews = document.querySelectorAll('.place__modal');
const modalBtns = document.querySelectorAll('.place__button');
const modalClose = document.querySelectorAll('.place__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i);
    })
});

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        })
    })
})