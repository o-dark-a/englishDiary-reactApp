import { connect } from 'react-redux'
import EntriesArchive from './EntriesArchive'
import { resetStartElemAC, setNewStartPosAC, setNewValueAC, createLocalStorageAC, selectEntryAC, resetDeletedEntryIdAC } from '../../redusers/NewEntriesReduser'

const mapStateToProps = (state) => {
  return {
    allEntries: state.newEntries.allEntries,
    startElemIdx: state.newEntries.startElemIdx,
    changeFactor: state.newEntries.changeFactor,
    selectedEntryId: state.newEntries.selectedEntryId
  }
}
const mapDispatchToProps = (dispatch) => ({
  setNewStartPos(newPos, factor) {
    dispatch(setNewStartPosAC(newPos, factor))
  },
  resetStartElem() {
    dispatch(resetStartElemAC())
  },
  entryEditing(newValue, id) {
    dispatch(setNewValueAC(newValue, id))
    dispatch(createLocalStorageAC())
  },
  selectEntry(id) {
    dispatch(selectEntryAC(id))
  },
  resetDeletedEntryId() {
    dispatch(resetDeletedEntryIdAC())
  }
})

const EntriesArchiveContainer = connect(mapStateToProps, mapDispatchToProps)(EntriesArchive)

export default EntriesArchiveContainer