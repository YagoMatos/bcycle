const express = require('express')
const auth = require('./auth')

module.exports = function (server) {
  /*
   *
   */
  /// / Private and Protect by JWT routes Access ////
  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  protectedApi.use(auth)

  // map routes about Pay Cycle
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(protectedApi, '/billingCycles')

  /*
   *
   */
  /// / Public routes Access ////
  const openApi = express.Router()
  server.use('/oapi', openApi)

  const AuthService = require('../api/user/authService')
  openApi.post('/login', AuthService.login)
  openApi.post('/signup', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)
}
