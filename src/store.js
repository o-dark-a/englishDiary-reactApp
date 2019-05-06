import { combineReducers, createStore } from 'redux'
import loginReduser from './redusers/loginReduser'
import NewEntriesReduser from './redusers/NewEntriesReduser'

let redusers = combineReducers({
  login: loginReduser,
  newEntries: NewEntriesReduser
})

let store = createStore(redusers)

window.store = store

export default store