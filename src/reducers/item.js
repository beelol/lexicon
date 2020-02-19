
import { FETCH_ITEM } from "../constants";

export default (state = {
  name: "",
  image: "",
  properties: []
}, action) => {
  switch (action.type) {
    case FETCH_ITEM:
      return {
        ...state,
        name: action.name,
        image: action.image,
        properties: action.properties
      }
    default:
      return state;
  }
};