import React, {useContext, useState, useEffect} from "react";
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/account.css'
import logo from '../images/logo.svg'
import image from '../images/page.svg'
import { UserContext } from "./UserContext";
import {Fetcher} from '../utils/fetcher.js'
import { format } from 'react-string-format';

const UserAcc = () => {
    let location = useLocation()
    const user = useContext(UserContext)
    const [userData, setUserData] = useState([]);
    let user_obj = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        let fetcher = new Fetcher()
        const promise = fetcher.request_get(format('http://127.0.0.1:8000/users/{0}', location.state))
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
                {userData.id === user_obj["user"]["id"]
                                 ? <Link to="/create-page" className="new-page-button">new page</Link>
                                 : <div></div>}
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