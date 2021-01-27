const express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res){
  res.render('index', {
        title: 'My Site',
    nav: ['Home','About','Contact',"4th element"]
  });
});

app.listen(4000);
