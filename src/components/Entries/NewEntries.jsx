import React from 'react'
import style from './enries.module.sass'
import Navbar from '../Navbar/Navbar'
import { Route } from 'react-router-dom'
import EntriesArchiveContainer from '../entriesArchive/EntriesArchiveContainer'
import LexiconContainer from '../Lexicon/LexiconContainer'

const newEntries = (props) => {

  let currentDate = new Date()
  let date = {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear()
  }

  const saveValue = (e) => {
    let currentVal = e.currentTarget.value
    props.setNewValueOfEntry(currentVal)
  }

  const saveEntry = () => {
    let dateSave = new Date()
    let date = {
      day: dateSave.getDate(),
      month: dateSave.getMonth() + 1,
      year: dateSave.getFullYear()
    }
    props.saveNewEntry(props.value, `${date.day}/${date.month}/${date.year}`)
  }

  const NewEntryComponent = () => {return(
    <span>
      <div className={style.currentDate}>{`${date.day}/${date.month}/${date.year}`}</div>
      <h3 className={style.h3}>Your new entry</h3>
      <textarea className={style.textarea} value={props.value} onChange={saveValue} name="entry" maxLength="1400" placeholder='How was your day?'></textarea>
    </span>
  )}

  return (
    <div className={style.mainFlexCont}>
      <Navbar clearTextarea={props.clearTextarea}
              saveEntry={saveEntry}
              deleteEntry={props.deleteEntry}
              selectedEntryId={props.selectedEntryId}
      />
      <div className={style.wrapper}>
        <div className={style.topLine}></div>
        <Route path="/diary/new-entry" render={NewEntryComponent} />
        <Route path="/diary/entries-archive" render={() => ( <EntriesArchiveContainer /> )} />
        <Route path="/diary/lexicon" render={() => ( <LexiconContainer /> )} />
      </div>
    </div>
  )
}

export default newEntries