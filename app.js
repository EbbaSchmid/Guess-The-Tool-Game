/*---------------- Constants ----------------*/



// hToolQuestions
// sToolQuestions
// equipQuestions

/*----------------- Variables (state) ---------------*/

let winner






/*------- Cached Element References ------------------*/
const restartBtn = document.querySelector("restart")
console.log ("restart")

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

// powerToolsBtn.addEventListener('click', input(pToolQuestions))

// console.log(qNumber1)

/*----------- Functions -------------------*/
// init()

// function init () {
//     questions = [null, null, null, null, null, null, null, null, null, null]
//     winner = null
//     render ()
// }

function handleClick(evt) {
    let powerToolQuestions = parseInt(evt.target.id[1])
    console.log(evt.target.id[1])
}

let pToolQuestions = {
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
}
console.log (pToolQuestions)