var Entry = require('./../js/journal.js').Entry;
var moment = require('moment');

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
      $('#entry').append("<li>" + entry.title + "</li>");
      $('#entry').append("<li>" + entry.body + "</li>");
      $('#entry').append("<li> Number of words in entry: " + entry.numberOfWords() + "</li>");
      $('#entry').append("<li> Date of entry: " + moment().format('MMMM Do YYYY, h:mm:ss a') + "</li>");
    });
  });
