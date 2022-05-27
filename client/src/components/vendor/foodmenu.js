import React, { useState, useEffect, Component } from 'react';
import { useHistory } from "react-router-dom"
import axios from 'axios';
import { Button } from 'react-bootstrap';


function Home() {
    const [ID, setID] = useState("0");
    const [name, setName] = useState("");
    const [allProducts, setProducts] = useState("");
    const [allUsers, setAllUsers] = useState([])



    const handleClick = () => {
        window.location.replace('/addproduct')
    }

    useEffect(() => {
        let a = localStorage.getItem('DASS_USERID')
        if (!a || a == 0)
            setID("0")
        else
            setID(a)
        // axios.get('http://localhost:4000/user/' + a)
        //     .then(response => {
        //         setName(response.data.username)
        //     })
        // axios.get('http://localhost:4000/product/vendor/' + a)
        //     .then(response => {
        //         setProducts(response.data)
        //         console.log({allProducts}.allProducts)
        //     })
        //     axios.get('http://localhost:4000/user/showall/')
        //     .then(response => {
                
        //         setAllUsers(response.data);

            //})
        
    }
    )

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

    return (
        
        <div>
                <Button onClick={handleClick} value={handleClick}  variant='dark' type='button'>Add Food Item</Button>
          <br/><br/> <h1>Your Food Items:</h1>
{/* 
           <table className="table table-hover thead-light table-responsive-lg ">
                    <thead>
                        <tr>
                            <th>Food Item</th>
                            <th>Price</th>
                            <th>Quantity Remaining</th>
                            <th>Veg/ Non-Veg</th>
                            <th>Adds on</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>tag</th>
                        </tr>
                    </thead>
                     <tbody>
                        {
                           { allProducts }.allProducts.map((currentProduct, i) => {
                            return (
                                // <tr>
                                //     <td>{currentProduct.name}</td>
                                //     <td>{currentProduct.price}</td>
                                //     <td>{currentProduct.quantity_remaining}</td>
                                //     <td>{currentProduct.veggie}</td>
                                //     <td>{currentProduct.addon}</td>
                                //     <td>{currentProduct.description}</td>
                                //     <td>{currentProduct.rating}</td>
                                //     <td>{currentProduct.tag}</td>
                                // </tr>
                            )
                        })
                        }
                    </tbody> 
                </table>  */}
            </div>
       
    );
}

export default Home;