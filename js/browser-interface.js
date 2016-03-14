var Entry = require('./../js/journal.js').Entry;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
      $('#entry').append("<li>" + entry.title + "</li>");
      $('#entry').append("<li>" + entry.body + "</li>");
    });
  });
