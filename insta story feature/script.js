var arr=[
    {dp:"https://images.unsplash.com/photo-1738680722152-88b45b3310ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1751194931556-e24206c00c5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"},{dp:"https://images.unsplash.com/photo-1747602543299-7a45eb043a64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1750515712802-8b63e7dfbb36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},{dp:"https://plus.unsplash.com/premium_photo-1664392470985-c7af1d00ddbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1513171920216-2640b288471b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},{dp:"https://images.unsplash.com/photo-1748962256659-9325278ea4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1749590179454-955d94db7de7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},{dp:"https://images.unsplash.com/photo-1749810364373-5e2f18bb842a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1749750781952-c3f1a03f76cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"},{dp:"https://images.unsplash.com/photo-1555820585-c5ae44394b79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1749497707413-d5b03d6c8fac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"}
]

var clutter=''
arr.forEach(function(elem,idx){
    clutter += `<div id="story">
                    <img id='${idx}' src="${elem.dp}" alt="">
                </div>`;
})

var stories = document.querySelector('nav')
stories.innerHTML=clutter;

stories.addEventListener("click",function(dets){
    document.querySelector('#full-screen').style.display = 'block'
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector('#full-screen').style.display = 'none'
    },3000)
})