var express  = require('express'),
path = require('path');

var app = express();
app.use(express.static('js'));
app.use('/data',express.static('data'));


app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname+'/newApp.html'));
});


app.listen(1413, function() {
  console.log("Listen to 1413");
})
