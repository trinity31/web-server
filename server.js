var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	//route level middleware
	requireAuthentication: function(req, res, next) { 
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next) {
		console.log('[' + new Date().toString() + '] Request: ' + req.method + '' + req.originalUrl);
		next();
	}
};

//Application level middleware
app.use(middleware.logger);

//app.use(middleware.logger);
//about
//About us
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('Coming soon!');
});

app.use(express.static(__dirname + '/public'))
// console.log(__dirname);

app.listen(PORT, function() {
	console.log('Express server started, port = ' + PORT);
});