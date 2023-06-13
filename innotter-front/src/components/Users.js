import React, {useContext, useState, useEffect} from "react";
import '../styles/searchline.css'
import '../styles/users.css'
import '../styles/homepage.css'
import my_page from '../images/my_page.svg';
import { UserContext } from "./UserContext";
import {Fetcher} from '../utils/fetcher.js'
import UserItem from "./UserItem";

const Users = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetcher = new Fetcher()
        const promise = fetcher.request_get('http://127.0.0.1:8000/users')
        promise.then((res) => {
            setItems(res)
        .catch((err) => console.log(err))
        });
    }, [])
    const renderList = items.map((item) => 
    <UserItem username={item.username} id={item.id}/>
    );
    return(<div>
        <div className="upper-line">line</div>
        <div className="grid-logo">
            <div className="logo-users">
                <ul className="users-horizontal-list">
                    <li>Innotter</li>
                    <li>users</li>
                </ul>
                <form>
                    <input type="text" className="users-search-line"></input>
                </form>
            </div>
            <div className="my-page"><img src={my_page} alt="my_page"></img></div>
        </div>
        <div className="flex-user-blocks">
            {renderList}
        </div>
    </div>)
}

export default Users