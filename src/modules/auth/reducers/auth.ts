import { createReducer } from 'lib/utils'
import { AuthState } from 'modules/auth/types/interfaces'

import * as actions from 'modules/auth/constants/auth'

const initialState: AuthState = {
  loading: false,
  error: null,
}

export default createReducer(initialState, {
  [actions.AUTH_REQUEST]: state => ({
    ...state,
    loading: true,
    error: null,
  }),
  [actions.AUTH_SUCCESS]: state => ({
    ...state,
    loading: false,
    error: null,
  }),
  [actions.AUTH_FAILURE]: (state, { error }: any) => ({
    ...state,
    loading: false,
    error,
  }),
})
