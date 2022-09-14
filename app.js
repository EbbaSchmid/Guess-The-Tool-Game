/*---------------- Constants ----------------*/



/*----------------- Variables (state) ---------------*/

let currentQuestions 
let questionObjectIdx
let winner
let score
let answer

let powerToolSound = new Audio("../assets/drill.mp3")

let handToolSound = new Audio("../assets/hammering.mp3")

let specialToolSound = new Audio("../assets/flame-ignition.mp3")

let equipSound = new Audio("../assets/excavator-working.mp3")




/*------- Cached Element References ------------------*/

// Other Buttons Below .........................
const countdownEl = document.getElementById('countdown')

const restartBtn = document.querySelector("restart")

const nextBtn = document.querySelector("next")



// Rotating Game Areas .................
const questionPhoto = document.getElementById("questionPhoto")

const questionList = document.getElementById("questionList")

const answerButtons = document.getElementById("answerButtons")



// Main Category Buttons Below ...............

const powerToolsBtn = document.getElementById("powerToolBtn")

const handToolsBtn = document.getElementById("handToolBtn")

const specialityToolsBtn = document.getElementById("specialityToolBtn")

const equipmentBtn = document.getElementById("equipBtn")


// const powerToolQuestions = document.querySelector("")




/*-------------- Event Listeners --------------------*/

init()

// Main Category Buttons Below ...............

powerToolsBtn.addEventListener('click', handleCategory) 

handToolsBtn.addEventListener('click', handleCategory)

specialityToolsBtn.addEventListener('click', handleCategory)

equipmentBtn.addEventListener('click', handleCategory)


// Rotating Game Areas .................






// Other Buttons Below .........................
// nextBtn.addEventListener('click',() => {})

// restartBtn.addEventListener('click', () =>{
//     init () })


/*----------- Functions -------------------*/

function init () {
    // winner = null
    // render ()
    console.log("hello")
    // buttons(powerToolBtn)
}


function handleCategory (e){
    console.log(e.target.id)
    // console.log(categories[e.target.id].questions)
    currentQuestions = categories[e.target.id].questions
    console.log(currentQuestions)
    getRandomQuestion()
    // Need to add audio sound to category button click
    // Need to display correct image from categories array of objects
    // currentPhoto = categories[e.target.id].img
    // getRandomPhoto()
}


function getRandomQuestion(){
    const idx = Math.floor(Math.random()*(currentQuestions.length + 1))
    renderQuestion(currentQuestions[idx])
    questionObjectIdx = idx    
    answer = currentQuestions[idx].answer
}

function renderQuestion (q){
    const question = document.createElement("p")
    question.textContent = q.question
    questionList.appendChild(question)
    renderOptions(q)

    // added in similar structure for imgs
    // const toolPhoto = document.createElement("img")
    // toolPhoto.textContent = photo.img
    // gameSelection.appendChild(img)
}

function renderOptions (q){
    q.answerOptions.forEach(function (option, idx){
        console.log("option", option)
        const answerBtn = document.createElement("button")
        answerBtn.textContent = option
        answerBtn.id = idx
        answerBtn.addEventListener("click", handleAnswer)
        answerButtons.appendChild(answerBtn)
    })
}

function handleAnswer (e){
    console.log (e.target.id)
    console.log(answer == e.target.id)
}

