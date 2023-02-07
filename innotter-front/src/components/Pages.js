import React, {useContext, useState, useEffect} from "react";
import '../styles/searchline.css'
import '../styles/users.css'
import '../styles/homepage.css'
import '../styles/pages.css'
import my_page from '../images/my_page.svg';
import Page from "./Page";
import { UserContext } from "./UserContext";
import { Fetcher } from "../utils/fetcher";

const Pages = () => {
    const [items, setItems] = useState([]);
    const user = useContext(UserContext)
    useEffect(() => {
        const fetcher = new Fetcher()
        const promise = fetcher.request_get('http://127.0.0.1:8000/pages')
        promise.then((res) => {
            console.log(res)
            setItems(res)
        .catch((err) => console.log(err))
        });
    }, [])
    const renderList = items.map((item) => 
    <Page uuid={item.uuid} tags={item.tags} name={item.name} description={item.description} id={item.id} username={item.username}/>
    );
    return(<div>
        <div className="upper-line">line</div>
        <div className="grid-logo">
            <div className="logo-users">
                <ul className="users-horizontal-list">
                    <li>Innotter</li>
                    <li>pages</li>
                </ul>
                <form>
                    <input type="text" className="users-search-line"></input>
                </form>
            </div>
            <div className="my-page"><img src={my_page} alt="my_page"></img></div>
        </div>
        <div className="flex-pages">
            {renderList}
        </div>
    </div>)
}

export default Pages