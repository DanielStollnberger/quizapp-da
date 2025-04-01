let questions = [
    {
        "question": "Who was the first president of the united states of america?",
        "answer_1": "Mark Gebauer",
        "answer_2": "Hakan Calagnoglu",
        "answer_3": "Timmothy Weah",
        "answer_4": "George Washington",
        "right_answer": 4
    },
    {
        "question": "Wer hat die Mutter von Jeremy in den A.... gef....?",
        "answer_1": "Major Monogwam der geile oida",
        "answer_2": "Ferb",
        "answer_3": "Jeremy",
        "answer_4": "Perry",
        "right_answer": 1
    },
    {
        "question": "How many questionmarks does the 'Three Questionmarks' have?",
        "answer_1": "Thirty-eight",
        "answer_2": "Seven",
        "answer_3": "Three",
        "answer_4": "Twenty-one",
        "right_answer": 3
    },
    {
        "question": "Who ate the chicken-shawarma?",
        "answer_1": "Billy",
        "answer_2": "Marcus",
        "answer_3": "Thomas",
        "answer_4": "Abdulrahman Saleimak Vahid Mohammed",
        "right_answer": 4
    },
    {
        "question": "Who's the real G.O.A.T?",
        "answer_1": "Christiano Ronaldo",
        "answer_2": "Lionel Messi",
        "answer_3": "Anthony",
        "answer_4": "IShowSpeed",
        "right_answer": 3
    }
]

let rightArray = [];
let currentQuestion = 0;


function init() {
    document.getElementById('b_tag').innerHTML = questions.length;
    document.getElementById('progress-bar').style.width = '1%';
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    if (gameIsOver()) {
      showEndScreen();
    } else {
       showNextQuestion(question);
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedAnswer = document.getElementById(selection);
    let selectedAnswerNumber = selection.slice(-1);
    if (selectedAnswerNumber == question.right_answer) {
        answerIsRight(selectedAnswer);
    } else {
        answerIsFalse(selectedAnswer,question);
    };
    document.getElementById("next_question_button").disabled = false;
}

function addOneToCurrentQuestion() {
    updateAnswers();
    currentQuestion++;
    document.getElementById('progress-bar').style.width = `${currentQuestion / questions.length * 100}%`;
    setTimeout(showQuestion, 400);
}

function restart() {
    rightArray = [];
    currentQuestion = 0;
    updateFromEndToStartScreen();
    init();
}

function gameIsOver() {
    return currentQuestion >= questions.length
}

function showEndScreen() {
    document.getElementById('finish').style.display = '';
    document.getElementById('card-body').style.display = 'none';
    document.getElementById("image").src = "./assets/img/congratulation.jpg";
    document.getElementById('b_endscreen_tag').innerHTML = questions.length;
    document.getElementById('right_answers').innerHTML = rightArray.length;
    document.getElementById('image').style = '';
}

function showNextQuestion(question) {
    document.getElementById('question').innerHTML = question.question;
    document.getElementById('answer_1').innerHTML = question.answer_1;
    document.getElementById('answer_2').innerHTML = question.answer_2;
    document.getElementById('answer_3').innerHTML = question.answer_3;
    document.getElementById('answer_4').innerHTML = question.answer_4;
    document.getElementById("number-actual").innerHTML = currentQuestion + 1;
}

function updateAnswers() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById("next_question_button").disabled = true;
}

function updateFromEndToStartScreen() {
    document.getElementById("image").src = "./assets/img/questionmark.jpg";
    document.getElementById("image").style.filter = "grayscale(100%)";
    document.getElementById('finish').style.display = 'none';
    document.getElementById('card-body').style.display = 'block';
}

function answerIsRight(selectedAnswer) {
    selectedAnswer.parentNode.classList.add('bg-success');
        rightArray.push(selectedAnswer);
        new Audio('https://cdn.freesound.org/previews/442/442266_9126818-lq.mp3').play();
}

function answerIsFalse(selectedAnswer,question) {
    selectedAnswer.parentNode.classList.add('bg-danger');
        document.getElementById(`answer_${question['right_answer']}`).parentNode.classList.add('bg-success');
        new Audio('https://cdn.freesound.org/previews/132/132424_2276109-lq.mp3').play();
}