import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Dashboard/Login/Login/Login';
import { createContext, useState } from 'react';
import Products from './components/Home/Products/Products';
import Purchase from './components/Home/Purchase/Purchase';
import PrivateRoute from './components/Dashboard/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
import AllOrders from './components/Dashboard/AllOrders/AllOrders';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';

export const ContextUser = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ContextUser.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
 
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/dashboard/AddReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/dashboard/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/dashboard/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/dashboard/manageProducts">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="/dashboard/manageOrders">
            <AllOrders></AllOrders>
          </Route>
          <Route path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
        <Route exact path="*">
            
          </Route>

      </Router>
    </ContextUser.Provider>
  );
}

export default App;
