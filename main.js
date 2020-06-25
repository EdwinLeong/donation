let bb1 = document.querySelector("#button1");
let bb2 = document.querySelector("#button2");
let bb3 = document.querySelector("#button3");
let input = document.querySelector("#txtvalue");

bb1.addEventListener("click", () => {
  input.value = bb1.value;
});
bb2.addEventListener("click", () => {
  input.value = bb2.value;
});
bb3.addEventListener("click", () => {
  input.value = bb3.value;
});
