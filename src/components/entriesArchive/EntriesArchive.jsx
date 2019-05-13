import React from 'react'
import style from './entriesArchive.module.sass'
import EntriesView from './EntriesView'

class EntriesArchive extends React.Component {
  constructor (props) {
    super(props)
    this.entriesBlock = []
    this.state = {
      entriesCollection: [],
      readOnly: true
    }
  }

  componentDidMount() {
    this.entriesCollectionForming()
  }

  entriesCollectionForming() {
    if (this.props.allEntries.length !== 0) {
      this.setState({
        entriesCollection: this.props.allEntries.map((entry, idx) => {
          return (
            <div id={idx} key={idx} className={`${style.wrappBlock} ${style.closed}`} onClick={(e) => {this.selectEntry(idx, e)}}>
              <h3>Created on: {entry.date}</h3>
              <textarea value={entry.text} onChange={this.changeEntry} readOnly={this.state.readOnly}></textarea>
              <span>. . .</span>
              <div className={`${style.toggleView}`} onClick={this.rollStateChange}></div>
            </div>
          )
        })
      })
    }
    
  }

  selectEntry = (id, e) => {

    this.props.selectEntry(id)

    let ollectionHtmlElems = e.currentTarget.parentElement.children

    for (let i = 0; i < ollectionHtmlElems.length; i++) {
      if (+ollectionHtmlElems[i].id === id && ollectionHtmlElems[i].classList.contains(`${style.closed}`)) {
        ollectionHtmlElems[i].classList.toggle(`${style.selected}`)
      } else {
        ollectionHtmlElems[i].classList.remove(`${style.selected}`)
      }
    }
    
    
  }

  changeEntry = (e) => {
    let newVal = e.currentTarget.value
    let id = e.currentTarget.parentElement.id
    this.props.entryEditing(newVal, id)
    this.entriesCollectionForming()
  }

  rollStateChange = (e) => {
    e.currentTarget.parentElement.classList.toggle(`${style.front}`)
    e.currentTarget.parentElement.classList.toggle(`${style.closed}`)
    let itemsCollection = e.currentTarget.parentElement.parentElement.children

    for(let i = 0; i < itemsCollection.length; i++) {
      if (!itemsCollection[i].classList.contains(`${style.front}`)) {
        itemsCollection[i].classList.toggle(`${style.back}`)
        itemsCollection[i].children[1].readOnly = this.state.readOnly
      } else {
        itemsCollection[i].children[1].readOnly = !this.state.readOnly
       continue
      }
    }

  }

  setStartElem = (factor) => {
    let newStartIdx = +(this.entriesBlock[0].props.id)
    this.props.setNewStartPos(newStartIdx, factor)
  }

  notifyAboutDeletion = (reset) => {
    setTimeout(() => {
      reset()
      this.entriesCollectionForming()
    }, 2000)
    return <h4 className={`${style.deleted}`}>Entry deleted</h4> 
  }

  render () {
    return (
      <div className={style.mainWrapp}>
        { (this.props.selectedEntryId === 'deleted')
            ? this.notifyAboutDeletion(this.props.resetDeletedEntryId)
            : null
        }
        <div className={style.wrappEntriesBlock}>
        <EntriesView startIdx={this.props.startElemIdx}
                     factor={this.props.changeFactor}
                     entries={this.state.entriesCollection}
                     entriesBlock={this.entriesBlock}
                     resetStartElem={this.props.resetStartElem}
        />
        </div>
        {(this.state.entriesCollection)
          ? <div className={style.buttonsBlock}>
              <button className={`${style.prevBtn}`} onClick={()=>{this.setStartElem(1)}}>Prev</button>
              <span> / </span>
              <button className={`${style.nextBtn}`} onClick={()=>{this.setStartElem(-1)}}>Next</button>
            </div>
          : <div></div>
        }
        
      </div>
    )
  }


}

export default EntriesArchive