(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Simon = require('./../js/simon.js').Simon;

// $(document).ready(function(){
//   var newGame = new Simon();
//   $('#temp').submit(function(event){
//     event.preventDefault();
//     newGame.sequenceGenerator();
//     console.log(newGame.sequence);
//
//     });
//   });


$(document).ready(function () {
    event.preventDefault();
    $('#red').submit(function(event){

    });
});

},{"./../js/simon.js":1}]},{},[2]);
