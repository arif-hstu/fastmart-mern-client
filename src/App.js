import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import TrackOrder from './Components/TrackOrder/TrackOrder';
import CheckOut from './Components/CheckOut/CheckOut';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import ProcessInvoice from './Components/ProcessInvoice/ProcessInvoice';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';


export const CartContext = createContext();
export const UserContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({
    displayName: 'Anonymous'
  })

  return (
    <div className="App">
      <CartContext.Provider value={[cart, setCart]}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <PrivateRoute exact path='/admin/:adminDestination'>
                <Admin />
              </PrivateRoute>
              <PrivateRoute exact path='/checkout'>
                <CheckOut />
              </PrivateRoute>
              <PrivateRoute exact path='/placeOrder'>
                <PlaceOrder />
              </PrivateRoute>
              <Route exact path='/login'>
                <Login />
              </Route>
              <PrivateRoute exactp path='/processInvoice'>
                <ProcessInvoice />
              </PrivateRoute>
              <PrivateRoute exactp path='/trackOrder'>
                <TrackOrder />
              </PrivateRoute>
            </Switch>
          </Router>
        </UserContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
