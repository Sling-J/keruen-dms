import { combineReducers, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AxiosInstance } from 'axios'

import storage from 'redux-persist/lib/storage'

import { CLEAR_ALL } from 'modules/auth/constants/credentials'

import authReducer, {
  moduleName as authModule,
} from 'src/modules/auth/reducers'

import usersReducer, {
  moduleName as usersModule,
} from 'src/modules/users/reducers'

const reducers = combineReducers({
  [authModule]: authReducer,
  [usersModule]: usersReducer,
})

export const rootReducer = (state, action) => {
  if (action.type === CLEAR_ALL) {
    storage.removeItem('persist:doco_credentials').then(r => r)

    return reducers(undefined, action)
  }

  return reducers(state, action)
}

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  AxiosInstance,
  Action<string>
>
