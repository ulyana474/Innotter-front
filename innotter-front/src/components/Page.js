import React from "react";
import '../styles/page.css'
import page_img from '../images/page.svg'
import { Link } from "react-router-dom";

const Page = (props) => 
    <div className="page-block">
        <div className="flex-page-info">
            <p className="page-name">{props.name}</p>
            <img src={page_img} className="page-img"></img>
        </div>
        <p className="page-text">{props.description}</p>
        <Link to="/user-page" className="see-page-button">see page</Link>
    </div>

export default Page