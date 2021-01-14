'use strict';
const popUp = document.querySelector('.pop-up');
const openPopup = document.querySelector('.grant__consultation');
const closePopup = document.querySelector('.pop-up__close');
const openMenu = document.querySelector('.page-header__navigation-toggle');
const show = document.querySelector('.page-header__item');
const stud = document.querySelector('.page-header__item-list');
const studShow = document.querySelector('.questionnaire');
stud.addEventListener('click', function(evt) {
  evt.preventDefault();
  studShow.classList.add('questionnaire--show');
});
if (popUp !== null) {
  closePopup.onclick = function(evt) {
    evt.preventDefault();
    popUp.classList.remove('pop-up__modal--show');
  };

  openPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popUp.classList.add('pop-up__modal--show');
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popUp.classList.contains('pop-up__modal--show')) {
        evt.preventDefault();
        popUp.classList.remove('pop-up__modal--show');
      }
    }
  });
}
if (show !== null) {
  openMenu.onclick = function(evt) {
    evt.preventDefault();
    show.classList.toggle('page-header__item--shadow');
  };

}