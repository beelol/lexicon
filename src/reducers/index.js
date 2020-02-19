import { combineReducers } from 'redux'
import counter from './counter'
import sidebar from './sidebar'
import item from './item'

export default combineReducers({
  counter,
  sidebar,
  item
})
