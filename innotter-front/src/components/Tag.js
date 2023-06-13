import React from "react";
import '../styles/tags.css'


const Tag = (props) => 
    <div className="flex-tags-blocks">
        <div className="tag-block">#{props.name}</div>
    </div>

export default Tag