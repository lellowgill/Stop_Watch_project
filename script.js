//Convert time to a format of hours, 
//minutes, seconds, and milliseconds

function timeToString(time) {
    const diffInHrs = time / 3600000;
    const hh = Math.floor(diffInHrs);

    const diffInMin = (diffInHrs - hh) * 60;
    const mm = Math.floor(diffInMin);

    const diffInSec = (diffInMin - mm) * 60;
    const ss = Math.floor(diffInSec);

    const diffInMs = (diffInMin - ss) * 100;
    const ms = Math.floor(diffInMs);

    const formattedMM = mm.toString().padStart(2, "0");
    const formattedSS = ss.toString().padStart(2, "0");
    const formattedMS = ms.toString().padStart(2, "0");

    return 
    `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below

const startTime;
const elapsedTime = 0;
const timerInterval;

// Create function to modify innerHTML

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
}

    function pause() {
        clearInterval(timerInterval);
        showButton("PLAY");
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
}

  // Create function to display buttons

function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}

// Create function to display buttons 

function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY"  ? playButton : 
pauseButton;
    const buttonToHide = buttonKey === "PLAY"  ? pauseButton : 
playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";    
}

// Create event listeners

const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
