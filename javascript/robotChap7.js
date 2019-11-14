document.getElementById("lefteye").style.background = "white";
document.getElementById("head").style.background = "lightgrey";
document.getElementById("righteye").style.background = "black";
document.getElementById("mouth").style.background = "white";
document.getElementById("nose").style.background = "white";
document.getElementById("righteye").style.border = "4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.color = "#FF0000";
document.getElementById("head").style.borderTop = "5px black solid";
document.getElementById("body").style.border = "2px black solid";
document.getElementById("mouth").style.borderRadius = "4px";
//document.getElementById("head").style.transform = "rotate(15deg)";
var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}
var leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}
var nose = document.getElementById("nose");
nose.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}
var mouth = document.getElementById("mouth");
mouth.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 70) {
            clearInterval(id);
        }
    }
}
var rightArm = document.getElementById("rightarm");
rightArm.addEventListener("click", moveUpDown);

function moveRound(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 10) {
            clearInterval(id);
        }
    }
}
var head = document.getElementById("head");
head.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 5) {
            clearInterval(id);
        }
    }
}
var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveLeftRight);

function moveLeftRight(e) {
    var robotPart = e.target;
    var left = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 71) {
            clearInterval(id);
        }
    }
}