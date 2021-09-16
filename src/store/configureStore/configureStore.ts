import { createStore, Store, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createThunkErrorHandlerMiddleware from 'redux-thunk-error-handler'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { History } from 'history'

import errorHandler from 'src/settings/errorHandler'

import { rootReducer } from '../rootReducer'
import apiMiddleware from './middleware/api'

const configureStore = (initialState: {}, history: History): Store<any> => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        createThunkErrorHandlerMiddleware({
          onError: err => errorHandler.report(err),
        }),
        apiMiddleware(history),
        thunk as ThunkMiddleware,
      ),
    ),
  )
}

export default configureStore
