const soundLink = [
  /*"beats/kick-bass.mp3",
  "beats/snare.mp3",
  "beats/crash.mp3",
  "beats/tom-1.mp3",
  "beats/tom-2.mp3",
  "beats/tom-3.mp3",*/
  "sounds/Clap (1) @jezzytheproducer.wav",
  "sounds/Clap (2) @jezzytheproducer.wav",
  "sounds/Clap (4) @jezzytheproducer.wav",
  "sounds/Clap (4) @jezzytheproducer.wav",
  "sounds/Kick (5) @jezzytheproducer.wav",
  "sounds/Hihat (3) @jezzytheproducer.wav",
];

let containerWidth;
let row, column;
let columnOne = $(".seq-col-ini .sequencer-row");
let bpm = 0.883333;

window.addEventListener("load", () => {
  getContainerWidth();
  checkBoardOverflow();
});

window.addEventListener("resize", checkBoardOverflow);

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

$(".sequencer-row").click(onOffToggle);

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
    const columnInterval = setTimeout( () => {
      column = document.querySelectorAll(".sequencer-column");
      row = document.querySelectorAll(".sequencer-row");
      column[i].classList.toggle("column-on");

      for (let j = 0; j < $(".column-on .sequencer-row.on").length; j++) {
        let selectedColumn = document.querySelectorAll(
          ".column-on .sequencer-row.on"
        )[j].classList[1];
        document.querySelectorAll(".column-on .sequencer-row.on")[j];
        document.querySelectorAll(".column-on .sequencer-row.on")[j];
        let regex = /\d$/g;
        const choosesoundArr = parseInt(selectedColumn.match(regex) - 1);
        let sounded = new Audio(soundLink[choosesoundArr]);
        console.log(sounded);
        sounded.play();

        console.log($(".column-on .sequencer-row.on")[j]);

        //$(selectedClass).addClass("active-row");
      }

        setTimeout(() => column[i].classList.toggle("column-on"), 80);
        //console.log(column[i]);
      }, 125 * (i - 1));    fd

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

function checkBoardOverflow() {
  window.innerWidth < containerWidth
    ? $(".container").css({
        "justify-content": "flex-start",
      })
    : $(".container").css({
        "justify-content": "center",
      }); 
}

function getContainerWidth() {
  $(".container").css("width", "fit-content");
  containerWidth = $(".container").outerWidth() + 15;
  $(".container").css("width", "calc(100% - 20px)");
}

addSounds.click(() => {
  let numberOfSounds = columnOne.length;
  let numberOfNotes = $(".seq-col-ini").length - 2;

  let regex = /\d+\son|\d+/;
  let seqRow = $(".seq-col-ini .sequencer-row")[0].outerHTML.replace(
    regex,
    numberOfSounds + 1
  );
  console.log(typeof seqRow);
  $(".sequencer-column").append(seqRow);

  columnOne = $(".seq-col-ini .sequencer-row");

  numberOfSounds = columnOne.length;
  numberOfNotes = $(".seq-col-ini").length - 2;

  $(".sequencer-row:last-child").click(onOffToggle);

  $(".seq-col-mute .sequencer-row:last-child").append(
    '<i class="fa-solid fa-volume-xmark center"></i>'
  );

  $(".seq-col-mute .sequencer-row:last-child").addClass("mute-btn");
});

addFrames.click(() => {
  for (let i = 1; i <= 4; i++) {
    let numberOfSounds = columnOne.length;
    let numberOfNotes = $(".sequencer-column").length - 2;

    let regex = /[0-9]+ on|\d+/;
    let seqColumn = $(".sequencer-column")[
      $(".sequencer-column").length - 1
    ].outerHTML.replace(regex, numberOfNotes + 1);

    $(".container").append(seqColumn);

    $(".sequencer-column:last-child .sequencer-row").each(function () {
      $(this).removeClass("on");
    });
  }

  getContainerWidth();
  checkBoardOverflow();
});

// FUNCTIONS

function onOffToggle() {
  $(this).toggleClass("on");

  if ($(this).is(".mute-btn.on") === true) {
    $(this).children().removeClass("fa-volume-high");
    $(this).children().addClass("fa-volume-xmark");
  }

  if ($(this).is(".mute-btn.on") === false) {
    $(this).children().removeClass("fa-volume-xmark");
    $(this).children().addClass("fa-volume-high");
  }
}
