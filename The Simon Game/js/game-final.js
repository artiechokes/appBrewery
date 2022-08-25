const btnColor = ["green", "red", "yellow", "blue"];

let gamePattern = [];
let userPattern = [];

let gameStarted = false;
let level = 0;

let randomNumber, audio, randomChosenColor, answer, pointerTimeout;

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = btnColor[randomNumber];
  gamePattern.push(randomChosenColor);
  pointerTimeout = gamePattern.length * 500;
  level++;

  $.each(gamePattern, function (index, value) {
    $(".level").text("Level " + level);
    $(".game-pad").addClass("unclickable");
    setTimeout(function () {
      $("#" + value).toggleClass("game-pad-click");
      playSound("user-click");
      setTimeout(() => $("#" + value).toggleClass("game-pad-click"), 300);
    }, index * 500);
  });

  setTimeout(() => $(".game-pad").toggleClass("unclickable"), pointerTimeout);
}

$(document).keypress((e) => {
  if (gameStarted !== true) {
    gameStarted = true;
    nextSequence();
  } else {
    return;
  }
});

$(".game-pad").click(function () {
  if (gameStarted !== true) {
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
      playSound("user-click");

      if (userPattern.length === gamePattern.length && gameStarted === true) {
        userPattern = [];

        setTimeout(playSound("level-up"), 200);
        setTimeout(nextSequence, 2000);
      }
    } else {
      console.log("GAME OVER");
      answer = gamePattern[userPattern.length - 1];

      gameStarted = false;
      gamePattern = [];
      userPattern = [];
      level = 0;
      $("h2").text("Press A Key to Restart");
      playSound("game-over");

      $(".game-pad").toggleClass("game-pad-lost");
      $("#" + answer).toggleClass("answer");
      setTimeout(() => {
        $(".game-pad").toggleClass("game-pad-lost");
        $("#" + answer).toggleClass("answer");
      }, 300);
    }
  }
});

function playSound(soundName) {
  let audio = new Audio(`sounds/${soundName}.mp3`);
  audio.play();
}

$(".btn").click(() => $(".rules").toggleClass("hide-show"));
