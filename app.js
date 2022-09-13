/*---------------- Constants ----------------*/
let currentQuestion = 0




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


// let powerToolBtn = {
//     audio: "powerToolSound",
//     id: "powerToolBtn", 
//     text: "Power Tools",
//     questions: pToolQuestions,
// }

// let handToolBtn = {
//     audio: handToolSound,
//     id: "handToolBtn", 
//     text: "Hand Tools",
//     questions: hToolQuestions,
// }

// let specialityToolBtn = {
//     audio: specialToolSound,
//     id: "specialityToolBtn", 
//     text: "Speciality Tools",
//     questions: sToolQuestions,
// }

// let equipBtn = {
//     audio: equipSound,
//     id: "equipBtn", 
//     text: "Equipment",
//     questions: equipQuestions,
// }


/*------- Cached Element References ------------------*/
const countdownEl = document.getElementById('countdown')

const restartBtn = document.querySelector("restart")
console.log ("restart")

const nextBtn = document.querySelector("next")
console.log ("Next")

const powerToolsBtn = document.getElementById("powerToolBtn")
console.log ("pToolQuestions")

const handToolsBtn = document.getElementById("handToolBtn")
console.log ("hToolQuestions")

const specialityToolsBtn = document.getElementById("specialityToolBtn")
console.log ("sToolQuestions")

const equipmentBtn = document.getElementById("equipBtn")
console.log ("equipQuestions")

// const powerToolQuestions = document.querySelector("")

// var tag_id = document.getElementById('tagid');
// var newNode = document.createElement('p');
// newNode.appendChild(document.createTextNode('html string'));


/*-------------- Event Listeners --------------------*/

init()
// create an array of categories, the object 

powerToolsBtn.addEventListener('click', () => {
    powerToolSound.play()
})

handToolsBtn.addEventListener('click', () => {
    handToolSound.volume = .10
    handToolSound.play()
})

specialityToolsBtn.addEventListener('click',() => {
    specialToolSound.volume = .10
    specialToolSound.play()
})

equipmentBtn.addEventListener('click', () => {
    equipSound.volume = .10
    equipSound.play()
})

nextBtn.addEventListener('click', next)

restartBtn.addEventListener('click', init)

console.log("hello")

/*----------- Functions -------------------*/





// function handleCategoryClick(audio, element){
// element.addEventListener('click', function(evt){
//     // audio.volume = .10
//     audio.play()
// })
// }


let pToolQuestions = [
    {question: "What Power Tool is this?",
    img:"https://imgbox.com/g8Ep78F8",
    id: "BandSaw",
    answer: "Band Saw",
    answerOptions: ["Saw", "Hammer Drill", "Hack Saw", "Band Saw"]},

    {question: "What Power Tool is this?",
    img: "https://imgbox.com/zf5U4MGc",
    id: "CircularSaw",
    answer: "Circular Saw",
    answerOptions: ["Saw", "Circular Saw", "Band Saw", "Saw Zall"]},

    {question: "What Power Tool is this?",
    img:"https://imgbox.com/dpSdsN09",
    id: "Grinder",
    answer: "Grinder",
    answerOptions: ["Grinder", "Circular Saw", "Band Saw", "Hack Saw"]},

    {question: "What Power Tool is this?",
    img: "https://imgbox.com/hoo7FEkn",
    id: "ConcreteSaw",
    answer: "Concrete Saw",
    answerOptions: ["Round Saw", "Jack Hammer", "Concrete Saw", "Circular Saw"]},

    {question: "What Power Tool is this?",
    img: "https://imgbox.com/rS10g8DP",
    id: "HammerDrill",
    answer: "Hammer Drill",
    answerOptions: ["Impact Drill", "Jack Hammer", "Concrete Saw", "Hammer Drill"]},

    {question: "What Power Tool is this?",
    img: "https://imgbox.com/ROQeT71S",
    id: "ImpactDrill",
    answer: "Impact Drill",
    answerOptions: ["Impact Driver", "Jack Hammer", "Hammer Drill", "Impact Drill"]},
    
    {question: "What Power Tool is this?",
    img: "https://imgbox.com/IlOtrHHU",
    id: "ImpactDriver",
    answer: "Impact Driver",
    answerOptions: ["Impact Driver", "Jack Hammer", "Hammer Drill", "Impact Drill"]},
    
    {question: "What Power Tool is this?",
    img: "https://imgbox.com/QiRYIrLM",
    id: "JackHammer",
    answer: "Jack Hammer",
    answerOptions: ["Impact Driver", "Jack Hammer", "Hammer Drill", "SawZall"]},
    
    {question: "What Power Tool is this?",
    img: "https://imgbox.com/hZg1OZMg",
    id: "MiterSaw",
    answer: "Miter Saw",
    answerOptions: ["Circular Saw", "Jack Hammer", "Radial Arm Saw", "Miter Saw"]},

    {question: "What Power Tool is this?",
    img: "https://imgbox.com/A0j2G3cO",
    id: "SawZall",
    answer: "SawZall",
    answerOptions: ["SawZall", "Jack Hammer", "Hammer Drill", "Impact Drill"]},
]
console.log (pToolQuestions)

