let startBtn=document.getElementById("play-border");
startBtn.addEventListener("click",changepage)
function changepage(){
    window.location.href='game.html'
}

let saveBtn=document.getElementById("save");
let userbox=document.getElementById("user-box");
saveBtn.addEventListener("click",savebox);
function savebox(){
    userbox.style.display="none";
}

let editName=document.getElementById("edit-username");
editName.addEventListener("click",appendBox);
function appendBox(){
    userbox.style.display="flex";
}

let closeBtn=document.getElementById("cross-box");
closeBtn.addEventListener("click",closebox);
function closebox(){
    userbox.style.display="none";
}

let ruleBtn=document.getElementById("rule-icon");
ruleBtn.addEventListener("click",rulepage)
function rulepage(){
    window.location.href='rules.html'
}


// lightening theme
let moon = document.getElementById("moon");
let navtag= document.getElementsByTagName("nav")

moon.addEventListener("click",colorTheme);
light=true;
function colorTheme(){
    if(light){
        moon.src="./assets/sun.png"
        document.body.style.backgroundColor="#725091";
        light=false;

    }
    else{
        moon.src="./assets/half-moon.png"
        document.body.style.backgroundColor="#E5D4FF";
        light=true;
    }
    
}


// making sound icon functional

let bgSound=new Audio("./music/bg.mp3");
bgSound.volume=1;
bgSound.loop=true; 
bgSound.play();


let soundBox=document.getElementById("sound-icon");
soundBox.addEventListener("click",Sound);
let voice = true
function Sound(){
    if(voice){
        soundBox.src="./assets/mute.png";
        bgSound.pause();
        voice=false;
    }
    else{
        soundBox.src="./assets/volume.png";
        bgSound.play();
        voice=true;
    }
}

// storing the username in localstorage and display it on the board
let displayUsername= document.getElementById("name-value")
document.getElementById('save').addEventListener('click', function() {
    let usernameValue = document.getElementById('username').value;
    displayUsername.innerText=usernameValue
    localStorage.setItem('savedUsername', usernameValue);
})
// share option functional
function share() {
    const currentUrl = window.location.href;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
    window.open(whatsappShareUrl);
  }
