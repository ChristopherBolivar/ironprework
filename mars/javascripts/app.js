// Rover Object Goes Here
// ======================
 let mars = {
   direction: "N"
 }
// ======================

// Declaring Variables
let xCord = 0;
let yCord = 0;
let moveCommands = 'fzbffrflb';
let travelLog = [];





function turnLeft(rover){
  //Switching Directions
  switch(mars.direction){
   case "N": 
   mars.direction = "W";
   break;
   case "W": 
   mars.direction = "S";
   break;
   case "S": 
   mars.direction = "E";
   break;
   case "E": 
   mars.direction = "N";
   break;
  }
  
  console.log("turnLeft was called! ");
}




function turnRight(rover){

  //Switching Directions
  switch(mars.direction){
    case "N": 
    mars.direction = "E";
    break;
    case "E": 
    mars.direction = "S";
    break;
    case "S": 
    mars.direction = "W";
    break;
    case "W": 
    mars.direction = "N";
    break;
  }
  console.log("turnRight was called!");
}







function moveForward(rover){
 
  //Switching Coordinates
  switch(mars.direction){
    case "N": 
    yCord -= 1;
    break;
    case "S": 
    yCord += 1;
    break;
    case "W": 
    xCord -= 1;
    break;
    case "E": 
    xCord += 1;
    break;
  }
  // Setting 10 x 10 square
  if(xCord > 10 || xCord  < -10 || yCord > 10 || yCord < -10){
    console.log('dont go off');
    
  }else if(xCord < 11 && xCord  > -11 && yCord < 11 && yCord > -11){
  
  //Logging out current coordinates
    console.log('x: '+ xCord + ' ' + 'y: ' + yCord);
  console.log("moveForward was called");
    //pushing moved Coordinates into Array
  travelLog.push(xCord +' '+ yCord);
  }
  



}
  function moveBackwards(rover){
    //Switching Coordinates
    switch(mars.direction){
      case "N": 
      yCord += 1;
      break;
      case "S": 
      yCord -= 1;
      break;
      case "W": 
      xCord += 1;
      break;
      case "E": 
      xCord -= 1;
      break;
    }
    // Setting 10 x 10 square
    if(xCord > 10 || xCord  < -10 || yCord > 10 || yCord < -10){
      console.log('dont go off');
      
    }else if(xCord < 11 && xCord  > -11 && yCord < 11 && yCord > -11){

     //Logging out current coordinates
    console.log('x: '+ xCord + ' ' + 'y: ' + yCord);
    console.log("moveBackwards was called");
    //pushing moved Coordinates into Array
  travelLog.push(xCord +' '+ yCord);
    }
  }

//Looping around a variable looking for moving commands
for(i=0;i<=moveCommands.length; i++){
  
  if(moveCommands[i] === 'f'){
   moveForward();
  }
  if(moveCommands[i] === 'b'){
    moveBackwards();
   }
  if(moveCommands[i] === 'r'){
    turnRight();
   }
   if(moveCommands[i] === 'l'){
    turnLeft();
   }

   // Validating command letters in variable moveCommands
   else if(moveCommands[i] !== 'f' && moveCommands[i] !== 'b' && moveCommands[i] !== 'r' && moveCommands[i] !== 'l'){
      console.log('not a function!!');
   }

  //pushing moved Coordinates into Array
  travelLog.push(xCord +' '+ yCord);
  console.log('x: '+ xCord + ' ' + 'y: ' + yCord);
}

//Logging out the stored coordinates
//Stored in a function to callout if necessary
let Tlog = () => {
  for(i=0; i<=travelLog.length; i++){
    console.log(travelLog[i]);
  } 
  
}
//Calling the function to log out Travel Log Array
Tlog();
