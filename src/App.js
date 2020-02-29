import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import MainRoutes from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <nav className="navbar">
                <div className="navbar--links">
                  <IconButton>
                    <NavLink className="navbar--links--item" exact to={'/'}>
                      Home
                    </NavLink>
                  </IconButton>
                  <IconButton>
                    <NavLink className="navbar--links--item" exact to={'/checkout'}>
                      Checkout
                    </NavLink>
                  </IconButton>
                </div>
                <ShoppingCartIcon />
              </nav>
            </Toolbar>
          </AppBar>
          <div className="main-router-wrapper">
            <MainRoutes />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
