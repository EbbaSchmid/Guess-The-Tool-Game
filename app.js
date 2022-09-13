/*---------------- Constants ----------------*/
let currentQuestion = 0
// let powerToolsAudio = new Audio ()



// hToolQuestions
// sToolQuestions
// equipQuestions

/*----------------- Variables (state) ---------------*/

let winner
let score

let powerToolSound = new Audio("../assets/drill.mp3")

let handToolSound = new Audio("../assets/hammering.mp3")

let specialToolSound = new Audio("../assets/flame-ignition.mp3")

let equipSound = new Audio("../assets/excavator-working.mp3")



/*------- Cached Element References ------------------*/
const countdownEl = document.getElementById('countdown')

const restartBtn = document.querySelector("restart")
console.log ("restart")

const nextBtn = document.querySelector("next")
console.log ("Next")




// const powerToolsBtn = document.getElementById("pToolQuestions")
// console.log ("pToolQuestions")

// const handToolsBtn = document.getElementById("hToolQuestions")
// console.log ("hToolQuestions")

// const specialityToolsBtn = document.getElementById("sToolQuestions")
// console.log ("sToolQuestions")

// const equipmentBtn = document.getElementById("equipQuestions")
// console.log ("equipQuestions")

// const powerToolQuestions = document.querySelector("")

// var tag_id = document.getElementById('tagid');
// var newNode = document.createElement('p');
// newNode.appendChild(document.createTextNode('html string'));


/*-------------- Event Listeners --------------------*/

powerToolBtn.addEventListener('click', function(evt){
    powerToolSound.play()
})

handToolBtn.addEventListener('click', function(evt){
    handToolSound.play()
})

specialityToolBtn.addEventListener('click', function(evt){
    specialToolSound.play()
})

equipBtn.addEventListener('click', function(evt){
    equipSound.play()
})

// nextBtn.addEventListener('click', next)

// restartBtn.addEventListener('click', init)

// console.log("hello")

/*----------- Functions -------------------*/
init()

function init () {
    // let questions = pToolQuestions
    // winner = null
    // render ()
    console.log("hello")
    buttons()
}

let powerToolBtn = {
    audio: powerToolSound,
    id: powerToolBtn, 
    text: "Power Tools",
    questions: pToolQuestions,
}



function buttons() {
    const categoryButtons = document.getElementById("categoryButtons")
    const powerToolBtn = document.createElement("button")
    powerToolBtn.setAttribute("id", "powerToolBtn")
    powerToolBtn.appendChild(document.createTextNode("power tools"))
    categoryButtons.appendChild(powerToolBtn)
}


function Click(evt) {
    let pToolQuestions = parseInt(evt.target.pToolQuestions)
    console.log(pToolQuestions)
}

let pToolQuestions = [
    {question: "What Power Tool is this?",
    img:"",
    answer: "Make into string",
    answerOptions: ["Saw", "Hammer Drill", "Hack Saw", "Saw Zall"]},


    {question: "What Power Tool is this?",
    answer: "Make into string",
    answerOptions: ["Drill", "Hammer Drill", "Saw Zall", "Big Drill"]},

    {question: "What Power Tool is this?",
    answer: "Make into string",
    answerOptions: ["Saw", "Circular Saw", "Band Saw", "Hack Saw"]},

    {question: "What Power Tool is this?",
    answer: "Make into string",
    answerOptions: ["Round Saw", "Jack Hammer", "Hack Saw", "Circular Saw"]},
]
console.log (pToolQuestions)




// let timeLeft = 10;

// let timer = setInterval(function() {
//     countdownEl.textContent = timeLeft + ' seconds remaining.';
//     timeLeft -= 1;
//     if (timeLeft < 0) {
//         countdownEl.textContent = 'Finished!'
// 				confetti.start(500)
//     }
// }, 1000)
