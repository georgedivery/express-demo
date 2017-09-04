let encryption = require('../utilities/encryption')

module.exports = {
    register: (req, res) => {
        res.render('users/register')  
    },
    create: (req, res) => {
        let user = req.body

        if(user.password !== user.confirmPassword) {
            res.render('user/register', {globalError: "pass ot user not match"})
        } else {  
            user.salt = encryption,generateSalt()
            user.hashedPass = encryption.generateHashedPassword(user.salt, user.password)
            res.send('ba4ka')
        } 
    } 
}