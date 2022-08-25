/* $(".game-pad").click(function () {
  if ($(this).css("background-color") === "rgb(255, 255, 255)") {
    $(this).css("background-color", $(this).attr("id"));
  } else {
    $(this).css("background-color", "#fff");
  }
}); */

let randomNumber, audio, randomChosenColor, startGame, answer, pointerTimeout;
let gamePattern = [];
let userPattern = [];
const btnColor = ["green", "red", "yellow", "blue"];

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = btnColor[randomNumber];
  gamePattern.push(randomChosenColor);
  pointerTimeout = gamePattern.length * 500;

  $.each(gamePattern, function (index, value) {
    let gameLevel = index + 1;
    $("h2").text("Level " + gameLevel);
    $(".game-pad").addClass("unclickable");
    setTimeout(function () {
      $("#" + value).toggleClass("game-pad-click");
      audio = new Audio("sounds/Boop-sound-effect.mp3");
      audio.play();
      setTimeout(() => $("#" + value).toggleClass("game-pad-click"), 300);
    }, index * 500);
  });

  setTimeout(() => $(".game-pad").toggleClass("unclickable"), pointerTimeout);
}

$(".test-btn").on("click", nextSequence);

let userAudio = new Audio("sounds/mixkit-select-click-1109.wav");
let seqAudio = new Audio("sounds/Boop-sound-effect.mp3");
let loseAudio = new Audio("sounds/Bubbles-sound-effect.mp3");

$(document).keypress((e) => {
  if (startGame !== true) {
    startGame = true;
    nextSequence();
  } else {
    return;
  }
});

$(".game-pad").click(function () {
  if (startGame !== true) {
    alert("PLEASE START GAME");
    return;
  } else {
    let userColor = $(this).attr("id"); //must use *this* when creating var to work
    userPattern.push(userColor);

    if (
      userPattern[userPattern.length - 1] ===
      gamePattern[userPattern.length - 1]
    ) {
      $(this).toggleClass("game-pad-click");
      setTimeout(() => $(this).toggleClass("game-pad-click"), 150);
      userAudio = new Audio("sounds/mixkit-select-click-1109.wav");
      userAudio.play();

      if (userPattern.length === gamePattern.length && startGame === true) {
        userPattern = [];
        audio = new Audio("sounds/level-up-47165.mp3");

        setTimeout(() => audio.play(), 200);
        setTimeout(nextSequence, 2000);
      }
    } else {
      console.log("GAME OVER");
      answer = gamePattern[userPattern.length - 1];

      startGame = false;
      gamePattern = [];
      userPattern = [];
      $("h2").text("Press A Key to Restart");
      loseAudio.play();

      $(".game-pad").toggleClass("game-pad-lost");
      $("#" + answer).toggleClass("answer");
      setTimeout(() => {
        $(".game-pad").toggleClass("game-pad-lost");
        $("#" + answer).toggleClass("answer");
      }, 300);
    }
  }
});

// sounds/mixkit-select-click-1109.wav
// sounds/mixkit-opening-software-interface-2578.wav
// sounds/mixkit-cool-interface-click-tone-2568.wav
