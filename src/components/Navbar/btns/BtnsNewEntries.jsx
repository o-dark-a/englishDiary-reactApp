import React from 'react'
import style from './BtnNewEntries.module.sass'

const BtnsEntries = (props) => {
  return (
    <div className={style.wrapper}>
      <button className='button btnClear' onClick={props.clearTextarea}>Clear entry</button>
      <button className='button btnWhite' onClick={props.saveEntry}>Save entry</button>
    </div>
  )
}

export default BtnsEntries