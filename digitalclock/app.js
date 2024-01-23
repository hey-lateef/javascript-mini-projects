const clock = document.querySelector("#clock");
//creating Date object 
setInterval(() => {
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
}, 1000);
