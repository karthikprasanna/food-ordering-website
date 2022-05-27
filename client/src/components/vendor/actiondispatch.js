import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function ActionDispatch(props) {
    let productID = ""
    let orderID = ""
    const [product, setProduct] = useState("")
    const [order, setOrder] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [allOrders, setAllOrders] = useState([])
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        orderID = localStorage.getItem("DASS_ITEMID")
        console.log("OID:", orderID)
        axios.get('http://localhost:4000/order/' + orderID)
            .then(response => {
                console.log(response.data)
                setOrder(response.data);
            })
        // also get the list of all the users
        axios.get('http://localhost:4000/user/getnames/')
            .then(response => {
                setAllUsers(response.data)
            })
    }, []);

   const order_decrement = {
       order_value: order.quantity
   }

   productID = order.product;
        

    function REJECTED() {
        if (order.status == "COMPLETED") {
            document.getElementById("comments").innerHTML = "Already completed"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            productID = localStorage.getItem("DASS_ITEMID")
            const new_status = {
                status: "REJECTED"
            }
            axios.put('http://localhost:4000/order/change_status/' + orderID, new_status).then(
                res => {
                    document.getElementById("comments").innerHTML = "REJECTED successfully"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    order.status = "REJECTED"
                    axios.put('http://localhost:4000/product/reset_quantity/' + productID).then(
                        res => {
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
    }

    function COMPLETED() {
        orderID = localStorage.getItem("DASS_ITEMID")
       if (order.status == "REJECTED") {
            document.getElementById("comments").innerHTML = "REJECTED Order"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (order.status == "COMPLETED") {
            document.getElementById("comments").innerHTML = "Already COMPLETED"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            const new_status = {
                status: "COMPLETED"
            }
            axios.put('http://localhost:4000/order/change_status/' + orderID, new_status).then(
                res => {
                    document.getElementById("comments").innerHTML = "COMPLETED successfully"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    order.status = "COMPLETED"
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
    }
    
    function ACCEPTED() {
        orderID = localStorage.getItem("DASS_ITEMID")
       if (order.status == "REJECTED") {
            document.getElementById("comments").innerHTML = "REJECTED Order"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (order.status == "COMPLETED") {
            document.getElementById("comments").innerHTML = "Already COMPLETED"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            const new_status = {
                status: "ACCEPTED"
            }
            axios.put('http://localhost:4000/order/change_status/' + orderID, new_status).then(
                res => {
                    document.getElementById("comments").innerHTML = "ACCEPTED successfully"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    order.status = "ACCEPTED"
                    window.location.replace('/orders')

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    function COOKING() {
        orderID = localStorage.getItem("DASS_ITEMID")
       if (order.status == "REJECTED") {
            document.getElementById("comments").innerHTML = "REJECTED Order"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (order.status == "COMPLETED") {
            document.getElementById("comments").innerHTML = "Already COMPLETED"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            const new_status = {
                status: "COOKING"
            }
            axios.put('http://localhost:4000/order/change_status/' + orderID, new_status).then(
                res => {
                    document.getElementById("comments").innerHTML = "COOKING successfully"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    order.status = "COOKING"
                    window.location.replace('/orders')

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    function READY_FOR_PICKUP() {
        orderID = localStorage.getItem("DASS_ITEMID")
        if (order.status == "REJECTED") {
            document.getElementById("comments").innerHTML = "REJECTED Order"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else if (order.status == "COMPLETED") {
            document.getElementById("comments").innerHTML = "Already COMPLETED"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            const new_status = {
                status: "READY FOR PICKUP"
            }
            axios.put('http://localhost:4000/order/change_status/' + orderID, new_status).then(
                res => {
                    document.getElementById("comments").innerHTML = "READY FOR PICKUP successfully"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    order.status = "READY FOR PICKUP"
                    window.location.replace('/orders')

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    
            return (
               
                    <div>
                         <Button variant="success" onClick={ACCEPTED} value={ACCEPTED}>ACCEPTED</Button> 
                        <Button variant="danger" onClick={REJECTED} value={REJECTED}>REJECTED</Button> 
                        <Button variant="info" onClick={COOKING} value={COOKING}>COOKING</Button>
                        <Button variant="info" onClick={READY_FOR_PICKUP} value={READY_FOR_PICKUP}>READY FOR PICKUP</Button>
                        <Button variant="info" onClick={COMPLETED} value={COMPLETED}>COMPLETED</Button>
                        <div id="comments"></div>
                      
                        </div>
                    
                
               
            )
    
    
}
export default ActionDispatch;