const mailIcon = document.querySelector('.mail-icon');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');
const xBtn = document.querySelector('.x-btn');

openModal = function () {
  modalOverlay.classList.add('modal-active');
  modal.classList.add('modal-active');
}

closeModal = function (){
  modalOverlay.classList.remove('modal-active');
  modal.classList.remove('modal-active');
}

mailIcon.addEventListener('click', openModal);

xBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) =>{
  if(e.key === 'Escape'){
    closeModal();
  }
})
