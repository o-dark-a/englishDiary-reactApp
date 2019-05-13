import { connect } from 'react-redux'
import NewEntries from './NewEntries'
import { cleareCurrentEntryAC, changeCurrentEntryAC, saveNewEntryAC, createLocalStorageAC, deleteEntryAC } from '../../redusers/NewEntriesReduser'

const mapStateToProps = (state) => {
  return {
    value: state.newEntries.currentEntry,
    selectedEntryId: state.newEntries.selectedEntryId
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
  },
  deleteEntry(e) {
    dispatch(deleteEntryAC())
    dispatch(createLocalStorageAC())
  }
})

const NewEntriesContainer = connect(mapStateToProps, mapDispatchToProps)(NewEntries)

export default NewEntriesContainer