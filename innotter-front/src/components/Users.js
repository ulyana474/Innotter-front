import React, {useContext, useState, useEffect} from "react";
import '../styles/searchline.css'
import '../styles/users.css'
import '../styles/homepage.css'
import my_page from '../images/my_page.svg';
import { UserContext } from "./UserContext";
import {users} from '../utils/functions.js'
import UserItem from "./UserItem";

const Users = () => {
    const [items, setItems] = useState([]);
    const user = useContext(UserContext)
    useEffect(() => {
        const promise = users()
        promise.then((res) => {
            setItems(res)
        .catch((err) => console.log(err))
        });
    }, [])
    const renderList = items.map((item) => 
    <UserItem username={item.username}/>
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