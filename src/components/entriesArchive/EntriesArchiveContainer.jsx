import { connect } from 'react-redux'
import EntriesArchive from './EntriesArchive'
import { getPrevEntriesAC } from '../../redusers/NewEntriesReduser'

const mapStateToProps = (state) => {
  return {
    allEntries: state.newEntries.allEntries,
    callCountPrev: state.newEntries.callCountPrev,
    posFirstElem: state.newEntries.posFirstElem
  }
}
const mapDispatchToProps = (dispatch) => ({
  getPrevEntries() {
    dispatch(getPrevEntriesAC())
  }
})

const EntriesArchiveContainer = connect(mapStateToProps, mapDispatchToProps)(EntriesArchive)

export default EntriesArchiveContainer