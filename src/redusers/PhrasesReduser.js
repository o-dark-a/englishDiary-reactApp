const DEFAULT_ACTION = 'DEFAULT_ACTION'

let initialState = {
  defaultVal: null
}

const PhrasesReduser = (state = initialState, action) => {
  switch(action.type) {
    case DEFAULT_ACTION:
      return {
        ...state,
        defaultVal: ''
      }
    default:
      return state
  }
}

export const defaultdAC = () => ({type: DEFAULT_ACTION})

export default PhrasesReduser