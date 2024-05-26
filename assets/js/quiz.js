//Question bank
var questionBank = [
    {
        question: 'What colour is Darth Vader&#39;s light saber?',
        option: ['Red', 'Blue', 'Green', 'Yellow'],
        answer: 'Red'
    },
    {
        question: 'Who is the voice of Darth Vader in the original trilogy?',
        option: ['David Prowse', 'James Earl Jones', 'Mark Hamill', 'Harrison Ford'],
        answer: 'James Earl Jones'
    },
    {
        question: 'What was Darth Vader&#39;s name as a child?',
        option: ['Darth Vader', 'Han Solo', 'Anakin Skywalker', 'Boba Fett'],
        answer: 'Anakin Skywalker'
    },
    {
        question: 'What is the famous line said by Darth Vader?',
        option: ['"Luke, I am your father"', '"No, I am your father"', '"Who is your father?"', '"I am your mother"'],
        answer: '"No, I am your father"'
    },
    {
        question: 'Who are Darth Vader&#39;s children?',
        option: ['Han and Leia', 'Luke and Leia', 'Luke and Han', 'He had no children'],
        answer: 'Luke and Leia'
    },
    {
        question: 'What planet did Darth Vader grow up on?',
        option: ['Hoth', 'Naboo', 'Tatooine', 'Tusken'],
        answer: 'Tatooine'
    },
    {
        question: 'Who was Darth Vader&#39;s grandchild?',
        option: ['Han Solo', 'Leia Organa', 'Luke Skywalker', 'Kylo Ren'],
        answer: 'Kylo Ren'
    },
    {
        question: 'In what movie did Darth Vader tell Luke that he was his father?',
        option: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'The Last Jedi'],
        answer: 'The Empire Strikes Back'
    },
    {
        question: 'What is Darth Vader&#39;s theme song called?',
        option: ['March of the Resistance', 'Cantina Band', 'The Imperial March', 'Imperial Attack'],
        answer: 'The Imperial March'
    },
    {
        question: 'How many minutes of screen time did Darth Vader have in A New Hope?',
        option: ['12', '24', '36', '48'],
        answer: '12'
    },
    {
        question: 'Who convinced Darth Vader to turn to the dark side?',
        option: ['Darth Tyranus', 'Exar Kun', 'Palpatine', 'Darth Palgueis'],
        answer: 'Palpatine'
    },
    {
        question: 'What is Darth Vader&#39;s mother&#39;s name?',
        option: ['Tsumi', 'Rumi', 'Ahmi', 'Shmi'],
        answer: 'Shmi'
    },
    {
        question: 'What body part did Darth Vader cut off of Luke Skywalker?',
        option: ['Left hand', 'Right hand', 'Left leg', 'Right leg'],
        answer: 'Right hand'
    },
    {
        question: 'What Force power did Darth Vader use against his own officers?',
        option: ['Force Choke', 'Force Grip', 'Mind Trick', 'Force Lightning'],
        answer: 'Force Choke'
    },
    {
        question: 'Who was Darth Vader&#39;s wife?',
        option: ['Leia', 'Padme', 'Rey', 'Ahsoka'],
        answer: 'Padme'
    },
    {
        question: 'What age was Darth Vader when he turned to the dark side?',
        option: ['23', '24', '25', '26'],
        answer: '23'
    }
];

/* sounds */
const sound1=document.createElement('audio');
sound1.setAttribute('src', 'assets/audio/Voicy_Darth_Vader_Noooo.mp3');
const sound2=document.createElement('audio');
sound2.setAttribute('src', 'assets/audio/Voicy_Dont_fail_me_again.mp3');
const sound3=document.createElement('audio');
sound3.setAttribute('src', 'assets/audio/Voicy_Darth_Vader_Force_strong.mp3');

/*shuffle the question bank when the document loads */

shuffle(questionBank);

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
// var timeupmodal = document.getElementById('timeupmodal'); 
// var myModal = document.getElementById('myModal'); 
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var currentQuestion = 0;
var score = 0;
var downloadTimer;
var scoreMessage=document.getElementById('score-message');
//Function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (currentQuestion + 1) + ' ' + questionBank[currentQuestion].question;
    option0.innerHTML = questionBank[currentQuestion].option[0];
    option1.innerHTML = questionBank[currentQuestion].option[1];
    option2.innerHTML = questionBank[currentQuestion].option[2];
    option3.innerHTML = questionBank[currentQuestion].option[3];
    questionCount.innerHTML = "Question" + ' ' + (currentQuestion + 1) + ' ' + 'of' + ' ' + (questionBank.length - 6);
    // if(i<questionBank.length-6){
    //     scoreboard.style.display= 'block'
    // }
}

//Function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[currentQuestion].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    } else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

//NEW Function to display next question
function nextQuestion() {
    if (currentQuestion < questionBank.length - 7) {
        currentQuestion = currentQuestion + 1;
        displayQuestion();
    } else {
        clearInterval(downloadTimer);
        switch(true){
            case(score<5):
                scoreMessage.innerText="placholder1";
                sound1.play();
                break;
            case(score<8):
                scoreMessage.innerText="placeholder2";
                sound2.play();
                break;
            case(score>=8):
                scoreMessage.innerText="placeholder3";
                sound3.play();
                break;
        }
        scoreboard.style.display = 'block'
        points.innerHTML = score + '/' + (questionBank.length - 6);
        quizContainer.style.display = 'none';
    }
}

//Function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');

    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';

    for (var a = 0; a < (questionBank.length - 6); a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();

/** 
 * Countdown timer which shows a window alert 
 * if the player does not complete the quiz before the countdown ends
 * if the player does complete the quiz before the countdown ends, then the window alert does not show
 */
document.getElementById("gameStart").addEventListener("click", function () {
    document.getElementById("question-buttons").style.display = "block";
    document.getElementById("welcome-text").style.display = "none";
    document.getElementById("welcome-text-2").style.display = "none";
    document.getElementById("gameStart").style.display = "none";

    var timeleft = 6000;

    document.getElementById("Refresh").style.display ="inline-block";
    var timeleft = 60;
    var currentQuestion = 0;
    var a = 0; a < (questionBank.length - 6);

    downloadTimer = setInterval(function function1() {
        timeleft -= 1;
        document.getElementById("countdown").innerHTML = timeleft +
            " " + "seconds remaining";
        if (timeleft <= -0) {
            $("#myModal").modal();
            clearInterval(downloadTimer);
        } else if (timeleft >= 0, currentQuestion > questionBank.length - 7) {
            $("#myModal").modal('hide');
            quizContainer.style.display = 'none';
            scoreboard.style.display = 'block';
        }
    }, 1000);
});

/** 
 * Connected to the Reset button and 
 * reloads the page so the player 
 * can retsart the quiz and the timer.
 */
function refresh() {
    window.location.reload("Refresh")
}

// Modal function
const overlay = document.querySelector("#overlay");
document.querySelector("#show-modal-btn").
    addEventListener("click", () => {
        overlay.style.display = "block";
    })
document.querySelector("#close-modal-btn").
    addEventListener("click", () => {
        overlay.style.display = "none";
    })
const modalOverlay = document.getElementById("overlay")

modalOverlay.classList.add('hide')

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}
