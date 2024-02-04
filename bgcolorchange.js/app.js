const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

//Generating the Random Color
 function randomColor(){
const hex = "0123456789ABCDEF";
let color = "#";
for (i=0; i<6 ; i++){
color = color+hex[Math.floor(Math.random()*16)];

}
return color

};

//changing Bg Color when we click on start button
function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}

//changing the Bg color every second after clicking on the start button
let interval;
function startChnageBgColor(){
  if(!interval){
    interval = setInterval(changeBgColor,1000)
  }
}
//Terminating the color changing after clicking on the start button
function stopChangeBgColor(){
    clearInterval(interval)
    interval = null;
     
}
startBtn.addEventListener("click",startChnageBgColor);
stopBtn.addEventListener("click",stopChangeBgColor);