import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Products from "./viewAllProducts"
import CustomerNavBar from './navbar'
import LogOut from '../login/logout'
import MakeOrder from './makeorder'
import ViewOrders from './orders'
import Profile from './profile'
import EditProfile from './editprofile';

function CustomerPage() {
  const [productID, setProductID] = useState("")
  return (
    <Router>
      <div className="container">
        <CustomerNavBar />
        <br />      
          <br />
    
        <Route path="/home" component={() => { return <Products productID={productID} setProductID={setProductID} /> }} />
        <Route path="/makeOrder" component={() => { return <MakeOrder productID={productID} setProductID={setProductID} /> }} />
        <Route path="/orders" component={ViewOrders} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={LogOut} />
        <Route path="/editprofile" component={EditProfile} />
      </div>
    </Router>
  );
}

export default CustomerPage;
