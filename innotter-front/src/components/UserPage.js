import React, {useState, useContext} from "react";
import {useLocation} from 'react-router-dom'
import { format } from 'react-string-format';
import '../styles/userPage.css'
import my_page from '../images/my_page.svg';
import logo from '../images/logo.svg';
import image from '../images/page.svg'
import {Fetcher} from '../utils/fetcher'
import { UserContext } from "./UserContext";
import { ResponseHandler } from "../utils/responseHandlers";


const UserPage = () => {
    const fetcher = new Fetcher()
    const [followResponse, setFollowResponse] = useState(null);
    const {user, setUser} = useContext(UserContext)
    let location = useLocation()
    const followTextHandler = () => {
        const handler = new ResponseHandler(user)
        if (followResponse === null) {
            return handler.checkUserInFollowersArray(location.state.page)
        }
        return handler.checkUserInFollowersArray(followResponse)
    };

    const sendRequestFollow = async() => {
        const followResponse = fetcher.request_get(format('http://127.0.0.1:8000/followToggle/{0}/', location.state.id), 'GET');
        followResponse.then((res) => {
            setFollowResponse(res)
        followResponse.catch((err) => console.log(err))
        })
    }
    return(<>
        <div className="upper-line">line</div>
        <div className="grid-user-page">
            <div className="flex-logo-follow">
                <img src={logo} className="logo-user-page" alt="logo"></img>
                <button onClick={() => {sendRequestFollow(); followTextHandler()}} className="follow-btn">{followTextHandler()}</button>
            </div>
            <div className="user-page-block">
                <div className="page-uuid">{location.state.uuid}</div>
                <div className="flex-row-page-info">
                    <div className="flex-column-user-info">
                        <p className="user-page-username">{location.state.username}</p>
                        <p className="user-page-pagename">{location.state.name}</p>
                    </div>
                    <img src={image} className="user-image" alt="user"></img>
                </div>
            </div>
            <img src={my_page} className="user-my-page" alt="my_page"></img>
            <div className="link-text">
                <div className="flex-column-link-descr">
                <div className="link-posts-followers">
                                    <p className="see-followers">see followers</p>
                                    <p className="see-posts">see posts</p>
                    </div>
                    <p className="page-descr">{location.state.description}</p>
                <hr/>     
                <div className="page-tags">
                    <ul className="tags-list">
                        {location.state.tags}
                    </ul>
                </div>         
                </div>
                </div>
        </div>
        </>)
}
    
export default UserPage