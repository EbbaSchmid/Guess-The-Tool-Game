/*---------------- Constants ----------------*/



/*----------------- Variables (state) ---------------*/

let currentQuestions 
let questionObjectIdx
let winner
let score = 0
let answer
let questionCount = 0
let reset
let timeLeft = 10
let timerIntervalId
let winTime, min, sec, seconds = 0

let powerToolSound = new Audio("assets/audio/drill.mp3")

let handToolSound = new Audio("assets/audio/hammering.mp3")

let specialToolSound = new Audio("assets/audio/flame-ignition.mp3")

let equipSound = new Audio("assets/audio/excavator-working.mp3")




/*------- Cached Element References ------------------*/

const favicon = document.querySelector("#favicon")

// Other Buttons Below .........................
const timerEl = document.getElementById('timer')
// const winBtn = document.getElementById('win-button')
const winMsg = document.getElementById('message')
const resetBtn = document.getElementById('resetBtn')


const nextBtn = document.querySelector("#nextBtn")

const winningMessage = document.getElementById("winningMessage")
const lostGame = document.getElementById("lostGame")

// Rotating Game Areas .................
const questionPhoto = document.getElementById("questionPhoto")

const questionList = document.getElementById("questionList")

const scoreText = document.getElementById("scoreCount")



// Main Category Buttons Below ...............

const powerToolsBtn = document.getElementById("powerToolBtn")

const handToolsBtn = document.getElementById("handToolBtn")

const specialityToolsBtn = document.getElementById("specialityToolBtn")

const equipmentBtn = document.getElementById("equipBtn")





/*-------------- Event Listeners --------------------*/

init()

// Main Category Buttons Below ...............

powerToolsBtn.addEventListener('click', handleCategory) 

handToolsBtn.addEventListener('click', handleCategory)

specialityToolsBtn.addEventListener('click', handleCategory)

equipmentBtn.addEventListener('click', handleCategory)



// Other Buttons Below .........................
nextBtn.addEventListener('click', getQuestion)
resetBtn.addEventListener('click', resetBtnPush)



/*----------- Functions -------------------*/

function init () {
    score = 0
    winTime = 0 
    min = 0
    sec = 0
    seconds = 0
    console.log("hello init")
    questionObjectIdx = -1
}


function handleCategory (e){
    console.log(e.target.id)
    currentQuestions = categories[e.target.id].questions
    console.log(currentQuestions)
    getQuestion()
    startTimer()

    // Need to add audio sound to category button click
}


function getQuestion(){
    questionObjectIdx++    
    if (currentQuestions[questionObjectIdx]){
        renderQuestion(currentQuestions[questionObjectIdx]) 
        answer = currentQuestions[questionObjectIdx].answer
    } else {
    console.log("game over")
    // can build out more for when the game is done
    }
}

function renderQuestion (q){
    questionList.innerHTML = ""
    questionPhoto.src = ""
    const question = document.createElement("p")
    question.textContent = q.question
    questionList.appendChild(question)
    renderOptions(q)
    renderPhoto(q)
}

function renderPhoto (q) {
    questionPhoto.src = q.img 
}

function renderOptions (q){
    q.answerOptions.forEach(function (option, idx){
        console.log("option", option)
        const answerBtn = document.createElement("button")
        answerBtn.textContent = option
        answerBtn.id = idx
        answerBtn.className = "optionBtn" 
        answerBtn.addEventListener("click", handleAnswer)
        questionList.appendChild(answerBtn)
    })
}

function deactBtns() {
    const optionBtns = document.querySelectorAll(".optionBtn")
    console.log(optionBtns)
    optionBtns.forEach(b => b.removeEventListener("click", handleAnswer))
}

function handleAnswer (e){
    console.log (e.target)
    if (answer == e.target.id) {
        score += 1
        scoreText.textContent = score 
        e.target.style.backgroundColor = "green"
        console.log ("correct")
        powerToolSound.play()
    } 
    else {
        score -= 1
        scoreText.textContent = score
        e.target.style.backgroundColor = "red"
        console.log("incorrect")
        specialToolSound.play()
    } 
    if (score === 10) {
        winningMessage.innerHTML = "WOW!! You won this category!"
        clearInterval(timerIntervalId)
    }
    console.log(winningMessage)
    console.log(score)
    deactBtns()
}


