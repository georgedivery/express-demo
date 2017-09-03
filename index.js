const express = require('express')
const mongoose = require('mongoose')

let app = express()

mongoose.Promise =  global.Promise

app.set('view engine', 'pug')
app.set('views', './server/views')

let env = process.env.NODE_ENV || 'development'
let port = process.port || 5656

app.use(express.static('public'))  

app.get('/', function(req, res) {
	mongoose.createConnection('mongodb://localhost:27017/express-demo-db')

	console.log('Mongo ready')
	
	res.render('index')
	
})



app.listen(port)
console.log('express ready ' + port) 