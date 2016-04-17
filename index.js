var express = require('express');
// var app = express();
 
// app.get('/user/:id([0-9]+)', function(req, res, next){
// 	var users = ["Alina","Vlad","Vova"];
// 	userId = req.params.id;
// 	if (users[userId]) {
//     	res.send("user №"+userId+" "+users[userId]+" is here.");
// 	} else {
// 		res.send("Can not find such user");
// 	}
// });
 
// app.listen(8080);

// var express = require('express');
// var app = express();

 
// app.get('/user/:id([0-9]+)', function(req, res, next){
// 	var users = ["Alina","Vlad","Vova"];
// 	userId = req.params.id;
// 	if (users[userId]) {
//     	res.render('index', {
//     title: users[userId],
//     message: "Information"
// 		});
// 	} else {
// 		res.send("Can not find such user");
// 	}
// });
var app = express();
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);

app.use('/user/0', function (req, res, next) {
	res.render('index.html');
}) 
app.use('/user/1', function (req, res, next) {
	res.send("Да это же AJAX :)");
}) 


app.listen(8080);
