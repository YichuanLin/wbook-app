export const ACTIONS = {
  BOOK_LIST_FETCH_DATA_SUCCESS: 'BOOK_LIST/FETCH_DATA_SUCCESS',
};

const bookListFetchDataSuccess = data => ({
  type: ACTIONS.BOOK_LIST_FETCH_DATA_SUCCESS,
  payload: data,
});

export const ACTIONS_CREATOR = {
  bookListFetchDataSuccess,
};
