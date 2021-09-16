import React from 'react'

import { getDashedStr } from 'lib/utils'

import Tenants from 'modules/tenants/containers/Tenants'

enum KEYS {
  TENANTS = 'TENANTS',
}

export const getRoutes = key => [
  {
    path: '/tenants',
    key: getDashedStr(key, KEYS.TENANTS),
    exact: true,
    component: Tenants,
  },
]
