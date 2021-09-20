import { combineReducers } from 'redux'

import auth from 'modules/auth/reducers/auth'
import credentials from 'modules/auth/reducers/credentials'

export const moduleName = 'auth'

export default combineReducers({
  auth,
  credentials,
})
