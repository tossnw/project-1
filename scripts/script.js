let textS = document.querySelector("span");
let multi = document.querySelector("#multi");
let devide = document.querySelector("#devide");
let reset = document.querySelector("#reset");

let count = 0;

multi.onclick = () => {
  count++;
  textS.innerHTML = count;
};

devide.onclick = () => {
  count <= 0 ? (count = 0) : (count = count - 1);
  textS.innerHTML = count;
};

reset.onclick = () => {
  count = 0;
  textS.innerHTML = count;
};
