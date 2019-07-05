import { connect } from 'react-redux'
import Lexicon from '../Lexicon/Lexicon'
import { viewPrevWordsAC, viewNextWordsAC } from '../../redusers/WordsReduser'

const mapStateToProps = (state) => {
  return {
    startIndex: state.words.startIndex,
    allWords: state.words.allWords
  }
}
const mapDispatchToProps = (dispatch) => ({
  viewPrevWords(startIndex) {
    dispatch(viewPrevWordsAC(startIndex))
  },
  viewNextWords(startIndex) {
    dispatch(viewNextWordsAC(startIndex))
  }
})

const LexiconContainer = connect(mapStateToProps, mapDispatchToProps)(Lexicon)

export default LexiconContainer