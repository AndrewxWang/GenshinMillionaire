var count = 0;
var questionsList = [];

function createPrompt() {
    document.getElementById("money").innerHTML = "$" + (count*100000);
    // if ur reading this, im so sorry...
    document.getElementById("A").innerHTML = "&nbsp";
    document.getElementById("B").innerHTML = "&nbsp";
    document.getElementById("C").innerHTML = "&nbsp";
    document.getElementById("D").innerHTML = "&nbsp";

    document.getElementById("question").innerHTML = questionsList[count]["Question"];
    setTimeout(function () {
        document.getElementById("A").innerHTML = "<font color='#EBB453'>A:</font> " + questionsList[count]["A"];
        setTimeout(function () {
            document.getElementById("B").innerHTML = "<font color='#EBB453'>B:</font> " + questionsList[count]["B"];
            setTimeout(function () {
                document.getElementById("C").innerHTML = "<font color='#EBB453'>C:</font> " + questionsList[count]["C"];
                setTimeout(function () {
                    document.getElementById("D").innerHTML = "<font color='#EBB453'>D:</font> " + questionsList[count]["D"];
                }, 2000);
            }, 2000);
        }, 2000);
    }, 5000);

}

function checkAns(letter) {
    document.getElementById(letter).style.backgroundColor = "#904C04";
    document.getElementById(letter).style.color = "black";
    document.getElementById(letter).style.border = "0.5vh solid #0D8DD5"

    setTimeout(function(){
        if (letter == questionsList[count]["ANS"]) {
            document.getElementById(letter).style.backgroundColor = "green";
            count++;
        } else {
            document.getElementById(questionsList[count]["ANS"]).style.backgroundColor = "green";
            setTimeout(function(){
                displayGameEnd("gameOver");
            }, 500);
        }
    
        setTimeout(function () {
            document.getElementById(letter).style.backgroundColor = "";
            document.getElementById(letter).style.color = "";
            document.getElementById(letter).style.border = "";
            nextQuestion();
        }, 3000);
    }, 3000);
}

function getList(theList) {
    if (theList == "characters") {
        return characterQList;
    } else if (theList == "events") {
        return eventQList;
    } else if (theList == "lore") {
        return loreQList;
    } else if (theList == "misc") {
        return miscQList;
    }
}

function loadSite(theListName) {
    questionsList = getList(theListName);
    document.getElementById("title").style.fontSize = "5vh";
    document.getElementById("siteButtons").style.display = "none";

    displayUnit(theListName);
    createPrompt();

    document.getElementById("fiftyfifty").style.display = "inline-block";
    document.getElementById("chat").style.display = "inline-block";
    document.getElementById("phone").style.display = "inline-block";

    setTimeout(function () {
        document.getElementById("prompt").style.transform = "translateY(3vh) scale(1)";
    }, 300);
}

function useFF(){
   setTimeout(function(){
    document.getElementById("fiftyfifty").style.display = "none";
    var ans = questionsList[count]["ANS"];

    //im lazy
    if (ans == "A"){
        document.getElementById("B").innerHTML = "&nbsp";
        document.getElementById("C").innerHTML = "&nbsp";
    } else if (ans == "B"){
        document.getElementById("A").innerHTML = "&nbsp";
        document.getElementById("D").innerHTML = "&nbsp";        
    } else if (ans == "C"){
        document.getElementById("B").innerHTML = "&nbsp";
        document.getElementById("D").innerHTML = "&nbsp";
    } else if (ans == "D"){
        document.getElementById("A").innerHTML = "&nbsp";
        document.getElementById("C").innerHTML = "&nbsp";
    }
   }, 500);
}

function useNN(name){
    document.getElementById(name).style.display = "none";
}