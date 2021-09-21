import { RenderRoutes, RenderMainRoutes } from 'modules/core/components'

import { getRoutes as getAuthRoutes } from 'modules/auth/routes'
import { getRoutes as getUsersRoutes } from 'modules/users/routes'
import { getRoutes as getTenantsRoutes } from 'modules/tenants/routes'

import { PeopleIcon } from 'ui/icons'

enum KEYS {
  AUTH = 'AUTH',
  INDEX = 'INDEX',
  USERS = 'USERS',
  TENANTS = 'TENANTS',
  DASHBOARD = 'DASHBOARD',
  CONTRACTS = 'CONTRACTS',
}

const mainRoutes = [
  {
    path: '/dashboard',
    key: KEYS.DASHBOARD,
    exact: false,
    routes: [],
    component: RenderRoutes,
    nav: {
      name: 'Задачи',
      icon: PeopleIcon,
    },
  },
  {
    path: '/tenants',
    key: KEYS.TENANTS,
    exact: false,
    routes: getTenantsRoutes(KEYS.TENANTS),
    component: RenderRoutes,
    nav: {
      name: 'Арендаторы',
      icon: PeopleIcon,
      childs: [],
    },
  },
  {
    path: '/users',
    key: KEYS.USERS,
    exact: false,
    routes: getUsersRoutes(KEYS.USERS),
    component: RenderRoutes,
    nav: {
      name: 'Пользователи',
      icon: PeopleIcon,
      childs: [],
    },
  },
  {
    path: '/contracts',
    key: KEYS.CONTRACTS,
    exact: false,
    routes: [],
    component: RenderRoutes,
    nav: {
      name: 'Договора',
      icon: PeopleIcon,
      childs: [],
    },
  },
]

export const routes = [
  {
    path: '/auth',
    key: KEYS.AUTH,
    component: RenderRoutes,
    routes: getAuthRoutes(KEYS.AUTH),
  },
  {
    path: '/',
    key: KEYS.INDEX,
    component: RenderMainRoutes,
    routes: mainRoutes,
  },
]
