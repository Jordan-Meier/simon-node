exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
};

exports.Entry.prototype.numberOfWords = function () {
  var words = Entry.split(" ");
  return words.length;
};
