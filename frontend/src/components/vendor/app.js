import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Addproduct from './addproduct'
import FoodMenu from './foodmenu'
import ViewOrders from "./viewAllOrders"
import VendorNavBar from '../vendor/navbar'
import LogOut from '../login/logout'
import Profile from './profile'
import EditProfile from './editprofile';
import ActionDispatch from './actiondispatch'
function VendorPage() {
  return (
    <Router>
      <div className="container">
        <VendorNavBar />
        <br />
        <Route path="/home" component={FoodMenu} />
        <Route path="/addproduct" component={Addproduct} />
        <Route path="/orders" component={ViewOrders} />
        <Route path="/addproduct" component={Addproduct} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={LogOut} />
        <Route path="/action" component={ActionDispatch} />
        <Route path="/editprofile" component={EditProfile}/>
      </div>
    </Router>
  );
}

export default VendorPage;
