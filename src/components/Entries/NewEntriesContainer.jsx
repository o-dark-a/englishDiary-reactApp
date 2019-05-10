import { connect } from 'react-redux'
import NewEntries from './NewEntries'
import { cleareCurrentEntryAC, changeCurrentEntryAC, saveNewEntryAC, createLocalStorageAC } from '../../redusers/NewEntriesReduser'

const mapStateToProps = (state) => {
  return {
    value: state.newEntries.currentEntry
  }
}
const mapDispatchToProps = (dispatch) => ({
  clearTextarea() {
    dispatch(cleareCurrentEntryAC())
  },
  setNewValueOfEntry(newValue) {
    dispatch(changeCurrentEntryAC(newValue))
  },
  saveNewEntry(textEntry, publicDate) {
    dispatch(saveNewEntryAC(textEntry, publicDate))
    dispatch(createLocalStorageAC())
  },
  updateLocalStorage() {
    dispatch(createLocalStorageAC())
  }
})

const NewEntriesContainer = connect(mapStateToProps, mapDispatchToProps)(NewEntries)

export default NewEntriesContainer