import React from 'react'
import style from './entriesArchive.module.sass'

const EntriesArchive = (props) => {

  const getAllEntries = () => {

    if(props.allEntries.length === 0) {
      return false
    }

    let allEntries = props.allEntries.map((entry, idx) => {
      return (
        <div id={idx} key={idx} className={`${style.wrappBlock} ${style.closed}`}>
          <h3>Created on: {entry.date}</h3>
          <p>{entry.text}</p><span> . . .</span>
          <div className={`${style.toggleView}`}></div>
        </div>
      )
    })

    return allEntries
  
  }

  let allEntries = getAllEntries()

  let entriesBlock = []

  const GetEntriesBlock = ({startIdx, resetVal, factor}) => {

    if(allEntries) {
      let idx

      (!startIdx)
        ? idx = allEntries.length - 1
        : idx = startIdx - factor

      if (idx > allEntries.length - 1) {
        resetVal()
        idx = allEntries.length - 1
      }

      if (idx <= 0) {
        idx = ((allEntries.length - 1) % 4) ? ((allEntries.length - 1) % 4) : 3
      }

      for (let i = 0; i < 4; i++) {
        entriesBlock[i] = allEntries[idx - i]
      }

      return entriesBlock

    } else {
      return <div><h3>No entry</h3></div>
    }

  }

  const setStartElem = (factor) => {
    let newStartIdx = entriesBlock[0].props.id
    props.setNewStartPos(newStartIdx, factor)
  }

  return (
    <div>
      <div className={style.topLine}></div>
      <div className={style.wrapp}>
        <GetEntriesBlock
          startIdx={props.startElemIdx}
          resetVal={props.resetStartElem}
          factor={props.changeFactor}
        />
      </div>
      <div className={style.buttonsBlock}>
        <button className={`${style.prevBtn}`} onClick={()=>{setStartElem(1)}}>Prev</button>
        <span> / </span>
        <button className={`${style.nextBtn}`} onClick={()=>{setStartElem(-1)}}>Next</button>
      </div>
    </div>
  )
}

export default EntriesArchive