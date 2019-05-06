import { connect } from 'react-redux'
import EntriesArchive from './EntriesArchive'
import { resetStartElemAC, setNewStartPosAC } from '../../redusers/NewEntriesReduser';

const mapStateToProps = (state) => {
  return {
    allEntries: state.newEntries.allEntries,
    startElemIdx: state.newEntries.startElemIdx,
    changeFactor: state.newEntries.changeFactor
  }
}
const mapDispatchToProps = (dispatch) => ({
  setNewStartPos(newPos, factor) {
    dispatch(setNewStartPosAC(newPos, factor))
  },
  resetStartElem() {
    dispatch(resetStartElemAC())
  }
})

const EntriesArchiveContainer = connect(mapStateToProps, mapDispatchToProps)(EntriesArchive)

export default EntriesArchiveContainer