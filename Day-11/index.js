const quizData = [
  {
     Question: "Which language runs in a web browser?",
     a: "Java",
     b: "C",
     c: "Python",
     d: "Javascript",
     correct: "d",
  },
  {
    Question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style sheets",
    c: "Cascading Simple Sheets",
    d: "None of the above",
    correct: "b",
 },
 {
  Question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Hypertext Markdown Language",
  c: "Hyperloop Machine Language",
  d: "Hyperloop Machine Learning",
  correct: "a",
},
{
  Question: "What year was Javascript Launched?",
  a: "1996",
  b: "1995",
  c: "1994",
  d: "None of the above",
  correct: "b",
}
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz()
{
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.Question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)

}

function getselected() {
    let answer
    answerEls.forEach(answerEl => {
      if(answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getselected()
  if(answer) {
    if(answer === quizData[currentQuiz].correct)
    {
      score++; 
    }

    currentQuiz++
    if(currentQuiz < quizData.length)
    {
      loadQuiz()
    }
    else{
      quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly</h2>
      
      <button onClick="loction.reload()">Reload</button> 
      `
    }
  }
})















