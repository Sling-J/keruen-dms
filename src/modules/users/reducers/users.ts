import { createReducer } from 'lib/utils'
import { UsersState } from 'modules/users/types/interfaces'

import * as actions from 'modules/users/constants/users'

const initialState: UsersState = {
  loading: false,
  error: null,
}

export default createReducer(initialState, {
  [actions.CREATE_USER_REQUEST]: state => ({
    ...state,
    loading: true,
    error: null,
  }),
  [actions.CREATE_USER_SUCCESS]: state => ({
    ...state,
    loading: false,
    error: null,
  }),
  [actions.CREATE_USER_FAILURE]: (state, { error }: any) => ({
    ...state,
    loading: false,
    error,
  }),
})
