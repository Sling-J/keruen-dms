import { combineReducers } from 'redux'

import users from 'modules/users/reducers/users'

export const moduleName = 'users'

export default combineReducers({
  users,
})
