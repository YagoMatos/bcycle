import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard2/dashBoard2' //without redux
//import Dashboard from '../dashboard/dashBoard' //with redux
import BillingCycle from '../billingCycles/billingCycles'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/billingCycles' component={BillingCycle}/>
        <Redirect from='*' to='/' />
    </Router>
)
