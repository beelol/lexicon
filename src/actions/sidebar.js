import { SIDEBAR_SET_ACTIVE_ACTION } from '../constants';

export const closeSidebar = dispatch => () => dispatch({
  type: SIDEBAR_SET_ACTIVE_ACTION,
  open: false
});

export const openSidebar = dispatch => () => dispatch({
  type: SIDEBAR_SET_ACTIVE_ACTION,
  open: true
});
