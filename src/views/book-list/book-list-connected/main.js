import React, { useCallback, useEffect, useMemo } from 'react';
import BookListAsync from '../book-list-async';
import { ACTIONS_CREATOR } from '../../../store/actions';
import { getListFromBookListSelector } from '../../../store/selectors';
import { connect } from 'react-redux';

export const BookListBeConnected = ({
  list,
  books,
  error,
  loading,
  saveBooks,
  addItemsToShoppingCart,
}) => {
  const haveToSave = useMemo(() => !error || !loading, [error, loading]);
  const saveList = useCallback(() => {
    saveBooks(list);
  }, [list, saveBooks]);
  useEffect(() => {
    if (haveToSave) {
      saveList();
    }
  }, [saveList, haveToSave]);
  return (
    <BookListAsync
      error={error}
      list={books}
      isFetching={loading}
      addItemsToShoppingCart={addItemsToShoppingCart}
    />
  );
};

const mapStateToProps = state => ({
  books: getListFromBookListSelector(state),
});

const mapDispatchToProps = dispatch => ({
  saveBooks: books => dispatch(ACTIONS_CREATOR.bookListFetchDataSuccess(books)),
  addItemsToShoppingCart: item => dispatch(ACTIONS_CREATOR.addItemsToShoppingCart(item)),
});

export const BookListConnected = connect(mapStateToProps, mapDispatchToProps)(BookListBeConnected);
