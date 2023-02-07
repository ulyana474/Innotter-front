import React, { useEffect, useState, useContext } from "react";
import ReactRoundedImage from "react-rounded-image";
import { format } from 'react-string-format';
import '../styles/post.css'
import unliked_path from '../images/like.svg'
import liked_path from '../images/liked.svg'
import picture from '../logo.svg'
import moment from 'moment';
import { Fetcher } from "../utils/fetcher";
import { UserContext } from "./UserContext";
import {likeHandler} from "../utils/responseHandlers"


function Post(props) {
    const [likeResponse, setLikeResponse] = useState(null);
    const {user, setUser} = useContext(UserContext)
    let fetcher = new Fetcher()

    const sendRequestLike = async() => {
        const likePromise = fetcher.request_get(format('http://127.0.0.1:8000/postLike/{0}', props.id));
        likePromise.then((res) => {
            setLikeResponse(res)
        likePromise.catch((err) => console.log(err))
        })
    }
  
    return(
        <div className="post-block">
            <div className="grid-post-info">
                <ReactRoundedImage 
                image={picture} 
                imageWidth="50"
                imageHeight="50"
                roundedSize="13"
                borderRadius="70"
                />
                <p className="post-username">{props.owner}</p>
                <p className="post-created-time">{moment(props.date).format("YYYY/MM/DD kk:mm:ss")}</p>
            </div>
            <p className="post-text">{props.content}</p>
            <div className="grid-post-reply-like">
                <form>
                    <input type="text" className="post-reply"></input>
                </form>
                <img src={liked_path} alt='like' className="post-like"
                onClick={() => {sendRequestLike();}}></img>
            </div>
        </div>
    )
    }

export default Post