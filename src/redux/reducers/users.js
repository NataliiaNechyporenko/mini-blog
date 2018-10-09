const initialState = [];

export default function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_USERS_SUCCESS':
      return payload;
    default:
      return state;
    }
  };
  