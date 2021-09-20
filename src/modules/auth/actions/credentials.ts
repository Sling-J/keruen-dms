import { ActionCreator } from 'redux'

import * as actions from 'modules/auth/constants/credentials'

export const auth: ActionCreator<any> = token => ({
  type: actions.AUTH,
  payload: token,
})

export const logout: ActionCreator<any> = () => dispatch => {
  dispatch({ type: actions.LOGOUT })
  dispatch({ type: actions.CLEAR_ALL })
}
