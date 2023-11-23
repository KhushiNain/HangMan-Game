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

let soundBox=document.getElementById("sound-icon");
soundBox.addEventListener("click",noSound);
// function noSound(){
    
// }


// lightening theme

