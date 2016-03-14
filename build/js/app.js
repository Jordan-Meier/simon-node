(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
};

exports.Entry.prototype.numberOfWords = function () {
  var words = this.body.split(" ");
  return words.length;
};

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').Entry;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
      $('#entry').append("<li>" + entry.title + "</li>");
      $('#entry').append("<li>" + entry.body + "</li>");
      $('#entry').append("<li> Number of words in entry: " + entry.numberOfWords() + "</li>");
    });
  });

},{"./../js/journal.js":1}]},{},[2]);
