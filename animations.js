
function scaleUp(myId) {
    document.getElementById(myId).style.fontSize = "5vh";
    setTimeout(function () {
        document.getElementById(myId).style.fontSize = "3vh";
    }, 250);
}

function displayUnit(unit) {
    document.getElementById("unitText").innerHTML = "Topic: " + unit;
    
    document.getElementById("flash").style.display = "block";
    document.getElementById("flash").style.opacity = "1";
    document.getElementById("flash").style.backgroundColor = "black";
    setTimeout(function () {
        document.getElementById("flash").style.display = "none";
        document.getElementById("flash").style.opacity = "0";
        document.getElementById("flash").style.backgroundColor = "none";
        document.getElementById("unitText").innerHTML = "";

    }, 3000); //2000
}

function nextQuestion() {
    document.getElementById("prompt").style.transform = "translateY(65vh) scale(1)";
    setTimeout(function () {
        document.getElementById("prompt").style.transform = "translateY(3vh) scale(1)";
        if (count < 10){
            createPrompt();
        } else {
            displayGameEnd("gameWin");
        }
    }, 500);
}

function displayGameEnd(determine) {
    if (determine == "gameWin") {
        document.getElementById("gameEnd").innerHTML = "YOU WON!";
    } else {
        document.getElementById("gameEnd").innerHTML = "GAME OVER...";
    }
    setTimeout(function () {
        document.getElementById("prompt").style.opacity = "0";
        document.getElementById("prompt").style.visibility = "hidden";
        setTimeout(function () {
            document.getElementById("gameOver").style.visibility = "visible";
            document.getElementById("gameOver").style.transform = "scale(1)";
        }, 1000);
    }, 1000);
}

//game end (lost)
function endFlash() {
    document.getElementById("flash").style.display = "block";
    document.getElementById("flash").style.opacity = "0.8";
    document.getElementById("flash").style.backgroundColor = "red";
}