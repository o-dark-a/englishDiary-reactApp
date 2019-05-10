const CLEARE_CURRENT_ENTRY = 'CLEARE_CURRENT_ENTRY'
const CHANGE_CURRENT_ENTRY = 'CHANGE_CURRENT_ENTRY'
const SAVE_NEW_ENTRY = 'SAVE_NEW_ENTRY'
const CREATE_LOCAL_STORAGE = 'CREATE_LOCAL_STORAGE'
const SET_NEW_START_POS = 'SET_NEW_START_POS'
const RESET_START_ELEM = 'RESET_START_ELEM'
const SET_NEW_ENTRY_VALUE = 'SET_NEW_ENTRY_VALUE'

let initialState = {
  currentEntry: '',
  allEntries: (JSON.parse(localStorage.getItem('allEntries')) === null) ? [] : JSON.parse(localStorage.getItem('allEntries')),
  startElemIdx: 0,
  changeFactor: 4,
  viewMode: 'view'
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
    case SET_NEW_START_POS:
      return {
        ...state,
        startElemIdx: action.newPos,
        changeFactor: action.factor*4,
      }
    case RESET_START_ELEM:
      return {
        ...state,
        startElemIdx: 0
      }
    case SET_NEW_ENTRY_VALUE:
      state.allEntries[action.id].text = action.val
      return {
        ...state,
        viewMode: 'edit',
        allEntries: [...state.allEntries]
      }
    default:
      return state
  }
}

export const cleareCurrentEntryAC = () => ({type: CLEARE_CURRENT_ENTRY})
export const changeCurrentEntryAC = (newValue) => ({type: CHANGE_CURRENT_ENTRY, newValue})
export const saveNewEntryAC = (textEntry, publicDate) => ({type: SAVE_NEW_ENTRY, textEntry, publicDate})
export const createLocalStorageAC = () => ({type: CREATE_LOCAL_STORAGE})
export const setNewStartPosAC = (newPos, factor) => ({type: SET_NEW_START_POS, newPos, factor})
export const resetStartElemAC = () => ({type: RESET_START_ELEM})
export const setNewValueAC = (val, id) => ({type: SET_NEW_ENTRY_VALUE, val, id})

export default NewEntriesReduser