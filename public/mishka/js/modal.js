const modal = document.querySelector(".modal");
const buttonModal = document.querySelector(".main-suggestion__button") || document.querySelector(".product-card__button");
const buttonModalSize = document.querySelectorAll(".modal__size-button");
const buttonModalSizeCurrent = document.querySelector(".modal__size-button--current");



//Modal

window.addEventListener("keydown", function(evt){
if(evt.keyCode === 27) {
if(modal.classList.contains("modal--show")){
evt.preventDefault();
modal.classList.remove("modal--show");
}
}
})

buttonModal.addEventListener("click", function(evt){
evt.preventDefault();
modal.classList.add("modal--show");
})
