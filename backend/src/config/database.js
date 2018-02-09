const mongoose = require('mongoose')
require('./mongodbMessages')

//take api node promise and attr to mongoose promise
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney')

