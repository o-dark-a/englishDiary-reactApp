import React from 'react'
import style from './BtnNewEntries.module.sass'

const BtnsEntriesArchive = (props) => {
  return (
    <div className={style.wrapper}>
      <button className='button btnClear' onClick={props.clearTextarea}>Delete entry</button>
      <button className='button btnChahge' onClick={props.saveEntry}>Change entry</button>
    </div>
  )
}

export default BtnsEntriesArchive