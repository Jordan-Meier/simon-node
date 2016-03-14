exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
};

exports.Entry.prototype.numberOfWords = function () {
  var words = this.body.split(" ");
  return words.length;
};
