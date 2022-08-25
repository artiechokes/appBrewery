let row, column;
let bpm = 0.883333;
let columnOne = $(".seq-col-ini .sequencer-row");

window.addEventListener("resize", () => {
  window.innerWidth < $(".container").width()
    ? $(".container").css({
        "justify-content": "flex-start",
        //"min-width": "100%",
        //"overflow-x": "scroll",
      })
    : $(".container").css({
        "justify-content": "center",
        //"min-width": "fit-content",

        //"overflow-x": "none",
      });
});

$(".seq-col-ini .sequencer-row").click(function () {
  $(".sequencer-row.active").removeClass("active on active-row");
  $(".active-row").removeClass("active active-row");
  //$(".sequencer-row.seq-row-2").addClass("active-row");
  $(this).toggleClass("active active-row");
  if ($(".seq-col-ini .sequencer-row").hasClass("active") === true) {
    let selectedClass =
      "." +
      document.querySelector(".seq-col-ini .sequencer-row.active").classList[1];

    $(selectedClass).addClass("active-row");

    console.log($(".seq-col-ini .sequencer-row.active"));
    console.log(soundLink);
    const regex = /\d$/g;
    const choosesooundArr = parseInt(selectedClass.match(regex) - 1);
    let sounded = new Audio(soundLink[choosesooundArr]);
    console.log(sounded);
    sounded.play();
    console.log(choosesooundArr);
  }
});

$(".sequencer-row").click(function () {
  $(this).toggleClass("on");
});

let drumPadOn;
function start() {
  if (drumPadOn === true) {
    return;
  } else {
    drumPadOn = true;
    loopBeat();
    const loopInterval = setInterval(
      loopBeat,
      110.416666625 * $(".sequencer-column").length
    );
    stopBtn.click(() => {
      clearInterval(loopInterval);
      drumPadOn = false;
    });
  }
}

const playBtn = $("button.play");
const stopBtn = $("button.stop");
const addFrames = $("button.add-frames");
const addSounds = $("button.add-sounds");

playBtn.click(start);
playBtn.click(() => document.getElementById("video").play());

function loopBeat() {
  for (let i = 2; i < $(".sequencer-column").length; i++) {
    const columnInterval = setTimeout(() => {
      column = document.querySelectorAll(".sequencer-column");
      row = document.querySelectorAll(".sequencer-row");
      column[i].classList.toggle("column-on");

      for (let j = 0; j < $(".column-on .sequencer-row.on").length; j++) {
        let selectedColumn = document.querySelectorAll(
          ".column-on .sequencer-row.on"
        )[j].classList[1];
        document.querySelectorAll(".column-on .sequencer-row.on")[j];
        document.querySelectorAll(".column-on .sequencer-row.on")[j];
        const regex = /\d$/g;
        const choosesooundArr = parseInt(selectedColumn.match(regex) - 1);
        let sounded = new Audio(soundLink[choosesooundArr]);
        console.log(sounded);
        sounded.play();

        console.log($(".column-on .sequencer-row.on")[j]);

        //$(selectedClass).addClass("active-row");
      }

      setTimeout(() => column[i].classList.toggle("column-on"), 80);
      //console.log(column[i]);
    }, 125 * (i - 1));

    stopBtn.click(() => {
      clearInterval(columnInterval);
      drumPadOn = false;
    });
  }
}

stopBtn.click(() => {
  document.getElementById("video").pause();
  document.getElementById("video").currentTime = 0;
});
