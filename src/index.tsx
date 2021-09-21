import React, { FC } from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { PersistGate } from 'redux-persist/integration/react'
import { createBrowserHistory as createHistory } from 'history'

import ru_RU from 'antd/lib/locale/ru_RU'
import { ThemeProvider } from 'ui/theme'
import { ConfigProvider } from 'antd'

import { configureStore } from 'src/store/configureStore'

import {
  ErrorBoundary,
  PreloadProvider,
  RenderRoutes,
} from 'modules/core/components'

import { routes } from 'settings/routes'

import 'assets/main.less'

const history = createHistory()
const { persistor, store } = configureStore({}, history)

const Index: FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary>
          <PersistGate persistor={persistor}>
            <PreloadProvider history={history}>
              <CookiesProvider>
                <ThemeProvider>
                  <ConfigProvider locale={ru_RU}>
                    <Router history={history}>
                      <RenderRoutes routes={routes} />
                    </Router>
                  </ConfigProvider>
                </ThemeProvider>
              </CookiesProvider>
              s
            </PreloadProvider>
          </PersistGate>
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
