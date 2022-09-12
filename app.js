/*---------------- Constants ----------------*/
let currentQuestion = 0
let score = 0



// hToolQuestions
// sToolQuestions
// equipQuestions

/*----------------- Variables (state) ---------------*/

let winner






/*------- Cached Element References ------------------*/
const restartBtn = document.querySelector("restart")
console.log ("restart")

const nextBtn = document.querySelector("next")
console.log ("Next")

const powerToolsBtn = document.querySelector("pToolQuestions")
console.log ("pToolQuestions")

const handToolsBtn = document.querySelector("hToolQuestions")
console.log ("hToolQuestions")

const specialityToolsBtn = document.querySelector("sToolQuestions")
console.log ("sToolQuestions")

const equipmentBtn = document.querySelector("equipQuestions")
console.log ("equipQuestions")

// const powerToolQuestions = document.querySelector("")




/*-------------- Event Listeners --------------------*/

powerToolBtn.addEventListener('click', handleClick)

handToolBtn.addEventListener('click', handleClick)

specialityToolBtn.addEventListener('click', handleClick)

equipBtn.addEventListener('click', handleClick)

nextBtn.addEventListener('click', handleClick)

restartBtn.addEventListener('click', init)

console.log(hello)

/*----------- Functions -------------------*/
init()

function init () {
    let questions = pToolQuestions
    winner = null
    render ()
}

function handleClick(evt) {
    let pToolQuestions = parseInt(evt.target.pToolQuestions)
    console.log(pToolQuestions)
}

let pToolQuestions = [{
    qNumber: 1,
    question: "What Power Tool is this?",
    answer: 3,
    answerOptions: ["Saw", "Hammer Drill", "Hack Saw", "Saw Zall"],

    qNumber: 2,
    question: "What Power Tool is this?",
    answer: 1,
    answerOptions: ["Drill", "Hammer Drill", "Saw Zall", "Big Drill"],

    qNumber: 3,
    question: "What Power Tool is this?",
    answer: 2,
    answerOptions: ["Saw", "Circular Saw", "Band Saw", "Hack Saw"],

    qNumber: 4,
    question: "What Power Tool is this?",
    answer: 3,
    answerOptions: ["Round Saw", "Jack Hammer", "Hack Saw", "Circular Saw"],
}]
console.log (pToolQuestions)