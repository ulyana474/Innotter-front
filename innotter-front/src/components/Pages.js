import React, {useContext, useState, useEffect} from "react";
import '../styles/searchline.css'
import '../styles/users.css'
import '../styles/homepage.css'
import '../styles/pages.css'
import my_page from '../images/my_page.svg';
import Page from "./Page";
import { UserContext } from "./UserContext";
import { pages } from "../utils/functions";

const Pages = () => {
    const [items, setItems] = useState([]);
    const user = useContext(UserContext)
    useEffect(() => {
        const promise = pages()
        promise.then((res) => {
            console.log(res)
            setItems(res)
        .catch((err) => console.log(err))
        });
    }, [])
    const renderList = items.map((item) => 
    <Page name={item.name} description={item.description}/>
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