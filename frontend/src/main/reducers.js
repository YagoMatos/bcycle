import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycles from '../billingCycles/billingCyclesReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycles: BillingCycles,
    form: formReducer
})

export default rootReducer