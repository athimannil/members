import * as types from './../actions/actionTypes';

export default function memberReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_MEMBERS_SUCCESS:
      return action.members;
    default:
      return state;
  }
}
