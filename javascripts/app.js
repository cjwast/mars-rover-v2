// Rover Object Goes Here
// ======================
var roverCarlos = {direction : "E",
            x : 0, 
            y : 0,
            travelLog : [[0],[0]]
          };
// ======================
function turnLeft(rover){
  
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
    break;
    case "W":
      rover.direction = "S";
      break;
  }
  return rover;
}


function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
    break;
    case "W":
      rover.direction = "N";
      break;
  }
  return rover;
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      rover.y--;
      break;
    case "S":
      rover.y++;
      break;
    case "E":
      rover.x++;
    break;
    case "W":
      rover.x--;
      break;
  }
  rover.travelLog.push([rover.x, rover.y]);
  console.log(rover.travelLog);
  return rover;
}

function executeCommands(strCommand, rover) {

  for (let i = 0; i < strCommand.length; i++) {
    switch (strCommand[i]) {
      case "f":
        rover = moveForward(rover);
        break;

      case "r":
        rover = turnRight(rover);
        break;

      case "l":
      rover = turnLeft(rover);
        break;
    }
  }

  // console.log("Number of rows:" + rover.travelLog.length);
  // console.log("Number of columns: " + rover.travelLog[0].length);

  for (let i = 0; i < rover.travelLog.length; i++) {
    var row = rover.travelLog[i];
    for (let j = 0; j < row.length; j++) {
      var column = row[j];
      console.log( "travel log: " + i + ", " + j);
    } 
  }
}


executeCommands("rffrfflfrff", roverCarlos);