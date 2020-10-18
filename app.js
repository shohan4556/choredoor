var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");
var startButton = document.getElementById("start");

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg"; 
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;
var currentlyPlaying = true;

const randomChoreDoorGenerator = ()=>{
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
    
  }
  else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else{
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }

}

const playDoor = function(door){
    console.log(numClosedDoors);
    numClosedDoors -= 1;
  if(numClosedDoors === 0){
    gameOver("win");
  }
  else if(isBot(door) == true){
    gameOver();
  }
}

const gameOver = (status)=>{
  if(status === 'win'){
    startButton.innerHTML = "You win ! Play again ?"
  }
  else{
    startButton.innerHTML = "Game Over! Play again?"
  }
    currentlyPlaying = false;
}

const isBot = function(door){
  if(door.src == botDoorPath)
    return true;
  else
    return false;
}

const isClicked = (door)=>{
  if(door.src === closedDoorPath)
    return false;
  else
    return true;
}

const startRound = ()=>{
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  currentlyPlaying = true;
  startButton.innerHTML = "Good Luck !";
  randomChoreDoorGenerator();
}

//call the function 
startRound();

doorImage1.onclick = ()=> {
  if(isClicked(doorImage1) == false && currentlyPlaying == true){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = ()=> {
  if(isClicked(doorImage2) == false && currentlyPlaying==true){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = ()=> {
  if(isClicked(doorImage3) == false && currentlyPlaying==true){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}


startButton.onclick = ()=>{
  if(!currentlyPlaying){
    startRound();
  }
}







