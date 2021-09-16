import { ReactNode } from 'react'

export type INavigationRoute = {
  icon: ReactNode
  name: string
}

export type IRoute = {
  path: string
  key: string
  exact?: boolean
  nav?: INavigationRoute
  skip?: boolean
  routes?: IRoute[]
  rightDataKey?: null | number | string
}
