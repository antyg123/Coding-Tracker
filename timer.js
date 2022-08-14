function start(){
  const increaseNumber = setInterval(printX, 1000);
  let x = Number(document.getElementById("time")).value
  function printX(x){ //this function will execute every second
    if (x<10){
      console.log(x);
      x++;
        if(x>10){
          console.log("done")
          clearInterval();
    }}
}}

let up = 1;
function change(seconds, up){
  Number(document.getElementById("seconds").innerHTML) = up;}
change("seconds", up);

//create a funtion that upon clicking, will count up to ten.
//VARIABLES:
//  number that will increase
//FUNCTIONS:
//  button start
//  interval 
//  add 1 to a number

//BUTTON START
//  button is clicked
//  interval begins

//INTERVAL
//  declare number
//  number will go up by 1 
//  interval takes place over one second
//  interval will last until number hits ten*optional
