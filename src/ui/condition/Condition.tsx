import { createElement, ReactNode, Fragment, FC } from 'react'

interface ConditionProps {
  match: boolean | number | string
  children?: ReactNode
}

const Condition: FC<ConditionProps> = ({ children, match }) => {
  if (match) {
    return createElement(Fragment, {}, children)
  }

  return null
}

export default Condition
