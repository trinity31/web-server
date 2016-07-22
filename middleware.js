
module.exports =  middleware = {
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