const mongoose = require('mongoose')

const encryption = require('../utilities/encryption')

let validationMessage = 'PATH is required'

let userSchema = mongoose.Schema({
	username: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	slat: String,
	hasherdPass: String,
	roles: [String]
})

userSchema.method({
	authenticate: (password) => {
		let inputHashedPass = encryption.generateHashedPassword(this.salt, password)

		if(inputHashedPass === this.hasherdPass){
			return true
		} else { 
			return false
		}
	}
})

let User = mongoose.model('User', userSchema)

module.exports.seedAdminUser = () => {
	User.find({}).then(users => {
		if (users.length === 0) {
			let salt = encryption.generateSalt()
			let hasherdPass = encryption.generateHashedPassword(salt, 'admin12')
			User.create({
				username: 'admin',
				firstName: 'admin',
				lastName: 'admin',
				salt: salt,
				hasherdPass: hasherdPass,
				roles: ['Admin']
			})
		}
	}) 
}