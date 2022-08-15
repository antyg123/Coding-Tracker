var seconds = 0; 
var minutes = 0;
var hours = 0;
var appendSeconds = document.getElementById("seconds");
var appendMinutes = document.getElementById("minutes");
var appendHours = document.getElementById("hours");
var totalTime = 0;
var appendTotalTime = document.getElementById("totalTime");

function start(){
  increaseNumber = setInterval(printX, 1000);
  //this function will execute every second
  function printX(){
    
    if (seconds<59){
      seconds++;
      appendSeconds.innerText = seconds;
      }
    
      else if (seconds>=59){
        seconds = 0;
        appendSeconds.innerText = seconds;
        minutes++;
        appendMinutes.innerText = minutes;}
    
    if (minutes==60){
      minutes = 0;
      appendMinutes.innerText = minutes;
      hours++;
      appendHours.innerText = hours;}
  }
  }


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

function save(){
  totalTime = seconds + minutes + hours;
  appendTotalTime.innerText = totalTime;
}
/*
function start(){
  var x = document.getElementById("seconds");
  x.innerText = "6";
}
*/
//I figured out how to change the text of an element.
// innerText will change the content of an element 
