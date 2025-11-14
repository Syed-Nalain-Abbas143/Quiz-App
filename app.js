
let startQuiz = document.querySelector(".start-quiz");
let startBtn = document.querySelector(".start-btn");
let quizCont = document.querySelector(".Quiz-questions");
let questionHeading = document.querySelector(".question");
let nextBtn = document.querySelector(".next-btn")
let answerbtns = document.querySelectorAll(".btn");

const questions = [
    {
        question : "What is the largest continent in the world?",
        answer : [
        { text : "Africa", correct : false },
        { text : "Asia", correct : true },
        { text : "Europe", correct : false }, 
        { text : "North America", correct : false }      
        ]
    },
    {
        question : "Mount Everest lies on the border of which two countries?",
        answer : [
        { text : "India and China", correct : false },
        { text : "Nepal and China", correct : true },
        { text : "Bhutan and India", correct : false }, 
        { text : "Pakistan and Nepal", correct : false }      
        ]
    },
    {
        question : "Which river is the longest in the world?",
        answer : [
        { text : "Amazon River", correct : false },
        { text : "Yangtze River", correct : false },
        { text : "Nile River", correct : true }, 
        { text : "Mississippi River", correct : false }      
        ]
    },
    {
        question : "Which desert is the largest in the world?",
        answer : [
        { text : "Gobi Desert", correct : false },
        { text : "Arabian Desert", correct : false },
        { text : "Sahara Desert", correct : true }, 
        { text : "Kalahari Desert", correct : false }      
        ]
    }, 
    {
        question : "What is the smallest country in the world?",
        answer : [
        { text :"Monaco", correct : false },
        { text : "San Marino", correct : false },
        { text : "Vatican City", correct : true }, 
        { text : "Malta", correct : false }      
        ]
    },
    {
        question : "Which ocean is the largest on Earth?",
        answer : [
        { text : "Indian Ocean", correct : false },
        { text : "Arctic Ocean", correct : false },
        { text : "Atlantic Ocean", correct : false }, 
        { text : "Pacific Ocean", correct : true }      
        ]
    },
    {
        question : "What is the capital city of Australia?",
        answer : [
        { text : "Canberra", correct : true },
        { text : "Sydney", correct : false },
        { text : "Melbourne", correct : false }, 
        { text : "Perth", correct : false }      
        ]
    },
    {
        question : "Which country has the most natural lakes?",
        answer : [
        { text : "United States", correct : false },
        { text : "Russia", correct : false },
        { text : "Finland", correct : false }, 
        { text : "Canada", correct : true }      
        ]
    },
    {
        question : "What is the longest mountain range in the world?",
        answer : [
        { text : "Rocky Mountains", correct : false },
        { text : "Andes Mountains", correct : true },
        { text : "Alps", correct : false }, 
        { text : "Himalyas", correct : false }      
        ]
    },
    {
        question : "Which line divides the Earth into Northern and Southern Hemispheres?",
        answer : [
        { text : "Prime Meridian", correct : false },
        { text : "Tropic of Cancer", correct : false },
        { text : "Equator", correct : true }, 
        { text : "Arctic Circle", correct : false }      
        ]
    }
]

let index = 0;

let score = 0;

startBtn.onclick = showQuiz;

function showQuiz() {
    startQuiz.classList.add("hide");
    quizCont.classList.remove("hide");
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[index];
    questionHeading.innerHTML = `${index+1}. ${currentQuestion.question}`;

    // Reset buttons
    answerbtns.forEach(btn => {
        btn.style.border = "3px solid #14599d5b";
        btn.disabled = false;
        btn.classList.remove("hide");
    });
    nextBtn.classList.add("hide");

    // Set answer text and click handler
    answerbtns.forEach((btn, i) => {
        btn.innerHTML = currentQuestion.answer[i].text;
        btn.dataset.correct = currentQuestion.answer[i].correct;

        btn.onclick = (e) => {
            nextBtn.classList.remove("hide");

            if (e.target.dataset.correct === "true") {
                e.target.style.border = "3px solid green";
                score++;
            } else {
                e.target.style.border = "3px solid red";
            }

            // disable all buttons
            answerbtns.forEach(b => b.disabled = true);
        };
    });
}

nextBtn.onclick = () => {
    index++;
    if (index < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionHeading.innerHTML = `Your score is ${score}/${questions.length}`;
    nextBtn.innerHTML = "Try Again";

    // Hide answer buttons
    answerbtns.forEach(btn => btn.classList.add("hide"));

    // Restart quiz
    nextBtn.onclick = () => location.reload();
}