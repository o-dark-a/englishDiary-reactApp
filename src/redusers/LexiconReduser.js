const VIEW_PREV_WORDS = 'VIEW_PREV_WORDS'

let initialState = {
  startIndex: 0
}

const LexiconReduser = (state = initialState, action) => {
  switch(action.type) {
    case VIEW_PREV_WORDS:
      return {
        ...state,
        startIndex: action.startIndex+6
      }
    default:
      return state
  }
}

export const viewPrevWordsAC = (startIndex) => ({type: VIEW_PREV_WORDS, startIndex})

export default LexiconReduser    