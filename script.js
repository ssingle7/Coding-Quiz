var timer; 
var seconds =10;
var startBtn = document.getElementById("startBtn");
var startPage = document.querySelector(".start-page")
var quizQues = document.getElementById(".questions")

//Before quiz starts timer should show time remaining 
//When StartQuiz function fires welcome page is hidden and the question page is shown 
//When startQuiz function fires the timer begins 
var currentQuestionIndex = 0;
var questionsArray = [
    {
        question: "String values must be enclosed within_____ when being assigned to variables.",
        choices: ["a.commas", "b.curly brackets", "c.quotes", "d.parenthesis"],
        correctAnswer: "d.parenthesis"
    }, 

    {
        question: "Arrays in Javascript can be used to store ________.",
        choices: ["a.numbers and strings", "b.other arrays", "c.booleans", "d.all of the above"],
        correctAnswer: "d.all of the above"
    },
    
    {
        question: "The condition in an if/ else statement is enclosed within ________",
        choices: ["a.", "b.curly brackets", "c.quotes", "d.parenthesis"],
        correctAnswer: "b.curly brackets"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a.Javascript", "b.terminal/bash", "c.for loops", "d.console log"],
        correctAnswer: "d.console log"
    }, 
    
    {
        question: "The primary use of an array is to _________.",
        choices: ["a.iterate over it", "b.log to console", "c.append to element", "d.create element"],
        correctAnswer: "a.iterate over it"
    },
] 


function startQues(){

}

var choicesArray = questionsArray[currentQuestionIndex].choices
for (let i = 0; i < choicesArray.length; i++) {
    const element = choicesArray[i];
    console.log(element)
    // var buttons = document.createElement("button")
    // buttons.textContent = questionsArray[i]
    // buttons.setAttribute("id", "button" + parseInt(i +1))
    // buttons.setAttribute("style", "display:block; margin-bottom: 5px")

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