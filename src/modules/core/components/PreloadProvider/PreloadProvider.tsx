import { Component, ReactNode } from 'react'
import { connect } from 'react-redux'

import { moduleName as authModule } from 'modules/auth/reducers'

import { RootState } from 'store/rootReducer'
import { History } from 'history'
import { Dispatch } from 'redux'

interface PreloadProps {
  token?: string
  children: ReactNode
  history: History
  onAuth?: VoidFunction
  onMain?: VoidFunction
}

class PreloadProvider extends Component<PreloadProps> {
  componentDidMount() {
    const { token, onAuth, onMain } = this.props

    if (!!token) {
      // tslint:disable-next-line:no-console
      console.log('----------- INIT USER -----------')
    } else if (!/^\/auth/.test(window.location.pathname)) {
      onAuth()
    }

    if (token && /^\/auth/.test(window.location.pathname)) {
      onMain()
    }
  }

  componentDidUpdate(prevProps) {
    const { token, onAuth, onMain } = this.props

    if (!prevProps.token && token) {
      onMain()
    }

    if (prevProps.token && !token) {
      onAuth()
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}

const mapStateToProps = (state: RootState) => ({
  token: state[authModule].credentials.accessToken,
})

const mapDispatchToProps = (dispatch: Dispatch, { history }: PreloadProps) => ({
  onAuth: () => history.replace('/auth'),
  onMain: () => history.replace('/'),
})

export default connect(mapStateToProps, mapDispatchToProps)(PreloadProvider)
