import React, { useCallback, useEffect, useMemo } from 'react';
import BookListAsync from './book-list-async';
import { ACTIONS_CREATOR } from '../../store/actions';
import { getListFromBookListSelector } from '../../store/selectors';
import { connect } from 'react-redux';

import './main.scss';

export const BookListBeConnected = ({ list, books, error, loading, saveBooks }) => {
  const haveToSave = useMemo(() => !error || !loading, [error, loading]);
  const saveList = useCallback(() => {
    saveBooks(list);
  }, [list, saveBooks]);
  useEffect(() => {
    if (haveToSave) {
      saveList();
    }
  }, [saveList, haveToSave]);
  return <BookListAsync error={error} list={books} isFetching={loading} />;
};

const mapStateToProps = state => ({
  books: getListFromBookListSelector(state),
});

const mapDispatchToProps = dispatch => ({
  saveBooks: books => dispatch(ACTIONS_CREATOR.bookListFetchDataSuccess(books)),
});

export const BookList = connect(mapStateToProps, mapDispatchToProps)(BookListBeConnected);
