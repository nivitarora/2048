  var board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  initialize();
function runGame(){
  getTileValues();
  colorBoard();
  var blanks = [];
  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
      if (board[i][j] === 0){
        blanks.push([i,j]);
      }
    }
  }
  var space = Math.round(Math.random()*(blanks.length-1));
  var b = true;
  while(b === true){
    var number = Math.round(Math.random()*2 + 2);
    if(number%2 === 0){
      var b = false;
      board[blanks[space][0]][blanks[space][1]] = number;
    }
  }
}
              //temporary function to demonstrate interaction between html and javascript
              //var board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

              //temporary function to demonstrate interaction between css and javascript
              //don't worry about teaching case switches here, if you want to you can, if not don't worry about it
              //theyre pretty intuitive to understand.

            function colorBoard(){
              for(var i = 0; i < 4; i++){
                for(var j = 0; j < 4; j++){
                  var boardID = "r"+i+"c"+j;
                  if(board[i][j] == 2){
                    document.getElementById(boardID).style.background = "#f0e5da";
                  }
                  else if(board[i][j] == 4){
                    document.getElementById(boardID).style.background = "#ede2c8";
                  }
                  else if(board[i][j] == 8){
                    document.getElementById(boardID).style.background = "#feb578";
                  }
                  else if(board[i][j] == 16){
                    document.getElementById(boardID).style.background = "#ff9962";
                  }
                  else if(board[i][j] == 32){
                    document.getElementById(boardID).style.background = "#ff8060";
                  }
                  else if(board[i][j] == 64){
                    document.getElementById(boardID).style.background = "#ff613c";
                  }
                  else if(board[i][j] == 128){
                    document.getElementById(boardID).style.background = "#efd26d";
                  }
                  else if(board[i][j] == 256){
                    document.getElementById(boardID).style.background = "#efd15c";
                  }
                  else if(board[i][j] == 512){
                    document.getElementById(boardID).style.background = "#efcd4a";
                  }
                  else if(board[i][j] == 1024){
                    document.getElementById(boardID).style.background = "#f0ca36";
                  }
                  else if(board[i][j] == 2048){
                    document.getElementById(boardID).style.background = "#ff9933";
                  }
                  else{
                    document.getElementById(boardID).style.background = "#EEE4DA";
                  }
                }
              }
            }

          function move(e){
            //MOVE UP ONE
            if (e.keyCode === 38){ //up key pressed
              for(var i = 0;i<4;i++){ //checks through all rows
                //console.log("in the loop");
                if (i != 0){ //checks that not in top row
                  //console.log("i is not 0");
                  for(var j = 0; j < 4; j++){ //checks through all the values
                    //console.log("testing out j");
                    if (board[i][j] != 0){ //checks that it is not an empty space
                      console.log("it's not equal to 0")
                      if (board[i-1][j] === 0){ //checks that position above is empty
                        console.log("it can move!!")
                        board[i-1][j] = board[i][j]; //sets position up one to new value
                        board[i][j] = 0; //sets original position to 0
                      }
                      else if(board[i-1][j] === board[i][j]){ //combines tiles
                        board[i-1][j] += board[i][j];
                        board[i][j] = 0; //sets original position to 0
                      }
                    }
                  }
                } 
              }
            }
            //MOVE DOWN ONE
            if (e.keyCode === 40){ //down key pressed
              for(var i = 3;i>=0;i--){ //checks through all rows starting from bottom
                //console.log("in the loop");
                if (i != 3){ //checks that not in bottom row
                  //console.log("i is not 0");
                  for(var j = 0; j < 4; j++){ //checks through all the values
                    //console.log("testing out j");
                    //while (board[i+1][j] === 0){ //make it move to edge maybe?
                      if (board[i][j] != 0){ //checks that it is not an empty space
                        console.log("it's not equal to 0")
                        if (board[i+1][j] === 0){ //checks that position above is empty
                          console.log("it can move!!")
                          board[i+1][j] = board[i][j]; //sets position up one to new value
                          board[i][j] = 0; //sets original position to 0
                        }
                        else if(board[i+1][j] === board[i][j]){ //combines tiles
                          board[i+1][j] += board[i][j];
                          board[i][j] = 0; //sets original position to 0
                        }
                      }
                    //}
                  }
                } 
              }
            }
            //MOVE RIGHT ONE
            if (e.keyCode === 39){ //RIGHT key pressed
              for(var j = 3;j>=0;j--){ //checks through all rows starting from bottom
                //console.log("in the loop");
                if (j != 3){ //checks that not in bottom row
                  //console.log("i is not 0");
                  for(var i = 0; i < 4; i++){ //checks through all the values
                    //console.log("testing out j");
                    if (board[i][j] != 0){ //checks that it is not an empty space
                      console.log("it's not equal to 0")
                      if (board[i][j+1] === 0){ //checks that position above is empty
                        console.log("it can move!!")
                        board[i][j+1] = board[i][j]; //sets position up one to new value
                        board[i][j] = 0; //sets original position to 0
                      }
                      else if(board[i][j+1] === board[i][j]){ //combines tiles
                          board[i][j+1] += board[i][j];
                          board[i][j] = 0; //sets original position to 0
                      }
                    }
                  }
                } 
              }
            }
            //MOVE LEFT ONE
            if (e.keyCode === 37){ //left key pressed
              for(var j = 0;j<4;j++){ //checks through all rows
                //console.log("in the loop");
                if (j != 0){ //checks that not in top row
                  //console.log("i is not 0");
                  for(var i = 0; i < 4; i++){ //checks through all the values
                    //console.log("testing out j");
                    if (board[i][j] != 0){ //checks that it is not an empty space
                      console.log("it's not equal to 0")
                      if (board[i][j-1] === 0){ //checks that position above is empty
                        console.log("it can move!!")
                        board[i][j-1] = board[i][j]; //sets position up one to new value
                        board[i][j] = 0; //sets original position to 0
                      }
                      else if(board[i][j-1] === board[i][j]){ //combines tiles
                        board[i][j-1] += board[i][j];
                        board[i][j] = 0; //sets original position to 0
                      }
                    }
                  }
                } 
              }
            }
            runGame();
            //console.log(board[0],board[1],board[2], board[3]);
          }


          //show students an ascii conversion tool.
          function printKey(e){
            console.log(e.keyCode);
            //keyCodeNumber = e.keyCode; 
          }

          function getTileValues(){
            for(var i = 0; i < 4; i++){
              for(var j = 0; j < 4; j++){
                var boardID = "r"+i+"c"+j;
                if(board[i][j]!= 0){
                  document.getElementById(boardID).innerHTML = board[i][j];
                }
                else if (board[i][j] === 0){
                  document.getElementById(boardID).innerHTML = " ";
                }
              }
            }
          }

          function name(){

          }

function initialize(){
  for(var a = 0; a<2; a++){
    var blanks = [];
    for(var i = 0; i < 4; i++){
      for(var j = 0; j < 4; j++){
        if (board[i][j] === 0){
          blanks.push([i,j]);
        }
      }
    }
    var space = Math.round(Math.random()*(blanks.length-1));
    var b = true;
    while(b === true){
      var number = Math.round(Math.random()*2 + 2);
      if(number%2 === 0){
        var b = false;
        board[blanks[space][0]][blanks[space][1]] = number;
      }
    }
  }
}

