import { ACTIONS } from '../../actions';

const INITIAL_STATE = { list: null };

export const bookListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.BOOK_LIST_FETCH_DATA_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
