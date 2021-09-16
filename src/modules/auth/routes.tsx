import React from 'react'

import { getDashedStr } from 'lib/utils'

import Auth from 'modules/auth/containers/Auth'
import SignIn from 'modules/auth/containers/SignIn'

enum KEYS {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
}

export const getRoutes = key => [
  {
    path: '/auth',
    key: getDashedStr(key),
    exact: true,
    component: Auth
  },
  {
    path: '/auth/:role/sign-in',
    key: getDashedStr(key, KEYS.SIGN_IN),
    exact: false,
    component: SignIn,
  },
  {
    path: '/auth/:role/sign-up',
    key: getDashedStr(key, KEYS.SIGN_UP),
    exact: false,
    component: () => <div>Coming Soon!</div>,
  },
]
