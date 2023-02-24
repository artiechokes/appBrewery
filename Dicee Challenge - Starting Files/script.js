let randomDiceP1, randomDiceP2;
let i = 0;
let counter = 50;

let rollCount = Math.floor(Math.random() * 30) + 1;
console.log(rollCount);

document.querySelector(".roll-btn").addEventListener("click", function () {
  while (rollCount < 15) {
    rollCount = Math.floor(Math.random() * 30) + 1;
    console.log(rollCount);
  }

  let diceRolls = function () {
    randomDiceP1 = Math.floor(Math.random() * 6) + 1;
    randomDiceP2 = Math.floor(Math.random() * 6) + 1;

    anime({
      targets: ".dice img",
      rotate: ["0deg", "10deg", "-10deg", "0deg"],
      translateX: [3, -1],
      translateY: [1, -3],
      duration: 50,
    });

    document
      .querySelector(".img1")
      .setAttribute("src", "images/dice-" + randomDiceP1 + ".svg");

    document
      .querySelector(".img2")
      .setAttribute("src", "images/dice-" + randomDiceP2 + ".svg");

    if ((i > rollCount) & (randomDiceP1 > randomDiceP2)) {
      document.querySelector(".container h1").innerHTML = "p1s";

      stopFunction(rolling);
    } else if ((i > rollCount) & (randomDiceP1 < randomDiceP2)) {
      document.querySelector(".container h1").innerHTML = "p2s";

      stopFunction(rolling);
    }
    console.log(i);
    if (i === rollCount) {
      //counter *= 50;
      //rolling = setInterval(diceRolls, counter);
    }
    i++;
  };

  function stopFunction(a) {
    clearInterval(a);
    i = 0;
    document.querySelector(".container h1").innerHTML = "Roll Dice";
  }

  let rolling = setInterval(diceRolls, counter);
});
