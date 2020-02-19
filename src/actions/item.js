import { FETCH_ITEM } from '../constants'
import { getItemBySlug } from '../queries';

export const fetchItemBySlug = (dispatch) => (slug) => {
  return getItemBySlug(slug).then(res => res.json().then(json => dispatch({
    type: FETCH_ITEM,
    name: json.data.itemOne.name,
    image: json.data.itemOne.image,
    properties: json.data.itemOne.properties
    })
  )).catch(err => console.log(err));
}