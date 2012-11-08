
/*
 * GET home page.
 */
var fs   = require('fs');

exports.socketjs = function(req, res){
  var vPage = fs.readFileSync('javascript.html');
  res.writeHead(200,{'Content-type':'text/html; charset=utf-8'});
  res.end(vPage);
};