let powerToolBtn = {
    audio: "powerToolSound",
    id: "powerToolBtn", 
    text: "Power Tools",
    questions: pToolQuestions,
}


// let hToolQuestions = [
//     {question: "What Hand Tool is this?",
//     img: "https://imgbox.com/oKdflYoX",
//     id: "ChalkReel",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Hand Tool is this?",
//     img: "https://imgbox.com/y9MLhtk1",
//     id: "CatsPaw",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Hand Tool is this?",
//     img: "https://imgbox.com/VshJl3Ys",
//     id: "WireStrippers",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Hand Tool is this?",
//     img: "https://imgbox.com/9MEU2qnO",
//     id: "SideCutters",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Hand Tool is this?",
//     img: "https://imgbox.com/C3VVUSTn",
//     id: "PipeWrench",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Hand Tool is this?",
//     img: "https://imgbox.com/DAeVfkdG",
//     id: "FramingSquare",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Hand Tool is this?",
//     img: "https://imgbox.com/zudIQS1K",
//     id: "Cclamp",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Hand Tool is this?",
//     img: "https://imgbox.com/vXHgHXQZ",
//     id: "ChannelLocks",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Hand Tool is this?",
//     img: "https://imgbox.com/xwVM6c4X",
//     id: "HexKeys",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Hand Tool is this?",
//     img: "https://imgbox.com/r2Q8RULs",
//     id: "BallPeenHammer",
//     answer: 
//     answerOptions: [
//     ]},
// ]

// console.log(hToolQuestions)



// let sToolQuestions = [
//     {question: "What Speciality Tool is this?",
//     img: "https://imgbox.com/ZMNN70r5",
//     id: "BrickJointer",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Speciality Tool is this?",
//     img: "https://imgbox.com/HjO3qgcz",
//     id: "AviationSnips",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Speciality Tool is this?",
//     img: "https://imgbox.com/CQzQEcO9",
//     id: "TubeCutter",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Speciality Tool is this?",
//     img: "https://imgbox.com/h3kFEmgg",
//     id: "Striker",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Speciality Tool is this?",
//     img: "https://imgbox.com/QwULHr85",
//     id: "FeelerGuage",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Speciality Tool is this?",
//     img: "https://imgbox.com/ISMlAkju",
//     id: "PlumbBob",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Speciality Tool is this?",
//     img: "https://imgbox.com/rKJNnLCO",
//     id: "GlassCutter",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Speciality Tool is this?",
//     img: "https://imgbox.com/3zlwCSDj",
//     id: "CornerChisel",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Speciality Tool is this?",
//     img: "https://imgbox.com/rRoNUbt7",
//     id: "MagnetStick",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Speciality Tool is this?",
//     img: "https://imgbox.com/ZlOTmjTc",
//     id: "AutoPunch",
//     answer: 
//     answerOptions: [
//     ]},
// ]

// console.log(sToolQuestions)



// let equipQuestions = [
//     {question: "What Equipment is this?",
//     img: "https://imgbox.com/upnIR4iy",
//     id: "CrawlerCrane",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Equipment is this?",
//     img: "https://imgbox.com/lYyKgHVu", 
//     id: "Roller",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Equipment is this?",
//     img: "https://imgbox.com/AhxYr1Fj",
//     id: "PileDriver",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Equipment is this?",
//     img: "https://imgbox.com/MYMz60Yo",
//     id: "Trencher",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Equipment is this?",
//     img: "https://imgbox.com/lj5c089W",
//     id: "Skip",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Equipment is this?",
//     img: "https://imgbox.com/8KVH1nHm",
//     id: "Excavator",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Equipment is this?",
//     img: "https://imgbox.com/4GOY3d0C",
//     id: "TowerCrane",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Equipment is this?",
//     img: "https://imgbox.com/8zbk0x3e",
//     id: "SkidSteer",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Equipment is this?",
//     img: "https://imgbox.com/0kHjibhb",
//     id: "BoomLift",
//     answer: 
//     answerOptions: [
//     ]},

//     {question: "What Equipment is this?",
//     img: "https://imgbox.com/AmplMUaC",
//     id: "ScissorLift",
//     answer: 
//     answerOptions: [
//     ]},

// ]
// console.log (equipQuestions)



// function buttons(toolCategory) {
//     const categoryButtons = document.getElementById("categoryButtons")
//     const categoryButton = document.createElement("button")
//     categoryButton.setAttribute("id", toolCategory.id)
//     categoryButton.appendChild(document.createTextNode(toolCategory.text))
//     categoryButtons.appendChild(categoryButton)
//     handleCategoryClick(toolCategory.audio, categoryButton)
// }



function init () {
    // let questions = pToolQuestions
    // winner = null
    // render ()
    console.log("hello")
    // buttons(powerToolBtn)
}






// function Click(evt) {
//     let pToolQuestions = parseInt(evt.target.pToolQuestions)
//     console.log(pToolQuestions)
// }







// let timeLeft = 10;

// let timer = setInterval(function() {
//     countdownEl.textContent = timeLeft + ' seconds remaining.';
//     timeLeft -= 1;
//     if (timeLeft < 0) {
//         countdownEl.textContent = 'Finished!'
// 				confetti.start(500)
//     }
// }, 1000)
