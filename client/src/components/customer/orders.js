import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function ViewOrders(props) {
    let orderID = ""
    const [ID, setID] = useState("");
    const [order, setOrder] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        let a = localStorage.getItem('DASS_USERID')
        if (!a || a == 0)
            setID("")
        else
            setID(a)
        axios.get('http://localhost:4000/order/customer/' + a)
            .then(response => {
                console.log(response.data)
                setOrder(response.data);
            })
        // also get the list of all the users
        axios.get('http://localhost:4000/user/getnames/')
            .then(response => {
                setAllUsers(response.data)
            })
        // also get the list of all the products
        axios.get('http://localhost:4000/product/getnames/')
            .then(response => {
                setAllProducts(response.data)
            })

              // also get the list of all the orders
        axios.get('http://localhost:4000/order/showall/')
        .then(response => {
            setAllOrders(response.data)
        })
    }, []);

    function getname(name) {
        if (name == "") {
            return ""
        }
        var results = allUsers.filter(function (i) {
            return i._id == name
        })
        if (results[0] == undefined) {
            return ""
        }
        return (results[0].username)
    }

    function getPname(name) {
        if (name == "") {
            return ""
        }
        var results = allProducts.filter(function (i) {
            return i._id == name
        })
        if (results[0] == undefined) {
            return ""
        }
        return (results[0].name)
    }

  
    console.log({order})
    console.log(order)
    return (
        <div>
            <table className="table table-hover thead-light table-responsive-lg ">
                <thead>
                    <tr>
                        <th>Placed Time</th>
                        <th>Vendor Name</th>
                        <th>Food Item</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Cost</th>
                        <th>rating</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                       
                        { order }.order.map((currentOrder, i) => {
                            return (
                                <tr>
                                    <td>{currentOrder.time}</td>
                                    <td>{(() => getname(currentOrder.vendor))()}</td>
                                    <td> {(() => getPname(currentOrder.product))()}</td>
                                    <td>{currentOrder.quantity}</td>
                                    <td>{currentOrder.status}</td>
                                    <td>{currentOrder.cost}</td>
                                    <td>{currentOrder.rating}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default ViewOrders;