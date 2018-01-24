const express = require('express')

module.exports = function(server){
    
    // URL base to all routes
    const router = express.Router()
    server.use('/api', router)

    //map routes about Pay Cycle
    const BilliCycle = require('../api/billingCycle/billingCycleService')
    BilliCycle.register(router, '/billingCycles')

}