const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, resp, next) => {
    
    //CORS prefligth request
    if(req.method === 'OPTIONS'){
            next()
    } else {
        //I hope receive the token 3 differents form:
        const token = req.body.token || req.query.token || req.headers['authorization']

        //If token not exist
        if(!token){
            return resp.status(403).send({
                errors: [
                    'No token provided.'
                ]
            })
        }

        //If token exist
        jwt.verify(token, env.authSecret, function(err, decoded){
            if(err){
                return resp.status(403).send({
                    errors: [
                        'Failed to authenticate token.'
                    ]
                })
            } else {
                //req.decoded = decoded
                next()
            }
        })
    }
}