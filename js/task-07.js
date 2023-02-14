const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("change", (size) => {
  text.style.fontSize = `${size.target.value}px`;
});