function resetBtnPush () {
    score = 0
    winTime = 0 
    min = 0
    sec = 0
    seconds = 0
    scoreText.textContent = score
    questionObjectIdx = -1
    clearInterval(timerIntervalId)
    questionPhoto.src = ""
    questionList.innerHTML = ""
    timerEl.textContent = ""
}

// timer needs to stop, board needs to clear and score needs to clear, call init




// Timer functions below..........

function startTimer() {
	if (timerIntervalId) {
		seconds = 0
		clearInterval(timerIntervalId)}
        renderMessage("starttimer")
	timerIntervalId = setInterval(tick, 1000)
    // if (resetBtn.onlick) {}
        // make score and timer clear if reset button is clicked
}

function renderMessage (message) {
    console.log(message)
}

function tick() {
	seconds++
	renderTime()
}

function renderTime() {
    min = Math.floor(seconds / 60)
    sec = seconds % 60
    if (sec < 10) {
    timerEl.textContent = `${min}:0${sec}`
    } else {
    timerEl.textContent = `${min}:${sec}`
}
}






let pToolQuestions = [
    {question: "What Power Tool is this?",
    img:"assets/images/BandSaw.jpg",
    id: "BandSaw",
    answer: 3,
    answerOptions: ["Saw", "Hammer Drill", "Hack Saw", "Band Saw"]},

    {question: "What Power Tool is this?",
    img: "assets/images/CircularSaw.jpg",
    id: "CircularSaw",
    answer: 1,
    answerOptions: ["Saw", "Circular Saw", "Band Saw", "Saw Zall"]},

    {question: "What Power Tool is this?",
    img:"assets/images/Grinder.jpg",
    id: "Grinder",
    answer: 0,
    answerOptions: ["Grinder", "Circular Saw", "Band Saw", "Hack Saw"]},

    {question: "What Power Tool is this?",
    img: "assets/images/ConcreteSaw.jpg",
    id: "ConcreteSaw",
    answer: 2,
    answerOptions: ["Round Saw", "Jack Hammer", "Concrete Saw", "Circular Saw"]},

    {question: "What Power Tool is this?",
    img: "assets/images/HammerDrill.jpg",
    id: "HammerDrill",
    answer: 3,
    answerOptions: ["Impact Drill", "Jack Hammer", "Concrete Saw", "Hammer Drill"]},

    {question: "What Power Tool is this?",
    img: "assets/images/ImpactDrill.jpg",
    id: "ImpactDrill",
    answer: 3,
    answerOptions: ["Impact Driver", "Jack Hammer", "Hammer Drill", "Impact Drill"]},
    
    {question: "What Power Tool is this?",
    img: "assets/images/ImpactDriver.jpg",
    id: "ImpactDriver",
    answer: 0,
    answerOptions: ["Impact Driver", "Jack Hammer", "Hammer Drill", "Impact Drill"]},
    
    {question: "What Power Tool is this?",
    img: "assets/images/JackHammer.jpg",
    id: "JackHammer",
    answer: 1,
    answerOptions: ["Impact Driver", "Jack Hammer", "Hammer Drill", "SawZall"]},
    
    {question: "What Power Tool is this?",
    img: "assets/images/MiterSaw.jpg",
    id: "MiterSaw",
    answer: 3,
    answerOptions: ["Circular Saw", "Jack Hammer", "Radial Arm Saw", "Miter Saw"]},

    {question: "What Power Tool is this?",
    img: "assets/images/SawZall.jpg",
    id: "SawZall",
    answer: 0,
    answerOptions: ["SawZall", "Jack Hammer", "Hammer Drill", "Impact Drill"]},
]
console.log (pToolQuestions)



