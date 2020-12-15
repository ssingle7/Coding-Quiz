var timer; 
var seconds =10;
var startBtn = document.getElementById("startBtn");
var startPage = document.querySelector(".start-page")
//Before quiz starts timer should show time remaining 
//When StartQuiz function fires welcome page is hidden and the question page is shown 
//When startQuiz function fires the timer begins 
var currentQuestionIndex = 0;
var questionsArray = [
    {
        question: "What color is the sky?",
        choices: ["a.grey", "b.purple", "c.red", "d.blue"],
        correctAnswer: "d.blue"
    }
] 
var choicesArray = questionsArray[currentQuestionIndex].choices
for (let i = 0; i < choicesArray.length; i++) {
    const element = choicesArray[i];
    console.log(element)
}


console.log(questionsArray[currentQuestionIndex].question)
startBtn.addEventListener("click", function(){
 startPage.classList.add("visually-hidden");
})



    
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




// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// ```