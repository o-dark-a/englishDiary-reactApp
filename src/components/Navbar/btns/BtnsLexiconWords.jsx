import React from 'react'
import style from '../../Lexicon/words/words.module.sass'

const BtnsLexiconWords = (props) => {

  const changeWordHandler = (e) => {
    props.changeCurrentWord(e.currentTarget.value)
  }

  const changeTranslateHandler = (e) => {
    props.changeCurrentTranslate(e.currentTarget.value)
  }

  const addNewWordHandler = () => {
    if (props.word !== '' && props.wordTranslate !== '') {
      props.addNewWord(props.word, props.wordTranslate)
    }
  }

  const deleteWord = () => {
    if(props.hookedWordId) {
      props.deleteWord(props.hookedWordId)
    }
  }

  return (
    <div className={`${style.form}`}>
      <input type="text" maxLength='22' value={props.word} onChange={changeWordHandler} name="newWord" placeholder="Enter new word"/>
      <input type="text" maxLength='22' value={props.wordTranslate} onChange={changeTranslateHandler} name="newWordTranslation" placeholder="Translation of the word"/>
      <button disabled={!props.hookedWordId} onClick={deleteWord} className={`button btnClear ${style.btnDeleteWord} ${!props.hookedWordId ? style.btnAddWordDisabled : null}`}>Delete word</button>
      <button onClick={addNewWordHandler} className={`button btnWhite ${style.btnAddWord}`}>Add word</button>
    </div>
  )
}

export default BtnsLexiconWords