let hToolQuestions = [
    {question: "What Hand Tool is this?",
    img: "assets/images/ChalkReel.jpg",
    id: "ChalkReel",
    answer: 3,
    answerOptions: ["Tri-Square", "Spool", "Laser Level", "Chalk Reel"]},

    {question: "What Hand Tool is this?",
    img: "assets/images/CatsPaw.jpg",
    id: "CatsPaw",
    answer: 1,
    answerOptions: ["Pry Bar", "Cats Paw", "Crow Bar", "Snips"]},

    {question: "What Hand Tool is this?",
    img: "assets/images/WireStrippers.jpg",
    id: "WireStrippers",
    answer: 0,
    answerOptions: ["Wire Strippers", "Pliers", "Wire Snips", "Metal Cutters"]},

    {question: "What Hand Tool is this?",
    img: "assets/images/SideCutters.jpg",
    id: "SideCutters",
    answer: 3,
    answerOptions: ["Pliers", "Wire Strippers", "Channel Locks", "Side Cutters"]},

    {question: "What Hand Tool is this?",
    img: "assets/images/PipeWrench.jpg",
    id: "PipeWrench",
    answer: 1,
    answerOptions: ["Socket", "Pipe Wrench", "Crescent Wrench", "Adjectable Wrench"]},

    {question: "What Hand Tool is this?",
    img: "assets/images/FramingSquare.jpg",
    id: "FramingSquare",
    answer: 2,
    answerOptions: ["Cabinet Square", "Speed Square", "Framing Square", "Mason Level"]},

    {question: "What Hand Tool is this?",
    img: "assets/images/CClamp.jpg",
    id: "Cclamp",
    answer: 0,
    answerOptions: ["C-Clamp", "D-Clamp", "Tube Cutter", "C-Toggle"]},

    {question: "What Hand Tool is this?",
    img: "assets/images/ChannelLocks.jpg",
    id: "ChannelLocks",
    answer: 1,
    answerOptions: ["Pliers", "Channel Locks", "Adjustable Wrench", "Pipe Wrench"]},

    {question: "What Hand Tool is this?",
    img: "assets/images/HexKeys.jpg",
    id: "HexKeys",
    answer: 2,
    answerOptions: ["Tom Keys", "L Keys", "Hex Keys", "Octo Keys"]},

    {question: "What Hand Tool is this?",
    img: "assets/images/BallPeenHammer.jpg",
    id: "BallPeenHammer",
    answer: 3,
    answerOptions: ["Hammer", "Sledge Hammer", "Mallet", "Ball Peen Hammer"]},
]

console.log(hToolQuestions)


let sToolQuestions = [
    {question: "What Speciality Tool is this?",
    img: "assets/images/BrickJointer.jpg",
    id: "BrickJointer",
    answer: 1,
    answerOptions: ["Masonry Line", "Brick Jointer", "Curved Pry Bar", "Marker Pipe"]},

    {question: "What Speciality Tool is this?",
    img: "assets/images/AviationSnips.jpg",
    id: "AviationSnips",
    answer: 2,
    answerOptions: ["Side Cutters", "Long Nosed Snips", "Aviation Snips", "Pliers"]},

    {question: "What Speciality Tool is this?",
    img: "assets/images/TubeCutter.jpg",
    id: "TubeCutter",
    answer: 0,
    answerOptions: ["Tube Cutter", "C-Clamp", "Glass Cutter", "C-Cutter"]},

    {question: "What Speciality Tool is this?",
    img: "assets/images/Striker.jpg",
    id: "Striker",
    answer: 3,
    answerOptions: ["Starter", "Line Hanger", "Tool Clip", "Striker"]},

    {question: "What Speciality Tool is this?",
    img: "assets/images/FeelerGauge.jpg",
    id: "FeelerGauge",
    answer: 1,
    answerOptions: ["Dimension Tabs", "Feeler Gauges", "Measurement Gauges", "Depth Gauges"]},

    {question: "What Speciality Tool is this?",
    img: "assets/images/PlumbBob.jpg",
    id: "PlumbBob",
    answer: 2,
    answerOptions: ["Tri-Square", "Spade", "Plumb Bob", "Bobber"]},

    {question: "What Speciality Tool is this?",
    img: "assets/images/GlassCutter.jpg",
    id: "GlassCutter",
    answer: 0,
    answerOptions: ["Glass Cutter", "Tube Cutter", "Tile Cutter", "Line Marker"]},

    {question: "What Speciality Tool is this?",
    img: "assets/images/CornerChisel.jpg",
    id: "CornerChisel",
    answer: 2,
    answerOptions: ["Box Cutter", "Stamper", "Corner Chisel", "Angle Chisel"]},

    {question: "What Speciality Tool is this?",
    img: "assets/images/MagnetStick.jpg",
    id: "MagnetStick",
    answer: 3,
    answerOptions: ["Line Marker", "Telescoping Light", "Mirror", "Telescoping Magnet"]},

    {question: "What Speciality Tool is this?",
    img: "assets/images/AutoPunch.jpg",
    id: "AutoPunch",
    answer: 1,
    answerOptions: ["Hole Maker", "Automatic Center Punch", "Center Punch", "Stabber"]},
]

