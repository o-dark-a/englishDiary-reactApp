import { connect } from 'react-redux'
import Phrases from '../phrases/Phrases'

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => ({

})

const PhrasesContainer = connect(mapStateToProps, mapDispatchToProps)(Phrases)

export default PhrasesContainer