import React from 'react'

import { getDashedStr } from 'lib/utils'

import Users from 'modules/users/containers/Users'
import UserCreate from 'modules/users/containers/UserCreate'

enum KEYS {
  USERS = 'USERS',
  USERS_CREATE = 'USERS_CREATE',
}

export const getRoutes = key => [
  {
    path: '/users',
    key: getDashedStr(key, KEYS.USERS),
    exact: true,
    component: Users,
  },
  {
    path: '/users/create',
    key: getDashedStr(key, KEYS.USERS_CREATE),
    exact: true,
    component: UserCreate,
  },
]
