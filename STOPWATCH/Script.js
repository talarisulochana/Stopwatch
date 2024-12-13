let timerDisplay = document.querySelector(".timerDisplay");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let msec = 0;
let secs = 0;
let mins = 0;

let startSound=new Audio("../Audio/Start-sound.mp3");
let stopSound=new Audio("../Audio/Stop-sound.mp3")
let resetSound=new Audio("../Audio/Reset-sound.mp3")

let timerId = null;
startBtn.addEventListener("click", function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
    startSound.play();
});


stopBtn.addEventListener("click", function () {
    clearInterval(timerId);
    stopSound.play();
});


resetBtn.addEventListener("click", function () {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = 0;
    secs = 0;
    mins = 0;
    resetSound.play();
});


function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++
        if (secs == 60) {
            secs = 0;
            mins++;

        }
    }


    let msecString;
    if (msec < 10) {
        msecString = `0${msec}`;
    }
    else {
        msecString = msec;
    }

    let secsString;
    if (secs < 10) {
        secsString = `0${secs}`
    }
    else {
        secsString = secs;
    }

    let minsString;
    if (mins < 10) {
        minsString = `0${mins}`
    }
    else {
        minsString = mins;
    }


    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`

}