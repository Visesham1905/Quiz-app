const questions=[
    {
        question:"which is the largest animal in the world?",
        answers: [
            {text:"shark",correct:false},
            {text:"Blue Whele",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"which is the Smallest containent in the world?",
        answers: [
            {text:"Kalahari",correct:false},
            {text:" Gobi",correct:true},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:false},
        ] 
    },

    {
        question:"which is the smallest containent in the world?",
        answers: [
            {text:"Asia",correct:false},
            {text:"Australia ",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]
    },
    {
        question:"which is the largest animal in the world?",
        answers: [
            {text:"shark",correct:false},
            {text:"Blue Whele",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    }
];
const questionElement=document.getElementById('question');
const answerButtons=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');

let score=0;
let currentQuestionIndex=0;

function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion()
{
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

 function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e)
 {
    const selectdBtn=e.target;
    const isCorrect=selectdBtn.dataset.correct==="true";
    if(isCorrect)
    {
    selectdBtn.classList.add("correct");
    score++;
    }else{
        selectdBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true
    });
    nextButton.style.display="block"
 }
 function showScore()
 {
    resetState();
    questionElement.innerHTML=`Your Scored  ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play Again";
    nextButton.style.display="block"
 }


 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }else{
        showScore();
    }
 }


 nextButton.addEventListener("click",()=>
 {
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton();
    }else{
        startQuiz();
    }
 });


startQuiz()