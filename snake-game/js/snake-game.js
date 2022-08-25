function fruit() {
  return "aloha";
}

$("button").click(beginGame);

function beginGame() {
  let left = 0;
  let initSnake = setInterval(() => {
    left += 20;
    $(".snake-head").css("left", `${left}px`);
    

    //if (snakeSize < )

    if (left >= 700) {
      $(".snake-head").css("left", "0px");
      clearInterval(initSnake);
      left = 0;
    }
  }, 200);
}
