import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import style from './lexicon.module.sass'
import WordsContainer from './words/WordsContainer'
import PhrasesContainer from './phrases/PhrasesContainer'

const Lexicon = (props) => {

  const viewPrevWords = () => {
    props.viewPrevWords(props.startIndex)
  }

  const viewNextWords = () => {
    props.viewNextWords(props.startIndex)
  }

  return (    
    <div className={`${style.mainWrapp}`}>
      <div className={`${style.topLine}`}>
        <h3>Add a new word or phrase</h3>
        <div className={`${style.switchBtns}`}>
          <button className={`${style.btnWords}`}>
            <NavLink to="/diary/lexicon/words" activeClassName={style.active}>Words</NavLink>
          </button>
          <button className={`${style.btnPhrases}`}>
            <NavLink to="/diary/lexicon/phrases" activeClassName={style.active}>Phrases</NavLink>
          </button>
        </div>
      </div>
      <div className={`${style.contentWrapp}`}>
        <Route path='/diary/lexicon/words' component={WordsContainer}/>
        <Route path='/diary/lexicon/phrases' component={PhrasesContainer}/>
      </div>
      <div className={`${style.btnNavigation}`}>
        <button onClick={viewPrevWords} disabled={(+props.startIndex >= props.allWords.length-6) ? true : false}>Prev</button>
        <span> / </span>
        <button onClick={viewNextWords} disabled={(+props.startIndex < 6) ? true : false}>Next</button>
      </div>
    </div>
  )
}

export default Lexicon