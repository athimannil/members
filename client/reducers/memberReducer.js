export default function memberReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_MEMBER':
      return [...state,
        Object.assign({}. action.member)
      ];

    default:
      return state;

  }
}
