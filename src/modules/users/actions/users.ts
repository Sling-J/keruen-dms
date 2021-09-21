import { ActionCreator } from 'redux'
import { AppThunk } from 'store/rootReducer'
import { CreateUserParams } from 'modules/users/types'

import * as actions from 'src/modules/users/constants/users'

const request: ActionCreator<any> = () => ({
  type: actions.CREATE_USER_REQUEST,
})

const success: ActionCreator<any> = () => ({
  type: actions.CREATE_USER_SUCCESS,
})

const failure: ActionCreator<any> = error => ({
  type: actions.CREATE_USER_FAILURE,
  error,
})

export const createUser: ActionCreator<any> = (
  body: CreateUserParams,
): AppThunk => (dispatch, getState, instance) => {
  dispatch(request())

  instance
    .post('/user-service/v1/admin', body)
    .then(res =>
      res.status === 200 ? dispatch(success()) : dispatch(failure()),
    )
    .catch(err => dispatch(failure(err)))
}
