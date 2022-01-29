import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function ViewOrders() {
    const [ID, setID] = useState("");
    const [OrderID, setOrderID] = useState("")
    const [product, setProduct] = useState([])
    const [order, setOrder] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        let a = localStorage.getItem('DASS_USERID')
        if (!a || a == 0)
            setID("")
        else
            setID(a)

            axios.get('http://localhost:4000/order/vendor/' + a)
            .then(response => {
                
                setOrder(response.data);
            })
            axios.get('http://localhost:4000/user/showall/')
            .then(response => {
                
                setAllUsers(response.data);

            })

        axios.get('http://localhost:4000/product/vendor/' + a)// + { searchString }.searchString)
            .then(response => {
                
                setProduct(response.data);
                setAllProducts(response.data)
            })
    }, []);

    function updateList(e) {
        e.preventDefault();
        console.log(searchString)
        var results = allProducts.filter(function (i) {
            return i.name.indexOf(searchString) !== -1;
        })
        
        console.log(results)
        if (searchString == "") {
            results = allProducts
        }
        setProduct(results)
    }

    function viewMore(oid) {
        setOrderID(oid)
        localStorage.setItem('DASS_ITEMID', oid)
        window.location.replace('/action')
    }
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

    function getPstatus(name){
        if (name == "") {
            return ""
        }
        var results = allProducts.filter(function (i) {
            return i._id == name
        })
        if (results[0] == undefined) {
            return ""
        }
        return (results[0].status)
    }

    return (
      
            <div>
                <table className="table table-hover thead-light table-responsive-lg ">
                    <thead>
                        <tr>
                            <th>Placed Time</th>
                            <th>Food Item</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            { order }.order.map((currentOrder, i) => {
                                return (
                                    <tr>
                                       <td>{currentOrder.time}</td>
                                       <td> {(() => getPname(currentOrder.product))()}</td>
                                    <td>{currentOrder.quantity}</td>
                                    <td>{currentOrder.cost}</td>
                                    <td>{(() => getname(currentOrder.customer))()}</td>
                                    <td>{currentOrder.status}</td>
                                        <td><Button variant="dark" onClick={() => viewMore(currentOrder._id)} value={currentOrder._id}>MOVE TO NEXT STAGE</Button></td>
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