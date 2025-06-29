let score = 0;
document.querySelector("#scoreval").innerHTML= score;

let timer = 60;
document.querySelector("#timerval").innerHTML=timer;

let hit;

nextHit();
setTimer();
createBubble();
 
function nextHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML= hit;
}

function setTimer(){
    if (timer>=0){
        document.querySelector("#timerval").innerHTML=timer;
        timer-=1;
        setTimeout(setTimer,1000);
    }
    else{
        // clearTimeout(timer)
        document.querySelector("#bbtm").innerHTML=`<h1>GAME OVER<br>YOUR FINAL SCORE: ${score}<h1>`;
    }
}

function createBubble(){
    var clutter= "";

    for(var i=1; i<=119; i++){
        var n = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${n}</div>`;
    }

    document.querySelector("#bbtm").innerHTML= clutter;

    let bubble= document.querySelectorAll(".bubble")
    bubble.forEach(function (div) {
    div.addEventListener("click", function () {
        if (div.textContent == hit) {
        score += 10;
        document.querySelector("#scoreval").innerHTML = score;
        nextHit();
        createBubble();
        }
    });
    });
}


//  also try by using the concept of 'Event Bubbling'
