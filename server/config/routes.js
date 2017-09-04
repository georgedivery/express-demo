let controllers = require('../controllers')

module.exports = (app) => { 
	
	app.get('/', controllers.home.index)
	app.get('/about', controllers.home.about)

	app.get('/user/register', controllers.users.register)
	app.get('/user/create', controllers.users.create)

	 app.get('*', function(req, res) {	
		res.status(404)
		res.send('not found')
		res.end()		
	})
}