function createBubble(){
    var clutter= "";

    for(var i=1; i<=119; i++){
        var n = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${n}</div>`;
    }

    document.querySelector("#bbtm").innerHTML= clutter;
}

createBubble();