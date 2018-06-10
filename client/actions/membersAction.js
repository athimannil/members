import * as types from './actionTypes';
import memberApi from './../api/mockMemberApi';
import {beginAjaxCall} from './ajaxStatusAction';

export function loadMembersSuccess(members) {
  return { type: types.LOAD_MEMBERS_SUCCESS, members};
}

export function createMemberSuccess(member) {
  return { type: types.CREATE_MEMBER_SUCCESS, member};
}
export function updateMemberSuccess(member) {
  return { type: types.UPDATE_MEMBER_SUCCESS, member};
}

/*
TODO apply nodejs API
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
*/

export function loadMembers() {
  return function (dispatch) {
    dispatch(beginAjaxCall);
    return memberApi.getAllMembers().then(members => {
        dispatch(loadMembersSuccess(members))
      }).catch(error => {
        throw(error);
      });
  };
}

export function saveMember(member) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall);
    return memberApi.saveMember(member).then(saveMember => {
      member.id ? dispatch(updateMemberSuccess(saveMember)) :
        dispatch(createMemberSuccess(saveMember));
    }).catch(error => {
      throw(error);
    });
  };
}
