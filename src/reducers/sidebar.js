import { SIDEBAR_SET_ACTIVE_ACTION } from '../constants';

export default (state = {
  open: true
}, action) => {
  switch (action.type) {
    case SIDEBAR_SET_ACTIVE_ACTION:
      return { 
        ...state,
        open: action.open
      }
    default:
      return state;
  }
};