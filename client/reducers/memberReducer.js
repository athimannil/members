import * as types from './../actions/actionTypes';

export default function memberReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_MEMBERS_SUCCESS:
      return action.members;
    case types.CREATE_MEMBER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.member)
      ];
    case types.UPDATE_MEMBER_SUCCESS:
      return [
        ...state.filter(member => member.id !== action.member.id),
        Object.assign({}, action.member)
      ];

    default:
      return state;
  }
}
