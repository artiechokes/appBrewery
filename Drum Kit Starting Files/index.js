// Detecting Button Press

const drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    let audio;

    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Key Press

document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      audio = new Audio(`sounds/tom-1.mp3`); //Audio is object

      break;
    case "a":
      audio = new Audio(`sounds/tom-2.mp3`); //Audio is object

      break;
    case "s":
      audio = new Audio(`sounds/tom-3.mp3`); //Audio is object

      break;
    case "d":
      audio = new Audio(`sounds/tom-4.mp3`); //Audio is object

      break;
    case "j":
      audio = new Audio(`sounds/crash.mp3`); //Audio is object

      break;
    case "k":
      audio = new Audio(`sounds/kick-bass.mp3`); //Audio is object

      break;
    case "l":
      audio = new Audio(`sounds/snare.mp3`); //Audio is object
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 100);
}
