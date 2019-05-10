import React from 'react'
import style from './entriesArchive.module.sass'

class EntriesArchive extends React.Component {
  constructor (props) {
    super(props)
    this.entriesBlock = []
    this.state = {
      entriesCollection: false,
      readOnly: true
    }
  }

  componentDidMount() {
    this.entriesCollectionForming()
  }

  entriesCollectionForming() {
    this.setState({
      entriesCollection: this.props.allEntries.map((entry, idx) => {
        return (
          <div id={idx} key={idx} className={`${style.wrappBlock} ${style.closed}`}>
            <h3>Created on: {entry.date}</h3>
            <textarea value={entry.text} onChange={this.changeEntry} readOnly={this.state.readOnly}></textarea>
            <span> . . .</span>
            <div className={`${style.toggleView}`} onClick={this.rollStateChange}></div>
          </div>
        )
      })
    })
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

  EntriesView = (startIdx, factor) => {

    if(this.state.entriesCollection && this.state.entriesCollection.length !== 0) {
      let idx,
          lastElemIdxOfCollection = this.state.entriesCollection.length - 1;

      (!startIdx) ? idx = lastElemIdxOfCollection : idx = startIdx - factor

      if (idx > lastElemIdxOfCollection) {
        this.props.resetStartElem()
        idx = lastElemIdxOfCollection
      }

      if (idx <= 0) { idx = ((lastElemIdxOfCollection) % 4) ? ((lastElemIdxOfCollection) % 4) : 0 }

      for (let i = 0; i < 4; i++) {
        let elem = this.state.entriesCollection[idx - i]
        this.entriesBlock[i] = elem
      }

      return this.entriesBlock

    } else {
      return <div><h3>No entry</h3></div>
    }

  }

  setStartElem = (factor) => {
    let newStartIdx = +(this.entriesBlock[0].props.id)
    this.props.setNewStartPos(newStartIdx, factor)
  }
  

  render () {
    return (
      <div className={style.mainWrapp}>
        <div className={style.wrappEntriesBlock}>
          {this.EntriesView(this.props.startElemIdx, this.props.changeFactor)}
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