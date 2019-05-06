import signIn from './signIn'
import { connect } from 'react-redux'

let mapStateToProps = ({login}) => {
  return {
    registeredUsers: login.registeredUsers
  }
}

let mapDispatchToProps = (dispatch) => {
  return { }
}

const signInContainer = connect(mapStateToProps, mapDispatchToProps)(signIn)

export default signInContainer