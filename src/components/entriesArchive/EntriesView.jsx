import React from 'react'

const EntriesView = ({startIdx, factor, entries, entriesBlock, resetStartElem}) => {
  
  if(entries.length !== 0) {
    let idx,
        lastElemIdxOfCollection = entries.length - 1;

    (!startIdx) ? idx = lastElemIdxOfCollection : idx = startIdx - factor

    if (idx > lastElemIdxOfCollection) {
      resetStartElem()
      idx = lastElemIdxOfCollection
    }

    if (idx <= 0) { idx = ((lastElemIdxOfCollection) % 4) ? ((lastElemIdxOfCollection) % 4) : 0 }

    for (let i = 0; i < 4; i++) {
      let elem = entries[idx - i]
      entriesBlock[i] = elem
    }

    return entriesBlock

  } else {
    return <div><h3>No entry</h3></div>
  }

}

export default EntriesView

