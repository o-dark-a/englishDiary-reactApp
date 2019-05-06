const CLEARE_CURRENT_ENTRY = 'CLEARE_CURRENT_ENTRY'
const CHANGE_CURRENT_ENTRY = 'CHANGE_CURRENT_ENTRY'
const SAVE_NEW_ENTRY = 'SAVE_NEW_ENTRY'
const CREATE_LOCAL_STORAGE = 'CREATE_LOCAL_STORAGE'
const GET_PREV_ENTRIES = 'GET_PREV_ENTRIES'

let initialState = {
  currentEntry: '',
  allEntries: (JSON.parse(localStorage.getItem('allEntries')) === null) ? [] : JSON.parse(localStorage.getItem('allEntries')),
  posFirstElem: 1,
  callCountPrev: 1,
  callCountNext: 0
}


const NewEntriesReduser = (state = initialState, action) => {
  switch(action.type) {
    case CLEARE_CURRENT_ENTRY:
      return {
        ...state,
        currentEntry: ''
      }
    case CHANGE_CURRENT_ENTRY:
      return {
        ...state,
        currentEntry: action.newValue
      }
    case SAVE_NEW_ENTRY:
      let idx
      (state.allEntries.length > 0) ? idx = state.allEntries.length : idx = 0;
      return {
        ...state,
        currentEntry: '',
        allEntries: [...state.allEntries, {id: idx, date: action.publicDate, text: action.textEntry}]
      }
    case CREATE_LOCAL_STORAGE:
      let localState = [...state.allEntries]
      localStorage.setItem('allEntries', JSON.stringify(localState))
      return state
    case GET_PREV_ENTRIES:
      return {
        ...state,
        callCountPrev: state.callCountPrev + 1,
        posFirstElem: state.callCountPrev*4
      }
    default:
      return state
  }
}

export const cleareCurrentEntryAC = () => ({type: CLEARE_CURRENT_ENTRY})
export const changeCurrentEntryAC = (newValue) => ({type: CHANGE_CURRENT_ENTRY, newValue})
export const saveNewEntryAC = (textEntry, publicDate) => ({type: SAVE_NEW_ENTRY, textEntry, publicDate})
export const createLocalStorageAC = () => ({type: CREATE_LOCAL_STORAGE})
export const getPrevEntriesAC = () => ({type: GET_PREV_ENTRIES})

export default NewEntriesReduser