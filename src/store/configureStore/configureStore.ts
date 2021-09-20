import { createStore, Store, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, Persistor } from 'redux-persist'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { History } from 'history'
import createThunkErrorHandlerMiddleware from 'redux-thunk-error-handler'

import apiMiddleware from 'store/configureStore/middleware/api'
import errorHandler from 'settings/errorHandler'
import { rootReducer } from 'store/rootReducer'

interface ConfigureStore {
  persistor: Persistor
  store: Store<any>
}

const configureStore = (initialState: {}, history: History): ConfigureStore => {
  const store = createStore(
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

  if ((module as any).hot) {
    // tslint:disable-next-line
    ;(module as any).hot.accept('../rootReducer', () =>
      store.replaceReducer(rootReducer),
    )
  }

  const persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore
