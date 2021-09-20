import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store/rootReducer'

import { SignIn } from 'modules/auth/pages'

import { moduleName as authModule } from 'modules/auth/reducers'
import { signIn } from 'modules/auth/actions/auth'

const mapStateToProps = (state: RootState) => ({
  loading: state[authModule].auth.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signIn: body => dispatch(signIn(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
