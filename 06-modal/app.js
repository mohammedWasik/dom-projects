// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const backdropDiv = document.querySelector(".backdrop");

modalBtn.addEventListener("click", (e) => {
  modalOverlay.classList.toggle("open-modal");
  backdropDiv.classList.toggle("active");
});
closeBtn.addEventListener("click", (e) => {
  modalOverlay.classList.remove("open-modal");
  backdropDiv.classList.remove("active");
});
document.querySelector(".backdrop").onclick = (e) => {
  modalOverlay.classList.remove("open-modal");
  backdropDiv.classList.remove("active");
};
