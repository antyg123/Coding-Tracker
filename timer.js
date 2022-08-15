var seconds = 0; 
var minutes = 0;
var hours = 0;
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var appendHours = document.getElementById("hours");

function start(){
  increaseNumber = setInterval(printX, 1000);
  function printX(){ //this function will execute every second
    while (seconds<=10){
      appendSeconds.innerText = seconds;
      seconds++;
      if(seconds==10){
        seconds = 0;
        minutes+1;
        appendMinutes.innerText = minutes;}
        
}}}

function stop(){
  clearInterval(increaseNumber);
}

function reset(){
  seconds = 0;
  minutes = 0;
  hours = 0;
  appendSeconds.innerText = "0";
  appendMinutes.innerText = "0";
  appendHours.innerText = "0";
  
}
/*
function start(){
  var x = document.getElementById("seconds");
  x.innerText = "6";
}
*/
//I figured out how to change the text of an element.
// innerText will change the content of an element 
