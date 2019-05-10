import { connect } from 'react-redux'
import EntriesArchive from './EntriesArchive'
import { resetStartElemAC, setNewStartPosAC, setNewValueAC, createLocalStorageAC } from '../../redusers/NewEntriesReduser'

const mapStateToProps = (state) => {
  return {
    allEntries: state.newEntries.allEntries,
    startElemIdx: state.newEntries.startElemIdx,
    changeFactor: state.newEntries.changeFactor,
    viewMode: state.newEntries.viewMode,
    editEntryId: state.newEntries.editEntryId,
    rolledUpItem: state.newEntries.rolledUpItem
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
  }
})

const EntriesArchiveContainer = connect(mapStateToProps, mapDispatchToProps)(EntriesArchive)

export default EntriesArchiveContainer