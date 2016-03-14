exports.Simon = function () {
   this.sequence = [];
};



exports.Simon.prototype.sequenceGenerator = function (){
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  var newColor;
  if(randomNumber === 1) {
    newColor = "RED";
  } else if (randomNumber === 2){
    newColor = "GREEN";
  } else if (randomNumber === 3){
    newColor = "BLUE";
  } else if (randomNumber === 4){
    newColor = "YELLOW";
  }
  else {
    alert("fail");
  }
  this.sequence.push(newColor);
};

exports.Simon.prototype.isMatch = function () {
  //function that determines whether or not user input matches simon sequence
  var userTurn;
  if(userTurn === randomNumber){

  }
};
