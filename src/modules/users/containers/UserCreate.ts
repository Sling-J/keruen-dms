import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store/rootReducer'

import { UserCreate } from 'modules/users/pages'

import { moduleName as usersModule } from 'modules/users/reducers'
import { createUser } from 'modules/users/actions/users'

const mapStateToProps = (state: RootState) => ({
  loading: state[usersModule].users.loading,
  error: state[usersModule].users.error,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createUser: body => dispatch(createUser(body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCreate)
