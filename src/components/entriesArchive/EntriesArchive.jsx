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

  const GetEntriesBlock = ({pos}) => {

    if(allEntries) {
      let entriesBlock = []
      let idx = (pos === 1) ? allEntries.length - 1 : ((allEntries.length - 1) - pos)

      for (let i = 0; i < 4; i++) {
        entriesBlock[i] = allEntries[idx - i]
      }

      return entriesBlock

    } else {
      return <div><h3>No entry</h3></div>
    }

  }

  return (
    <div>
      <div className={style.topLine}></div>
      <div className={style.wrapp}>
        <GetEntriesBlock pos={props.posFirstElem}/>
      </div>
      <div className={style.buttonsBlock}>
        <button className={`${style.prevBtn}`} onClick={props.getPrevEntries}>Prev</button>
        <span> / </span>
        <button className={`${style.nextBtn}`}>Next</button>
      </div>
    </div>
  )
}

export default EntriesArchive