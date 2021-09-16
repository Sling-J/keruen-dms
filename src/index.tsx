import React, { FC } from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { createBrowserHistory as createHistory } from 'history'

import { ErrorBoundary, RenderRoutes } from 'modules/core/components'
import { configureStore } from 'src/store/configureStore'
import { ThemeProvider } from 'ui/theme'

import { routes } from 'settings/routes'

import 'assets/main.less'

const history = createHistory()
const store = configureStore({}, history)

const Index: FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <CookiesProvider>
            <ThemeProvider>
              <Router history={history}>
                <RenderRoutes routes={routes}/>
              </Router>
            </ThemeProvider>
          </CookiesProvider>
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
