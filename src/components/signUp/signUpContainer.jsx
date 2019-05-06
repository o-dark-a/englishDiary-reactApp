import { connect } from 'react-redux'
import signUp from './signUp';

let mapStateToProps = (state) => {
  return { }
}
let mapDispatchToProps = (dispatch) => {
  return { }
}

const signUpContainer = connect(mapStateToProps, mapDispatchToProps)(signUp)

export default signUpContainer