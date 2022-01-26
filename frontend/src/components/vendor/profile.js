import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'

const ViewProfile = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push("/editprofile")
    }
    let userID = ""
    const [user, setUser] = useState("")
    useEffect(() => {
        userID = localStorage.getItem("DASS_USERID")
        axios.get('http://localhost:4000/user/' + userID)
            .then(response => {
                console.log(response.data)
                setUser(response.data)
            })


    }, [])


    return (
        <div>
            <h1>PROFILE DETAILS</h1>
            <table className="table table-responsive-lg table-hover">
                <tbody>
                    <tr>
                        <th>Manager Name </th>
                        <td>{user.managername}</td>
                    </tr>
                    <tr>
                        <th> Username </th>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <th> Email    </th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th> Contact Number </th>
                        <td>{user.contactnumber}</td>
                    </tr>
                    <tr>
                        <th> Shop Name  </th>
                        <td>{user.shopname}</td>
                    </tr>
                   
                    <tr>
                        <th>Canteen Opening and Closing Time</th>
                        <td>{user.time}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button onClick={handleClick} value={handleClick} type='button'>Edit Profile</button>
            </div>
        </div>
    )
}

export default ViewProfile
