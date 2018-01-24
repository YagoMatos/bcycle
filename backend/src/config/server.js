//port
const port = 3003

//require middleware
const bodyParser = require('body-parser')

//framework
const express = require('express')
const server = express()

const allowCors = require('./cors')
const queryParser = require('express-query-int')

//middlewares
server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
    console.log(`BACKEND running on port ${port}.`)
})

module.exports = server