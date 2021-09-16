import { combineReducers, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AxiosInstance } from 'axios'

export const rootReducer = () => {
  return combineReducers({})
}

export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  AxiosInstance,
  Action<string>
>

export type AppThunkWithValue<R> = ThunkAction<
  R,
  RootState,
  AxiosInstance,
  Action<string>
>
