//Convert time to a format of hours, 
//minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInMin - mm) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = mm.toString().padStart(2, "0");
    let formattedMS = mm.toString().padStart(2, "0");

    return 
    `${formattedMM}:${formattedSS}:${formattedMS}`;

}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {

    document.getElementById('display').innerHTML = txt;
}
