import { connect } from 'react-redux'
import Words from '../words/Words'
import { changeCurrentWordAC, changeCurrentTranslateAC, addNewWordAC, createLocalStorageAC, wordHooking, deleteWord } from '../../../redusers/WordsReduser';

const mapStateToProps = (state) => {
  return {
    allWords: state.words.allWords,
    word: state.words.word,
    wordTranslate: state.words.wordTranslate,
    startIndex: state.words.startIndex,
    hookedWordId: state.words.hookedWordId
  }
}
const mapDispatchToProps = (dispatch) => ({
  createLocalStorage() {
    dispatch(createLocalStorageAC())
  },
  changeCurrentWord(word) {
    dispatch(changeCurrentWordAC(word))
  },
  changeCurrentTranslate(translate) {
    dispatch(changeCurrentTranslateAC(translate))
  },
  addNewWord(word, translate) {
    dispatch(addNewWordAC(word, translate))
  },
  wordHooking(wordId) {
    dispatch(wordHooking(wordId))
  },
  deleteWord(wordId) {
    dispatch(deleteWord(wordId))
    dispatch(createLocalStorageAC())
  }
})

const WordsContainer = connect(mapStateToProps, mapDispatchToProps)(Words)

export default WordsContainer