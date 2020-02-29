import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import MainRoutes from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavLink exact to={'/'}>
            Home
          </NavLink>
          <NavLink exact to={'/checkout'}>
            Checkout
          </NavLink>
          <div className="main-router-wrapper">
            <MainRoutes />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
