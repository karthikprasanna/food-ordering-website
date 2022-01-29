import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [name, setName] = useState("")
    const [tag, setTag] = useState("snack")
    const [veggie, setVeggie] = useState("veg")
    const [addon, setAddon] = useState("")
    const [price, setPrice] = useState(0)
    const [total_quantity, setTotal_quantity] = useState(0)
    const [images, setImages] = useState("")
    const [description, setDescription] = useState('')

    const changeTag = (e) => {
        setTag(e.target.value)
        console.log(e.target.value)
    }
    function addit(e) {
        e.preventDefault();
        a = localStorage.getItem("DASS_USERID")
        if (total_quantity <= 0) {
            document.getElementById("comments").innerHTML = "Enter a positive quantity"
            document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
        }
        else {
            console.log(tag)
            const productDetails = {
                name: name,
                price: price,
                total_quantity: total_quantity,
                quantity_remaining: total_quantity,
                vendor: a,
                images: images,
                description: description,
                 addon: addon,
                 tag: tag,
                 veggie: veggie

            }
            var a = 0
            console.log("sending", productDetails)
            axios.post('http://localhost:4000/product/add', productDetails)
                .then(
                    res => {
                        document.getElementById("comments").innerHTML = "Added successfully"
                        document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                    })
                .catch(function (error) {
                    console.log(error)
                    document.getElementById("comments").innerHTML = "Error"
                    document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
                })
        }
    }

    return (
        <div>
            <h1>ADD PRODUCT</h1>
            <form onSubmit={e => addit(e)} >
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="number"
                        className="form-control"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Total Quantity: </label>
                    <input type="number"
                        className="form-control"
                        value={total_quantity}
                        onChange={e => setTotal_quantity(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Image: </label>
                    <input type="text"
                        className="form-control"
                        value={images}
                        onChange={e => setImages(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                        className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Adds On: </label>
                    <input type="text"
                        className="form-control"
                        value={addon}
                        onChange={e => setAddon(e.target.value)}
                    />
                </div>
                <div className="form-group">
                        <label>Tag: </label>
                        <select
                            id= "tag"
                            className="form-control"
                            value={tag}
                            onChange={changeTag}
                        >
                            <option value='snack' selected >snack</option>
                            <option value='sweet' >sweet</option>
                            <option value='drinks' >drinks</option>
                        </select>
                </div>
                <div className="form-group">
                        <label>Veg/Non- veg: </label>
                        <select
                            id = "veggie"
                            className="form-control"
                            value={veggie}
                            onChange={e => {console.log(e.target.value)
                                setVeggie(e.target.value)}}
                        >
                            <option value='veg' selected>veg</option>
                            <option value='nonveg' >nonveg</option>
                        </select>
                </div>
                <div className="form-group">
                    <input type="submit" value="ADD PRODUCT" className="btn btn-primary" />
                </div>
                <div id="comments">
                </div>
            </form>
        </div>
    )
}
export default AddProduct;