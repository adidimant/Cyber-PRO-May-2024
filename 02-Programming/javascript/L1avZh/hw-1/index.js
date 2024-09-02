/*-------------ParagraphColor----------*/

const changeParagraphColorButton = document.getElementById(
  "changeParagraphColor"
);

const mainParagraph = document.getElementById("mainParagraph");

changeParagraphColorButton.addEventListener("click", () => {
  mainParagraph.style.color =
    mainParagraph.style.color === "red" ? "black" : "red";
});

/*-------------Auto Fill----------*/

const autoFill = document.getElementById("autoFill");

autoFill.addEventListener("click", () => {
  document.getElementById("fName").value = "Liav";
  document.getElementById("lName").value = "Zecharya";
  document.getElementById("email").value = "L1avZh@gmail.com";
  document.getElementById("postion").value = "Security Engineer";
});

/*-------------Change BackGround Color----------*/
const changeColorButton = document.getElementById(
  "backgroundColorChangeButton"
);

const background = document.getElementById("change-color-bg");

const colors = [
  "navy",
  "maroon",
  "purple",
  "olive",
  "teal",
  "red",
  "blue",
  "green",
  "orange",
  "lime",
  "magenta",
  "pink",
  "cyan",
  "yellow",
  "white",
  "gray",
];

let currectColor = 0;
let changeColor = false;

changeColorButton.addEventListener("click", () => {
  changeColor = true;
  changeColorButton.blur();
});

document.addEventListener("keydown", (keyPressed) => {
  if (keyPressed.key === "ArrowRight") {
    colorChange("ArrowRight");
  } else if (keyPressed.key === "ArrowLeft") {
    colorChange("ArrowLeft");
  } else if (keyPressed.key === "Enter") {
    colorChange("Stop");
  }
});

function colorChange(leftOrRight) {
  if (changeColor) {
    if (leftOrRight === "ArrowRight") {
      currectColor = (currectColor + 1) % colors.length;
      background.style.backgroundColor = colors[currectColor];
    } else if (leftOrRight === "ArrowLeft") {
      currectColor = (currectColor - 1 + colors.length) % colors.length;
      background.style.backgroundColor = colors[currectColor];
    } else if (leftOrRight === "Stop") {
      background.style.backgroundColor = colors[currectColor];
      changeColor = false;
    }
  }
}