let pToolQuestions = [
    {question: "What Power Tool is this?",
    img:"https://imgbox.com/g8Ep78F8",
    id: "BandSaw",
    answer: 3,
    answerOptions: ["Saw", "Hammer Drill", "Hack Saw", "Band Saw"]},

    {question: "What Power Tool is this?",
    img: "https://imgbox.com/zf5U4MGc",
    id: "CircularSaw",
    answer: [1],
    answerOptions: ["Saw", "Circular Saw", "Band Saw", "Saw Zall"]},

    {question: "What Power Tool is this?",
    img:"https://imgbox.com/dpSdsN09",
    id: "Grinder",
    answer: [0],
    answerOptions: ["Grinder", "Circular Saw", "Band Saw", "Hack Saw"]},

    {question: "What Power Tool is this?",
    img: "https://imgbox.com/hoo7FEkn",
    id: "ConcreteSaw",
    answer: [2],
    answerOptions: ["Round Saw", "Jack Hammer", "Concrete Saw", "Circular Saw"]},

    {question: "What Power Tool is this?",
    img: "https://imgbox.com/rS10g8DP",
    id: "HammerDrill",
    answer: [3],
    answerOptions: ["Impact Drill", "Jack Hammer", "Concrete Saw", "Hammer Drill"]},

    {question: "What Power Tool is this?",
    img: "https://imgbox.com/ROQeT71S",
    id: "ImpactDrill",
    answer: [3],
    answerOptions: ["Impact Driver", "Jack Hammer", "Hammer Drill", "Impact Drill"]},
    
    {question: "What Power Tool is this?",
    img: "https://imgbox.com/IlOtrHHU",
    id: "ImpactDriver",
    answer: [0],
    answerOptions: ["Impact Driver", "Jack Hammer", "Hammer Drill", "Impact Drill"]},
    
    {question: "What Power Tool is this?",
    img: "https://imgbox.com/QiRYIrLM",
    id: "JackHammer",
    answer: [1],
    answerOptions: ["Impact Driver", "Jack Hammer", "Hammer Drill", "SawZall"]},
    
    {question: "What Power Tool is this?",
    img: "https://imgbox.com/hZg1OZMg",
    id: "MiterSaw",
    answer: [3],
    answerOptions: ["Circular Saw", "Jack Hammer", "Radial Arm Saw", "Miter Saw"]},

    {question: "What Power Tool is this?",
    img: "https://imgbox.com/A0j2G3cO",
    id: "SawZall",
    answer: [0],
    answerOptions: ["SawZall", "Jack Hammer", "Hammer Drill", "Impact Drill"]},
]
console.log (pToolQuestions)



let hToolQuestions = [
    {question: "What Hand Tool is this?",
    img: "https://imgbox.com/oKdflYoX",
    id: "ChalkReel",
    answer: [3],
    answerOptions: ["Tri-Square", "Spool", "Laser Level", "Chalk Reel"]},

    {question: "What Hand Tool is this?",
    img: "https://imgbox.com/y9MLhtk1",
    id: "CatsPaw",
    answer: [1],
    answerOptions: ["Pry Bar", "Cats Paw", "Crow Bar", "Snips"]},

    {question: "What Hand Tool is this?",
    img: "https://imgbox.com/VshJl3Ys",
    id: "WireStrippers",
    answer: [0],
    answerOptions: ["Wire Strippers", "Pliers", "Wire Snips", "Metal Cutters"]},

    {question: "What Hand Tool is this?",
    img: "https://imgbox.com/9MEU2qnO",
    id: "SideCutters",
    answer: [3],
    answerOptions: ["Pliers", "Wire Strippers", "Channel Locks", "Side Cutters"]},

    {question: "What Hand Tool is this?",
    img: "https://imgbox.com/C3VVUSTn",
    id: "PipeWrench",
    answer: [1],
    answerOptions: ["Socket", "Pipe Wrench", "Crescent Wrench", "Adjectable Wrench"]},

    {question: "What Hand Tool is this?",
    img: "https://imgbox.com/DAeVfkdG",
    id: "FramingSquare",
    answer: [2],
    answerOptions: ["Cabinet Square", "Speed Square", "Framing Square", "Mason Level"]},

    {question: "What Hand Tool is this?",
    img: "https://imgbox.com/zudIQS1K",
    id: "Cclamp",
    answer: [0],
    answerOptions: ["C-Clamp", "D-Clamp", "Tube Cutter", "C-Toggle"]},

    {question: "What Hand Tool is this?",
    img: "https://imgbox.com/vXHgHXQZ",
    id: "ChannelLocks",
    answer: [1],
    answerOptions: ["Pliers", "Channel Locks", "Adjustable Wrench", "Pipe Wrench"]},

    {question: "What Hand Tool is this?",
    img: "https://imgbox.com/xwVM6c4X",
    id: "HexKeys",
    answer: [2],
    answerOptions: ["Tom Keys", "L Keys", "Hex Keys", "Octo Keys"]},

    {question: "What Hand Tool is this?",
    img: "https://imgbox.com/r2Q8RULs",
    id: "BallPeenHammer",
    answer: [3],
    answerOptions: ["Hammer", "Sledge Hammer", "Mallet", "Ball Peen Hammer"]},
]

console.log(hToolQuestions)


