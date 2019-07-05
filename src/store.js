import { combineReducers, createStore } from 'redux'
import loginReduser from './redusers/loginReduser'
import NewEntriesReduser from './redusers/NewEntriesReduser'
import LexiconReduser from './redusers/LexiconReduser'
import WordsReduser from './redusers/WordsReduser'
import PhrasesReduser from './redusers/PhrasesReduser'

let redusers = combineReducers({
  login: loginReduser,
  newEntries: NewEntriesReduser,
  words: WordsReduser,
  phrases: PhrasesReduser,
  lexicon: LexiconReduser
})

let store = createStore(redusers)

window.store = store

export default store