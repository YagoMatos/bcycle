const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const user = require('./user')
const env = require('../../.env')

//String@String.String
const emailRegex = /\S+@\S+\.\S+/

//\d = digits 
//[a-z] = lowercase
//[A-z] = uppercase
//[@#$] = special caracters
//min = 6 and max = 20
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

// If there is any error in DB
const sendErrorsFromDB = (resp, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return resp.status(400).json({ errors })
}

//Login
const login = (req, resp, next) => {
    const email = req.body.email || ''
    const password = req.body.password || ''

    // validating user and password with bcrypt in DB
    User.findOne({ email }, (err, user) => {

        if (err) {
            return sendErrorsFromDB(resp, err)
        } else if (user && bcrypt.compareSync(password, user.password)) {

            const token = jwt.sign(user, env.authSecret, {
                expiresIn: "1 day"
            })

            const { name, email } = user
            resp.json({ name, email, token })
        } else {
            return resp.status(400).send({ errors: ['Usuário ou Senha Inválidos'] })
        }
    })

}



//validating token
const validateToken = (req, resp, next) => {
    const token = req.body.token || ''

    jwt.verify(token, env.authSecret, function (err, decoded) {
        return resp.status(200).send({ valid: !err })
    })
}

//SignUp
const signup = (req, resp, next) => {
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.body.password || ''
    const confirmPassword = req.body.confirm_password || ''

    //validating email
    if (!email.match(emailRegex)) {
        return resp.status(400).send({
            errors: [
                'Email informado está inválido'
            ]
        })
    }

    //validating password
    if (!password.match(passwordRegex)) {
        return resp.status(400).send({
            errors: [
                "A Senha precisa ter: uma letra maiuscula, uma letra minuscula um número, um caracter especial(@#$) e tamanho entre 6-20"
            ]
        })
    }

    //validating password with confirm password
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)

    if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return resp.status(400).send({ errors: ['Senhas não conferem!'] })
    }

    //check if email there is in DB
    User.findOne({ email }, (err, user) => {
        if (err) {
            return sendErrorsFromDB(resp.err)

        } else if (user) {
            resp.status(400).send({
                errors: [
                    'Usuário já cadastrado'
                ]
            })
        } else {
            const newUser = new User({ name, email, password: passwordHash })
            newUser.save(err => {
                if (err) {
                    return sendErrorsFromDB(resp.err)
                } else {
                    login(req, resp, next)
                }
            })
        }
    })

}

module.exports = { login, signup, validateToken }