var timer; 
var seconds =10;
var buttonEl = document.getElementById("startBtn");


function beginQuiz(event)
event.preventDefault();


buttonEl.addEventListener("click", StartQuiz)
    
    function StartQuiz();
if(storedScores !==null){
    allScores = storedScores;
}
startTimer();
// showNextQuestion();
});

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




