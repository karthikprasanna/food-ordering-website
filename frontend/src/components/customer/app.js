import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Products from "./viewAllProducts"
import CustomerNavBar from './navbar'
import LogOut from '../login/logout'
import MakeOrder from './makeorder'
import ViewOrders from './orders'
import GiveReview from './givereview'
import Profile from './profile'
import Vendors from './vendors'
import VendorDetails from './vendorDetails';
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
        <Route path="/givereview" component={GiveReview} />
        <Route path="/vendors" component={Vendors} />
        <Route path="/vendor_Details" component={VendorDetails} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={LogOut} />
        <Route path="/editprofile" component={EditProfile} />
      </div>
    </Router>
  );
}

export default CustomerPage;
