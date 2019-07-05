const CHANGE_CURRENTY_WORD = 'CHANGE_CURRENTY_WORD'
const CHANGE_CURRENTY_TRANSLATE = 'CHANGE_CURRENTY_TRANSLATE'
const ADD_NEW_WORD = 'ADD_NEW_WORD'
const CREATE_LOCAL_STORAGE = 'CREATE_LOCAL_STORAGE'
const VIEW_PREV_WORDS = 'VIEW_PREV_WORDS'
const VIEW_NEXT_WORDS = 'VIEW_NEXT_WORDS'
const WORD_HOOKED = 'WORD_HOOKED'
const DELETE_WORD = 'DELETE_WORD'

let initialState = {
  allWords: (JSON.parse(localStorage.getItem('allWords')) === null) ? [] : JSON.parse(localStorage.getItem('allWords')),
  word: '',
  wordTranslate: '',
  startIndex: 0,
  hookedWordId: false
}

const WordsReduser = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_LOCAL_STORAGE:
      let localState = [...state.allWords]
      localStorage.setItem('allWords', JSON.stringify(localState))
      return state
    case CHANGE_CURRENTY_WORD:
      return {
        ...state,
        word: action.word
      }
    case CHANGE_CURRENTY_TRANSLATE:
      return {
        ...state,
        wordTranslate: action.translate
      }
    case ADD_NEW_WORD:
      return {
        ...state,
        allWords: [...state.allWords, [action.word, action.translate]],
        word: '',
        wordTranslate: ''
      }
    case VIEW_PREV_WORDS:
      return {
        ...state,
        startIndex: action.startIndex+6
      }
    case VIEW_NEXT_WORDS:
      return {
        ...state,
        startIndex: action.startIndex-6
      }
    case WORD_HOOKED:
      return {
        ...state,
        hookedWordId: action.wordId
      }
    case DELETE_WORD:
      state.allWords.splice(state.hookedWordId, 1)
      return {
        ...state,
        hookedWordId: null
      }
    default:
      return state
  }
}

export const createLocalStorageAC = () => ({type: CREATE_LOCAL_STORAGE})
export const changeCurrentWordAC = (word) => ({type: CHANGE_CURRENTY_WORD, word})
export const changeCurrentTranslateAC = (translate) => ({type: CHANGE_CURRENTY_TRANSLATE, translate})
export const addNewWordAC = (word, translate) => ({type: ADD_NEW_WORD, word, translate})
export const viewPrevWordsAC = (startIndex) => ({type: VIEW_PREV_WORDS, startIndex})
export const viewNextWordsAC = (startIndex) => ({type: VIEW_NEXT_WORDS, startIndex})
export const wordHooking = (wordId) => ({type: WORD_HOOKED, wordId})
export const deleteWord = (wordId) => ({type: DELETE_WORD, wordId})

export default WordsReduser