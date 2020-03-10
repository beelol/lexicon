import { combineReducers } from 'redux'
import counter from './counter'
import sidebar from './sidebar'
import item from './item'
import items from './items'

export default combineReducers({
  counter,
  sidebar,
  item,
  items
});