console.log(sToolQuestions)



let equipQuestions = [
    {question: "What Equipment is this?",
    img: "assets/images/CrawlerCrane.jpg",
    id: "CrawlerCrane",
    answer: 0,
    answerOptions: ["Crawler Crane", "Telescoping Crane", "Boom Crane", "Lifter"]},

    {question: "What Equipment is this?",
    img: "assets/images/Roller.jpg", 
    id: "Roller",
    answer: 2,
    answerOptions: ["Skid Steer", "Bobcat", "Rolling Compactor", "Crawler Compactor"]},

    {question: "What Equipment is this?",
    img: "assets/images/PileDriver.jpg",
    id: "PileDriver",
    answer: 3,
    answerOptions: ["Backhoe", "Excavator", "Crawler", "Pile Driver"]},

    {question: "What Equipment is this?",
    img: "assets/images/Trencher.jpg",
    id: "Trencher",
    answer: 1,
    answerOptions: ["Compactor", "Trencher", "Backhoe", "Excavator"]},

    {question: "What Equipment is this?",
    img: "assets/images/Skip.jpg",
    id: "Skip",
    answer: 0,
    answerOptions: ["Skip", "Building Crane", "Material Hoist", "Crawler Hoist"]},

    {question: "What Equipment is this?",
    img: "assets/images/Excavator.jpg",
    id: "Excavator",
    answer: 3,
    answerOptions: ["Crawler", "Backhoe", "Trencher", "Excavator"]},

    {question: "What Equipment is this?",
    img: "assets/images/TowerCrane.jpg",
    id: "TowerCrane",
    answer: 1,
    answerOptions: ["Crawler Crane", "Tower Crane", "Top Crane", "Tower Hoist"]},

    {question: "What Equipment is this?",
    img: "assets/images/SkidSteer.jpg",
    id: "SkidSteer",
    answer: 2,
    answerOptions: ["Forklift", "Dump Truck", "Skid Steer", "Crawler Loader"]},

    {question: "What Equipment is this?",
    img: "assets/images/BoomLift.jpg",
    id: "BoomLift",
    answer: 3,
    answerOptions: ["Scissor Lift", "Telescoping Hoist", "Skip Hoist", "Boom Lift"]},

    {question: "What Equipment is this?",
    img: "assets/images/ScissorLift.jpg",
    id: "ScissorLift",
    answer: 1,
    answerOptions: ["Boom Lift", "Scissor Lift", "Elevator Lift", "Box Hoist"]},
]

console.log (equipQuestions)



let categories = { 
    powerToolBtn: {
        audio: "powerToolSound",
        id: "powerToolBtn", 
        text: "Power Tools",
        questions: pToolQuestions,
    },
    handToolBtn: {
        audio: "handToolSound",
        id: "handToolBtn", 
        text: "Hand Tools",
        questions: hToolQuestions,
    },
    specialityToolBtn: {
        audio: "specialToolSound",
        id: "specialToolBtn", 
        text: "Speciality Tools",
        questions: sToolQuestions,
    },
    equipBtn: {
        audio: "equipSound",
        id: "equipBtn", 
        text: "Equipment",
        questions: equipQuestions,
    }
}