const mailIcon = document.querySelector('.mail-icon');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const xBtn = document.querySelector('.x-btn');

// MODAL

openModal = function () {
  modalOverlay.classList.add('modal-active');
  modal.classList.add('modal-active');
}

closeModal = function (){
  modalOverlay.classList.remove('modal-active');
  modal.classList.remove('modal-active');
}

if(mailIcon){
mailIcon.addEventListener('click', openModal);
}

if(xBtn){
xBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (e) =>{
  if(e.key === 'Escape'){
    closeModal();
  }
})



// EXPERIENCE CAROUSEL

const carouselWrapper = document.querySelector('.wrapper');
const wrapperDivs = document.querySelectorAll('.wrapper div');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let counter = 0;
const size = 1500;


rightArrow.addEventListener('click', () => {
  if(counter <= 5){
  carouselWrapper.style.transition = "transform 0.5s ease-in-out";
  counter++;
  carouselWrapper.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
});

leftArrow.addEventListener('click', () => {
  if(counter > 0){
  carouselWrapper.style.transition = "transform 0.5s ease-in-out";
  counter--;
  carouselWrapper.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
});
