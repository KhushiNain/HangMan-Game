// making buttons work
let homebn=document.querySelectorAll(".home-btn");
homebn[0].addEventListener("click",homepg);
homebn[1].addEventListener("click",homepg);
function homepg(){
    window.location.href='index.html';
}

let homebtn=document.querySelector(".bx-exit");
homebtn.addEventListener("click",homePg)
function homePg(){
    window.location.href='index.html';
}

// adding bg music

// click music
let clickSound=new Audio("./music/right.mp3");
clickSound.volume=1;

// bg music
let bgSound=new Audio("./music/bg.mp3");
bgSound.volume=1;
bgSound.loop=true; 
bgSound.play();


let musicIcon= document.getElementById("game-music");
musicIcon.addEventListener("click",Sound);
let voice = true
function Sound(){
    if(voice){
        musicIcon.src="./assets/mute.png";
        bgSound.pause();
        voice=false;
    }
    else{
        musicIcon.src="./assets/volume.png";
        bgSound.play();
        voice=true;
    }
}

// making keyboard 
let keyboard=document.querySelector(".keyboard")

for(let i=97;i<123;i++){
    let button= document.createElement("button");
    button.innerText=String.fromCharCode(i);
    keyboard.appendChild(button);
}


// making image array
let imgarray=["./images/hangman-0.svg","./images/hangman-1.svg","./images/hangman-2.svg","./images/hangman-3.svg","./images/hangman-4.svg","./images/hangman-5.svg"];
let hangmanImg=document.getElementById("hangman");
// making hint and word array
const hintWord=[
{
    Riddle:"What has to be broken before you can use it?",
    Answer:"EGG"
},
{
    Riddle:" Im tall when Im young, and Im short when Im old. What am I?",
    Answer:"CANDLE"
},
{
    Riddle:"What is always in front of you but cant be seen?",
    Answer:"FUTURE"
},
{
    Riddle:"What can you break, even if you never pick it up or touch it?",
    Answer:"PROMISE"
},
{
    Riddle:"What goes up but never comes down?",
    Answer:"AGE"
},
{
    Riddle:"What gets wet while drying?",
    Answer:"TOWEL"
},
{
    Riddle:"I shave every day, but my beard stays the same. What am I?",
    Answer:"BARBER"
},{
    Riddle:" I have branches, but no fruit, trunk or leaves. What am I?",
    Answer:"Bank"
},{
    Riddle:"The more of this there is, the less you see. What is it?",
    Answer:"DARKNESS"
},{
    Riddle:"What has many keys but cant open a single lock?",
    Answer:"PIANO"
},{
    Riddle:"Im light as a feather, yet the strongest person cant hold me for five minutes. What am I?",
    Answer:"BREATH"
},{
    Riddle:"Where does today come before yesterday?",
    Answer:"DICTIONARY"
},{
    Riddle:"If youve got me, you want to share me; if you share me, you havent kept me. What am I?",
    Answer:"SECRET"
},{
    Riddle:"What has lots of eyes, but cant see?",
    Answer:"POTATO"
},{
    Riddle:"What can you catch, but not throw?",
    Answer:"COLD"
},{
    Riddle:"What has a bottom at the top?",
    Answer:"LEGS"
},{
    Riddle:"What tastes better than it smells?",
    Answer:"TONGUE"
},{
    Riddle:" What is 3/7 chicken, 2/3 cat and 2/4 goat?",
    Answer:"CHICAGO"
},{
    Riddle:"The more you take, the more you leave behind. What are they?",
    Answer:"FOOTSTEPS"
},{
    Riddle:"I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?",
    Answer:"FIRE"
}
]

// displaying riddles on the game page
let RandomTRY=Math.floor(Math.random()*20);
let chosenRiddle=(hintWord[RandomTRY]);
let Riddle = chosenRiddle.Riddle
document.getElementById("hint-input").innerHTML=Riddle
let animalWord=(chosenRiddle.Answer);
let displayWord= document.querySelector(".input-word");
console.log(animalWord)
displayWord.innerHTML=animalWord.split("").map(()=>`<li class="letter"></li>`).join("");

// result page logic
let replayBtn=document.querySelectorAll(".replay-btn");
let resultBox=document.querySelectorAll(".result-pg");
replayBtn[0].addEventListener("click",gamePg);
replayBtn[1].addEventListener("click",gamePg);
function gamePg(){
    window.location.href='game.html';
}
function GameLost(){
    resultBox[0].style.display="flex";

}

let resultword= document.querySelectorAll(".rightanswer");

let storedUsername = localStorage.getItem('savedUsername');
let usernameOnScore= document.getElementsByClassName("nameInResult");
usernameOnScore[0].innerText=storedUsername
usernameOnScore[1].innerText=storedUsername
resultword[0].innerHTML=animalWord;
resultword[1].innerHTML=animalWord


letter=document.querySelectorAll(".letter");
console.log(letter[1])

// adding right guessed letter to display and modifying keyboard appearance with each guess



const gamebtn = document.querySelectorAll("button");
let wrongGuess= document.getElementById("guess-left");
let guess =0
correctGuess=0;
let indexFound=[];
for (let i = 0; i < gamebtn.length; i++) {
    gamebtn[i].addEventListener("click", (e) => {
        clickSound.play();
        e.stopPropagation();
        let found = false;
      indexFound=[];
        for (let j = 0; j < animalWord.length; j++) {
            if (animalWord[j] === e.target.innerHTML.toUpperCase()) {
                found = true;
                letter[j].innerHTML=animalWord[j]
                indexFound.push(j);
                  
            }}
        if (found) {
            console.log("yes");
            gamebtn[i].style.backgroundColor="green";
            correctGuess+= indexFound.length;
            if (correctGuess==animalWord.length){
                resultBox[1].style.display="flex"
            }
        } else {
            guess+= 1
            hangmanImg.src=imgarray[guess]
            wrongGuess.innerText=guess;
            gamebtn[i].style.backgroundColor="red";
            if(wrongGuess.innerText==6){
                GameLost()
            } 
        } 
        gamebtn[i].disabled = true;
    });
}



