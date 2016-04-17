var express = require('express');

var app = express();

app.use('/user/1', function (req, res, next) {
	res.send("Юзер 1");
}) 

app.get('/', function (req, res, next) {
	res.send("This is my app!");
})

app.listen(process.env.PORT || 8080);
