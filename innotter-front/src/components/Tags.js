import React, {useContext, useEffect, useState} from "react";
import '../styles/tags.css'
import my_page from '../images/my_page.svg';
import Tag from "./Tag";
import {tags} from '../utils/functions.js'


const Tags = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const promise = tags()
        promise.then((res) => {
            console.log(res)
            setItems(res)
        .catch((err) => console.log(err))
        });
    }, [])
    const renderList = items.map((item) => 
    <Tag name={item.name} id={item.id}/>
    );
    return(<>
        <div className="upper-line">line</div>
        <div className="grid-tags">
            <button className="new-tag-button">new tag</button>
            <img src={my_page} className="tags-my-page" alt="my_page"></img>
        </div>
        <div className="tags-logo">
            <ul className="tags-horizontal-list">
                <li>Innotter</li>
                <li>tags</li>
            </ul>
        </div>
        {renderList}
        </>)
}
    

export default Tags