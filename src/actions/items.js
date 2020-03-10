import { FETCH_ITEMS } from '../constants';
import { getRecentItems } from '../queries';

// can change to send a request item to store;
// then we can cerntralize fetching in sagas.
// so then have a saga that takes the latest fetch item and adds it to the store on it's own.
export const fetchRecentItems = (dispatch) => (slug) => {
  return getRecentItems().then(res => res.json().then(json => dispatch({
    type: FETCH_ITEMS,
    items: json.data.itemMany
    })
  )).catch(err => console.log(err));
}