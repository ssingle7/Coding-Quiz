var timer; 
var seconds =10;
var buttonEl = document.getElementById("startBtn");
//Before quiz starts timer should show time remmining 
//When StartQuiz function fires welcome page is hidden and the question page is shown 
//When startQuiz function fires the timer begins 




    
function StartQuiz(){
    startTimer();
    // if(storedScores === null){
    //     allScores = storedScores;
    // }
}



// showNextQuestion();


function startTimer(){
    timer = setInterval(function(){
        seconds--;
        if (seconds===0){
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}


function endGame(){
    alert("Time Ran Out!");
}

buttonEl.addEventListener("click", StartQuiz)


