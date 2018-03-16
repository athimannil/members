import * as types from './actionTypes';

export function loadMembersSuccess(members) {
  return { type: types.LOAD_MEMBERS_SUCCESS, members};
}

export function loadMembers() {
  return function (dispatch) {
    return fetch('http://localhost:3000/api/')
      .then((response) => response.json())
      .then(responseJson => {
        dispatch(loadMembersSuccess(responseJson))
      }).catch(error => {
        throw(error);
      });
  };
}
