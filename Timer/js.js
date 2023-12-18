let button = document.querySelector("#control");
let c = document.querySelector(".times");
let seconds = 0;

let playing = false;
let starting=0

 
function addZero(num, size) {
num = num.toString();
while (num.length < size) num = "0" + num;
return num;
}

 
function start(){
let interval = setInterval(()=>{
if(playing) {
seconds = seconds + 1;
if(seconds === 61) {playing = false; seconds = 0; button.innerHTML = "START"; changeClasses("pause", "start"); return}

c.innerHTML = addZero(seconds, 2);
}
}, 1000)
};

function changeClasses(a,b) {
button.classList.remove(a);
button.classList.add(b);
}

button.onclick = () =>{
starting = starting + 1
if(starting ===1)start();
playing ? (button.innerHTML = "START", playing = false, changeClasses("start", "pause")) : (button.innerHTML = "PAUSE" , playing = true, changeClasses("pause", "start"));
};








