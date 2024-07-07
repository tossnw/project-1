const open = document.querySelector("#open");
const bg_modal = document.querySelector(".modal-bg");
const modal = document.querySelector(".modal");

const modal_door = (state) => {
  bg_modal.style.display = state;
  modal.style.display = state;
};  

open.onclick = () => {
  modal_door("block");
};
bg_modal.onclick = () => {
  modal_door("none");
};

