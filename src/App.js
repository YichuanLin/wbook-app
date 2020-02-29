import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import BookList from './views/book-list';
import WithList from './components/with-list';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <WithList>
        {(list, loading, error) => <BookList list={list} loading={loading} error={error} />}
      </WithList>
    </Provider>
  );
}

export default App;
