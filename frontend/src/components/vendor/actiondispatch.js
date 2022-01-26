import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function ActionDispatch(props) {
    let productID = ""
    const [product, setProduct] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [allOrders, setAllOrders] = useState([])
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        productID = localStorage.getItem("DASS_ITEMID")
        console.log("PID:", productID)
        axios.get('http://localhost:4000/product/' + productID)
            .then(response => {
                console.log(response.data)
                setProduct(response.data);
                axios.get('http://localhost:4000/order/product/' + productID)
                    .then(response => {
                        console.log(response.data)
                        setAllOrders(response.data);
                    })
            })
        // also get the list of all the users
        axios.get('http://localhost:4000/user/getnames/')
            .then(response => {
                setAllUsers(response.data)
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

    function takeAction(e) {
        e.preventDefault();
        productID = localStorage.getItem("DASS_ITEMID")
        const orderDetails = {
            product: productID,
            quantity: quantity,
            vendor: product.vendor,
            customer: a,
            status: "Waiting"
        }
        const order_decrement = {
            order_value: quantity
        }
        var a = 0
        console.log("sending", orderDetails)
        axios.post('http://localhost:4000/order/add', orderDetails)
            .then(
                res => {
                    console.log("Ordered successfully ")
                    document.getElementById("comments").innerHTML = "Ordered successfully "
                    axios.put('http://localhost:4000/product/order_decrement/' + productID, order_decrement).then(

                        res => {
                            console.log("Decremented successfully ")
                            // document.getElementById("comments").innerHTML="Ordered successfully "
                            window.location.replace('/orders')
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                })
            .catch(function (error) {
                console.log(error);
            });
    }

    function REJECTED() {
        if (product.status == "COMPLETED") {
            document.getElementById("comments").innerHTML = "Already completed"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            productID = localStorage.getItem("DASS_ITEMID")
            const new_status = {
                status: "REJECTED"
            }
            axios.put('http://localhost:4000/product/change_status/' + productID, new_status).then(
                res => {
                    document.getElementById("comments").innerHTML = "REJECTED successfully"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    product.status = "REJECTED"
                    axios.put('http://localhost:4000/product/reset_quantity/' + productID).then(
                        res => {
                            window.location.replace('/products')
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    function COMPLETED() {
        productID = localStorage.getItem("DASS_ITEMID")
        if (product.status == "Waiting") {
            document.getElementById("comments").innerHTML = "Order not yet placed as more items need to be ordered"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (product.status == "REJECTED") {
            document.getElementById("comments").innerHTML = "REJECTED Order"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (product.status == "COMPLETED") {
            document.getElementById("comments").innerHTML = "Already COMPLETED"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            const new_status = {
                status: "COMPLETED"
            }
            axios.put('http://localhost:4000/product/change_status/' + productID, new_status).then(
                res => {
                    document.getElementById("comments").innerHTML = "COMPLETED successfully"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    product.status = "COMPLETED"
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    
    function ACCEPTED() {
        productID = localStorage.getItem("DASS_ITEMID")
        if (product.status == "Waiting") {
            document.getElementById("comments").innerHTML = "Order not yet placed as more items need to be ordered"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (product.status == "REJECTED") {
            document.getElementById("comments").innerHTML = "REJECTED Order"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (product.status == "COMPLETED") {
            document.getElementById("comments").innerHTML = "Already COMPLETED"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            const new_status = {
                status: "ACCEPTED"
            }
            axios.put('http://localhost:4000/product/change_status/' + productID, new_status).then(
                res => {
                    document.getElementById("comments").innerHTML = "ACCEPTED successfully"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    product.status = "ACCEPTED"
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    function COOKING() {
        productID = localStorage.getItem("DASS_ITEMID")
        if (product.status == "Waiting") {
            document.getElementById("comments").innerHTML = "Order not yet placed as more items need to be ordered"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (product.status == "REJECTED") {
            document.getElementById("comments").innerHTML = "REJECTED Order"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (product.status == "COMPLETED") {
            document.getElementById("comments").innerHTML = "Already COMPLETED"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            const new_status = {
                status: "COOKING"
            }
            axios.put('http://localhost:4000/product/change_status/' + productID, new_status).then(
                res => {
                    document.getElementById("comments").innerHTML = "COOKING successfully"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    product.status = "COOKING"
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    function READY_FOR_PICKUP() {
        productID = localStorage.getItem("DASS_ITEMID")
        if (product.status == "Waiting") {
            document.getElementById("comments").innerHTML = "Order not yet placed as more items need to be ordered"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (product.status == "REJECTED") {
            document.getElementById("comments").innerHTML = "REJECTED Order"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (product.status == "COMPLETED") {
            document.getElementById("comments").innerHTML = "Already COMPLETED"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            const new_status = {
                status: "READY FOR PICKUP"
            }
            axios.put('http://localhost:4000/product/change_status/' + productID, new_status).then(
                res => {
                    document.getElementById("comments").innerHTML = "READY FOR PICKUP successfully"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    product.status = "READY FOR PICKUP"
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const OrderTable = (orders) => {
        console.log("ORDERS", orders)
        console.log("Orders", { orders }.orders.orders)
        if (orders == [] || orders == undefined || orders.orders[0] == undefined) {
            return (
                <div>
                    No orders have been made
                </div>)
        }
        else {
            return (
                <div>
                    <table className="table table-hover thead-light table-responsive-lg ">
                        <thead>
                            <tr>
                                <th>Vendor</th>
                                <th>Quantity</th>
                                <th>Rating</th>
                                <th>Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                { orders }.orders.orders.map((currentOrder, i) => {
                                    return (
                                        <tr>
                                            <td>{(() => getname(currentOrder.vendor))()}</td>
                                            <td>{currentOrder.quantity}</td>
                                            <td>{currentOrder.rating}</td>
                                            <td>{currentOrder.review}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    <div>
                        <Button variant="success" onClick={ACCEPTED} value={ACCEPTED}>ACCEPTED</Button>
                        <Button variant="danger" onClick={REJECTED} value={REJECTED}>REJECTED</Button>
                        <Button variant="info" onClick={COOKING} value={COOKING}>COOKING</Button>
                        <Button variant="info" onClick={READY_FOR_PICKUP} value={READY_FOR_PICKUP}>READY FOR PICKUP</Button>
                        <Button variant="info" onClick={COMPLETED} value={COMPLETED}>COMPLETED</Button>
        
                        <div id="comments">
                        </div>
                    </div>

                </div>
            )
        }
    }

    return (
        <div>
            <h1>PRODUCT DETAILS</h1>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td> {product.name} </td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td> {product.price} </td>
                    </tr>
                    <tr>
                        <th>Total Quantity for Dispatch</th>
                        <td> {product.total_quantity} </td>
                    </tr>
                    <tr>
                        <th>Quantity remaining for Dispatch</th>
                        <td> {product.quantity_remaining} </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td> {product.description} </td>
                    </tr>
                    <tr>
                        <th>Status(reload the page to view changes)</th>
                        <td> {product.status} </td>
                    </tr>
                </tbody>
            </table>

            <h1>ORDERS</h1>
            <OrderTable orders={allOrders} />
        </div>
    )
}
export default ActionDispatch;