import { ActionCreator } from 'redux'
import { AppThunk } from 'store/rootReducer'
import { SignInParams } from 'modules/auth/types'

import { auth } from 'modules/auth/actions/credentials'

import * as actions from 'src/modules/auth/constants/auth'

const request: ActionCreator<any> = () => ({
  type: actions.AUTH_REQUEST,
})

const success: ActionCreator<any> = () => ({
  type: actions.AUTH_SUCCESS,
})

const failure: ActionCreator<any> = error => ({
  type: actions.AUTH_FAILURE,
  error,
})

export const signIn: ActionCreator<any> = (body: SignInParams): AppThunk => (
  dispatch,
  getState,
  instance,
) => {
  dispatch(request())

  instance
    .post('/user-service/v1/admin/login', body)
    .then(res => {
      if (res.status === 200) {
        dispatch(success())
        dispatch(auth(res.data))
      } else {
        dispatch(failure())
      }
    })
    .catch(err => dispatch(failure(err)))
}
