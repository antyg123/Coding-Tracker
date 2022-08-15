
/*var seconds = 0;
var appendSeconds = document.getElementById("seconds");

function start(){
  const increaseNumber = setInterval(printX, 1000);
  function printX(seconds){ //this function will execute every second
    if (seconds<10){
      appendSeconds.innerHTML = seconds;
      seconds++;
        if(seconds>10){
          clearInterval();
    }}
}}
*/


function start(){
  var x = document.getElementById("seconds");
  x.innerText = "6";
}

//I figured out how to change the text of an element.
