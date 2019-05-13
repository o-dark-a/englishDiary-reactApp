import React from 'react'
import style from './BtnNewEntries.module.sass'

const BtnsEntriesArchive = (props) => {
  return (
    <div className={style.wrapper}>
      <button disabled={(!props.selectedEntryId) ? true : false}
              className={`button btnClear ${(!props.selectedEntryId) ? style.btnDisabled : null}`}
              onClick={props.deleteEntry}>
              Delete entry
      </button>
    </div>
  )
}

export default BtnsEntriesArchive