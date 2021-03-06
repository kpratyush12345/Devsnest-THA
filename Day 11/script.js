const quizData = [
  {
    question: "What is the programming lanugage used for Machine Learning",
    a: "Python",
    b: "C++",
    c: "Java",
    d: "Ruby",
    correct: "a",
  },
  {
    question: "What is the most used programming lanugage",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What is the least used programming lanugage",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "Ruby",
    correct: "d",
  },
  {
    question:
      "What is the most used programming lanugage for competitive programming",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "Ruby",
    correct: "b",
  },
];
const anim = document.querySelector("animate");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuestion];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button style="width:80%" onclick ="location.reload()">Reload</button>`;
    }
  }
});
