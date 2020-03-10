import { FETCH_ITEM } from '../constants'
import { getItemBySlug } from '../queries';

// can change to send a request item to store;
// then we can cerntralize fetching in sagas.
// so then have a saga that takes the latest fetch item and adds it to the store on it's own.
export const fetchItemBySlug = (dispatch) => (slug) => {
  return getItemBySlug(slug).then(res => res.json().then(json => {
    console.log(json);
    
    dispatch({
    type: FETCH_ITEM,
    name: json.data.itemOne.name,
    image: json.data.itemOne.image,
    properties: json.data.itemOne.properties
    })}
  )).catch(err => console.log(err));
}