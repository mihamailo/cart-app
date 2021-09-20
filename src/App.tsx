import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import Cart from './pages/cart';
import './styles/global.scss';


function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/">
            <h1>We are home</h1>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
