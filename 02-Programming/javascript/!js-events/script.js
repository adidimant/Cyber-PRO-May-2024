const input = document.getElementById("my-input");
const button = document.getElementById("my-button");
const demoContainer = document.getElementById("demo");

function onInputChange(e) {
  console.log(e);
}

function onButtonClick() {
  console.log("clicked my button!!");
}

demoContainer.addEventListener('mouseover', (e) => {
  console.log("mouse over container: ", e);
});

input.addEventListener('keydown', onInputChange);