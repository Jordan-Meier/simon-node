var Simon = require('./../js/simon.js').Simon;

$(document).ready(function(){
  var newGame = new Simon();
  $('#temp').submit(function(event){
    event.preventDefault();
    newGame.sequenceGenerator();
    console.log(newGame.sequence);

    });
  });
