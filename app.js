var express = require('express');
var app = express();

app.use(require('body-parser')());
app.use(express.static(__dirname));

var port = Number(process.env.PORT || 4010);

app.listen(port, function(){
  console.log('App running on port '+ port);
});