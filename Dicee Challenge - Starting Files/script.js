let randomDiceP1, randomDiceP2;
let i = 0;

const rolling = setInterval(diceRolls, 50);

function diceRolls() {
  randomDiceP1 = Math.floor(Math.random() * 6) + 1;
  randomDiceP2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomDiceP1 + ".png");

  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomDiceP2 + ".png");

  if ((i > 20) & (randomDiceP1 > randomDiceP2)) {
    document.querySelector(".container h1").innerHTML = "p1 wins";

    stopFunction(rolling);
    
  } else if ((i > 20) & (randomDiceP1 < randomDiceP2)) {
    document.querySelector(".container h1").innerHTML = "p2 wins";

    stopFunction(rolling);
  }

  i++;
}

function stopFunction(a) {
  clearInterval(a);
}
