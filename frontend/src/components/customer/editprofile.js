import React, { useState, useEffect, Component } from 'react';
import axios from 'axios'

function EditProfile() {

    const [ID, setID] = useState("");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [batch, setBatch] = useState('UG2')
    const [contactnumber, setContactnumber] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    useEffect(() => {
        let a = localStorage.getItem('DASS_USERID')
        if (!a || a == 0|| a==""|| a=="0")
            setID("")
        else {
            setID(a)
            axios.get('http://localhost:4000/user/' + a)
                .then(response => {
                    setUsername(response.data.username)
                })
        }
    }
    )

    const onChangeUsername = (event) =>  {
        setUsername(event.target.value)
    }
    const onChangeName = (event) =>  {
        setName(event.target.value)
    }
    const onChangeContactnumber = (event) =>  {
        setContactnumber(event.target.value)
    }
    const onChangeAge = (event) =>  {
        setAge(event.target.value)
    }
    const onChangeEmail = (event) =>  {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) =>  {
        setPassword(event.target.value)
    }
    const onChangeBatch = (event) =>  {
        setBatch(event.target.value)
    }
   

    const onSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            _id: ID,
            name: name,
            contactnumber: contactnumber,
            age: age,
            username: username,
            email: email,
            password: window.btoa(password),
            batch: batch
        }
        axios.post('http://localhost:4000/user/update', newUser)
            .then(res => {
                
                    document.getElementById("comments").innerHTML = "Success"
                    document.getElementById("comments").className = "alert alert-success alert-dismissible fade show"
                
            })
            .catch(err => {
                
                document.getElementById("comments").innerHTML = "Error"
                document.getElementById("comments").className = "alert alert-danger alert-dismissible fade show"
            })
    }
    return (
        
            <div>
                <form onSubmit={onSubmit}>
                <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control"
                            required="true"
                            value={name}
                            onChange={onChangeName}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            className="form-control"
                            required="true"
                            value={username}
                            onChange={onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                            className="form-control"
                            required="true"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email"
                            className="form-control"
                            required="true"
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Number: </label>
                        <input type="text"
                            className="form-control"
                            required="true"
                            value={contactnumber}
                            onChange={onChangeContactnumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text"
                            className="form-control"
                            required="true"
                            value={age}
                            onChange={onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                        <label>Batch: </label>
                        <select
                            id='type_dd'
                            className="form-control"
                            value={batch}
                            onChange={onChangeBatch}
                        >
                            <option value='UG1' >UG1</option>
                            <option value='UG2' selected>UG2</option>
                            <option value='UG3' >UG3</option>
                            <option value='UG4' >UG4</option>
                            <option value='UG5' >UG5</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Profile" className="btn btn-primary" />
                    </div>
                    <div id="comments">
                    </div>
                </form >
            </div >
    );
}

export default EditProfile