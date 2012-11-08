
/*
 * GET home page.
 */
var fs   = require('fs');

exports.index = function(req, res){
  var vPage = fs.readFileSync('indexx.html');
  res.writeHead(200,{'Content-type':'text/html; charset=utf-8'});
  res.end(vPage);
};