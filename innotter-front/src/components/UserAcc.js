import React, {useContext, useState, useEffect} from "react";
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/account.css'
import logo from '../images/logo.svg'
import image from '../images/page.svg'
import { UserContext } from "./UserContext";
import {userRetrieve} from '../utils/functions.js'

const UserAcc = () => {
    let location = useLocation()
    const user = useContext(UserContext)
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const promise = userRetrieve(location.state)
        promise.then((res) => {
            setUserData(res)
        .catch((err) => console.log(err))
        });
    }, [])
    console.log(userData)
    return(<>
        <div className="upper-line">line</div>
        <div className="grid-user-account">
            <div className="flex-account">
            <div className="account-sidebar">   
                <img src={logo} className="img-sidebar" alt="logo"></img>
                <p className="account-email">{userData.email}</p>
                <Link to="/create-page" className="new-page-button">new page</Link>
            </div>
            </div>
            <div className="flex-user-info">
                <div className="account-info">
                    <div className="flex-user">
                        <p className="user-role">{userData.role}</p>
                        <p className="account-username">{userData.username}</p>
                    </div>
                    <p className="account-description">{userData.title}<p className="change-title">change title</p></p>
                    <img src={image} className='img-user' alt="user"></img>
                    <p className="change-picture">change picture</p>
                </div>
            </div>
        </div>
        </>)
}
       
    
export default UserAcc