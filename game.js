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


let replayBtn=document.querySelectorAll(".replay-btn");
let resultBox=document.querySelectorAll(".result-pg");
replayBtn[0].addEventListener("click",gamePg);
replayBtn[1].addEventListener("click",gamePg);
function gamePg(){
    // window.location.href='game.html';
    resultBox[0].style.display="none";
    resultBox[1].style.display="none";
}
