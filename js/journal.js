exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
};

exports.Entry.prototype.numberOfWords = function () {
  var words = Entry.split(" ");
  return words.length;
};




// exports.pingPong = function(goal) {
//   var output = [];
//   for (var i = 1; i <= goal; i++) {
//     if (i % 15 === 0) {
//       output.push("ping-pong");
//     } else if (i % 3 === 0) {
//       output.push("ping");
//     } else if (i % 5 === 0) {
//       output.push("pong");
//     } else  {
//       output.push(i);
//     }
//   }
//   return output;
// };