let sToolQuestions = [
    {question: "What Speciality Tool is this?",
    img: "https://imgbox.com/ZMNN70r5",
    id: "BrickJointer",
    answer: [1],
    answerOptions: ["Masonry Line", "Brick Jointer", "Curved Pry Bar", "Marker Pipe"]},

    {question: "What Speciality Tool is this?",
    img: "https://imgbox.com/HjO3qgcz",
    id: "AviationSnips",
    answer: [2],
    answerOptions: ["Side Cutters", "Long Nosed Snips", "Aviation Snips", "Pliers"]},

    {question: "What Speciality Tool is this?",
    img: "https://imgbox.com/CQzQEcO9",
    id: "TubeCutter",
    answer: [0],
    answerOptions: ["Tube Cutter", "C-Clamp", "Glass Cutter", "C-Cutter"]},

    {question: "What Speciality Tool is this?",
    img: "https://imgbox.com/h3kFEmgg",
    id: "Striker",
    answer: [3],
    answerOptions: ["Starter", "Line Hanger", "Tool Clip", "Striker"]},

    {question: "What Speciality Tool is this?",
    img: "https://imgbox.com/QwULHr85",
    id: "FeelerGuage",
    answer: [1],
    answerOptions: ["Dimension Tabs", "Feeler Guages", "Measurement Guages", "Depth Guages"]},

    {question: "What Speciality Tool is this?",
    img: "https://imgbox.com/ISMlAkju",
    id: "PlumbBob",
    answer: [2],
    answerOptions: ["Tri-Square", "Spade", "Plumb Bob", "Bobber"]},

    {question: "What Speciality Tool is this?",
    img: "https://imgbox.com/rKJNnLCO",
    id: "GlassCutter",
    answer: [0],
    answerOptions: ["Glass Cutter", "Tube Cutter", "Tile Cutter", "Line Marker"]},

    {question: "What Speciality Tool is this?",
    img: "https://imgbox.com/3zlwCSDj",
    id: "CornerChisel",
    answer: [2],
    answerOptions: ["Box Cutter", "Stamper", "Corner Chisel", "Angle Chisel"]},

    {question: "What Speciality Tool is this?",
    img: "https://imgbox.com/rRoNUbt7",
    id: "MagnetStick",
    answer: [3],
    answerOptions: ["Line Marker", "Telescoping Light", "Mirror", "Telescoping Magnet"]},

    {question: "What Speciality Tool is this?",
    img: "https://imgbox.com/ZlOTmjTc",
    id: "AutoPunch",
    answer: [1],
    answerOptions: ["Hole Maker", "Automatic Center Punch", "Center Punch", "Stabber"]},
]

console.log(sToolQuestions)



let equipQuestions = [
    {question: "What Equipment is this?",
    img: "https://imgbox.com/upnIR4iy",
    id: "CrawlerCrane",
    answer: [0],
    answerOptions: ["Crawler Crane", "Telescoping Crane", "Boom Crane", "Lifter"]},

    {question: "What Equipment is this?",
    img: "https://imgbox.com/lYyKgHVu", 
    id: "Roller",
    answer: [2],
    answerOptions: ["Skid Steer", "Bobcat", "Rolling Compactor", "Crawler Compactor"]},

    {question: "What Equipment is this?",
    img: "https://imgbox.com/AhxYr1Fj",
    id: "PileDriver",
    answer: [3],
    answerOptions: ["Backhoe", "Excavator", "Crawler", "Pile Driver"]},

    {question: "What Equipment is this?",
    img: "https://imgbox.com/MYMz60Yo",
    id: "Trencher",
    answer: [1],
    answerOptions: ["Compactor", "Trencher", "Backhoe", "Excavator"]},

    {question: "What Equipment is this?",
    img: "https://imgbox.com/lj5c089W",
    id: "Skip",
    answer: [0],
    answerOptions: ["Skip Hoist", "Building Crane", "Material Hoist", "Crawler Hoist"]},

    {question: "What Equipment is this?",
    img: "https://imgbox.com/8KVH1nHm",
    id: "Excavator",
    answer: [3],
    answerOptions: ["Crawler", "Backhoe", "Trencher", "Excavator"]},

    {question: "What Equipment is this?",
    img: "https://imgbox.com/4GOY3d0C",
    id: "TowerCrane",
    answer: [1],
    answerOptions: ["Crawler Crane", "Tower Crane", "Top Crane", "Tower Hoist"]},

    {question: "What Equipment is this?",
    img: "https://imgbox.com/8zbk0x3e",
    id: "SkidSteer",
    answer: [2],
    answerOptions: ["Forklift", "Dump Truck", "Sid Steer", "Crawler Loader"]},

    {question: "What Equipment is this?",
    img: "https://imgbox.com/0kHjibhb",
    id: "BoomLift",
    answer: [3],
    answerOptions: ["Scissor Lift", "Telescoping Hoist", "Skip Hoist", "Boom Lift"]},

    {question: "What Equipment is this?",
    img: "https://imgbox.com/AmplMUaC",
    id: "ScissorLift",
    answer: [1],
    answerOptions: ["Boom Lift", "Sissor Lift", "Elevator Lift", "Box Hoist"]},

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