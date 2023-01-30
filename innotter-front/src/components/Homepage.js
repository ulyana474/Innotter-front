import React, {useContext, useState, useEffect} from "react";
import '../styles/homepage.css'
import { Link } from 'react-router-dom'
import Searchline from "./Searchline";
import logo from '../images/logo.svg';
import my_page from '../images/my_page.svg';
import Post from "./Post";
import Menu from "./Menu";
import { UserContext } from "./UserContext";
import { posts, users } from "../utils/functions";


const Homepage = () => {
    const [menuActive, setMenuActive] = useState(false)
    const [items, setItems] = useState([]);
    const user = useContext(UserContext)
    useEffect(() => {
        const promise = posts()
        promise.then((res) => {
            console.log(res)    
            setItems(res)
        .catch((err) => console.log(err))
        });
    }, [])
    const renderList = items.map((item) => 
    <Post date={item.created_at} content={item.content} owner={item.page}/>
    );
    return( <div className="body">
        <div className="upper-line">line</div>
        <div className="grid-logo-search">
            <div className="grid-item grid-item-log">
                <div className="innotter-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <Link to="/sign" className="button-sign-up">Sign in</Link>
                <Link to="/register" className="button-register">Register</Link>
            </div>
            <div className="grid-item grid-item-search">
                <div className="search-fields">
                    <ul className="horizontal-list">
                        <li><Link to="/users" className="link-list">users</Link></li>
                        <li><Link to="/pages" className="link-list">pages</Link></li>
                        <li><Link to="/tags" className="link-list">tags</Link></li>
                    </ul>
                    <button onClick={() => setMenuActive(!menuActive)} className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="false"><span className="navbar-toggler-icon"></span></button>
                </div>
                <Searchline />
            </div>
            <Menu active={menuActive} setActive={setMenuActive}/>
            <div className="my-page"><img src={my_page} alt="my-page"></img></div>
        </div>
        <main className="post-wrapper">
            {renderList}
        </main>
    </div>
)
}

export default Homepage