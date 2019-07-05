import React from 'react'
import style from './words.module.sass'
import { Route } from 'react-router-dom'
import BtnsLexiconWords from '../../Navbar/btns/BtnsLexiconWords'
import BtnsLexiconPhrases from '../../Navbar/btns/BtnsLexiconPhrases'

const Words = (props) => {

  let wordsBlock = [],
      viewWordsBlock = [],
      startIndex = props.startIndex


  function getRandomRolor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 10)];
    }
    return color;
}

  const showTranslation = (e) => {
    e.currentTarget.children[0].classList.toggle(`${style.active}`)
  }

  const wordHooking = (e) => {
    props.wordHooking(e.currentTarget.parentElement.id)
  }

  const createWordsBlock = () => {
    props.createLocalStorage()
    wordsBlock = props.allWords.map((arr, idx) => {
      return (
        <div id={idx} key={idx} className={`${style.oneWord}`}>
          <h5
            onDoubleClick={e => {wordHooking(e)}}
            onClick={e => {showTranslation(e)}}
            style={{backgroundColor: getRandomRolor()}}
            >
            {arr[0]}
            <span style={{color: getRandomRolor()}}>{arr[1]}</span>
          </h5>
        </div>
      )
    })
  }

  const displayWords = (startIndex) => {
    createWordsBlock()
    
    let idx = startIndex,
        limitIdx = idx + 6,
        reverseWordsBlock = wordsBlock.reverse()

    for (let i = idx; i < limitIdx; i++) {
      viewWordsBlock[i] = reverseWordsBlock[i]
    }

    return viewWordsBlock

  }

  displayWords(startIndex)

  return (    
    <div className={`${style.mainWrapp}`}>
      {viewWordsBlock}
      <Route path="/diary/lexicon/words"
        render={() => {
          return <BtnsLexiconWords
                    allWords={props.allWords}
                    word={props.word}
                    wordTranslate={props.wordTranslate}
                    changeCurrentWord={props.changeCurrentWord}
                    changeCurrentTranslate={props.changeCurrentTranslate}
                    addNewWord={props.addNewWord}
                    deleteWord={props.deleteWord}
                    hookedWordId={props.hookedWordId}
                 />
        }}deleteEntry
      />
      <Route path="/diary/lexicon/phrases"
        render={() => {
          return <BtnsLexiconPhrases />
        }}deleteEntry
      />
    </div>
  )
}

export default Words