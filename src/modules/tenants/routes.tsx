import React from 'react'

import { getDashedStr } from 'lib/utils'

import Tenants from 'modules/tenants/containers/Tenants'
import TenantCreate from 'modules/tenants/containers/TenantCreate'

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
  {
    path: '/tenants/create',
    key: getDashedStr(key, KEYS.TENANTS),
    exact: false,
    component: TenantCreate,
  },
]
