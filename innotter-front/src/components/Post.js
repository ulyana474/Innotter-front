import React, { useState } from "react";
import ReactRoundedImage from "react-rounded-image";
import '../styles/post.css'
import picture from '../logo.svg'
import like from '../images/like.svg'
import liked from '../images/liked.svg'
import moment from 'moment';


function Post(props) {
    const [img, setImg] = useState(false);

    const imgChangeHandler = () => {
        if(!img) {
            setImg(true);
        }else{
            setImg(false)
        }
    };
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
                <img src={!img ? like : liked} alt='like' className="post-like" onClick={imgChangeHandler}></img>
            </div>
        </div>
    )
    }

export default Post