import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createReducer } from 'lib/utils'

import { CredentialsState } from 'modules/auth/types/interfaces'

import * as actions from 'modules/auth/constants/credentials'

const initialState: CredentialsState = {
  accessToken: '',
  refreshToken: '',
  expiresIn: null,
  refreshExpiresIn: null,
  refreshTokenExpDate: '',
  tokenType: '',
  sessionState: '',
  scope: ''
}

const reducer = createReducer(initialState, {
  [actions.AUTH]: (state, { payload }: any) => ({
    ...state,
    ...payload,
  }),
  [actions.LOGOUT]: () => initialState,
})

export default persistReducer(
  {
    storage,
    key: 'doco_credentials',
    version: 1,
  },
  reducer,
)
