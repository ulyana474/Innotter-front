import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { TextField, InputAdornment, IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import '../styles/create.css'
import { create_post } from "../utils/functions";


const CreatePost = () => {
    let navigate = useNavigate()
    let user_obj = JSON.parse(localStorage.getItem("user"))
    let pages = user_obj["user"]["pages"]
    const [pageValue, setPageValue] = useState(null)
    const [contentValue, setContentValue] = useState(null)
    return(<>
    <div className="choose-pages">{JSON.stringify(pages)}</div>
    <div className="create-block">
    <TextField
          name="page_name"
          placeholder="Page"
          className="input"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(newValue) => setPageValue(newValue.target.value)}
    />
    <TextField
          name="content"
          placeholder="Type something"
          className="input"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(newValue) => setContentValue(newValue.target.value)}
    />
    <button className="create-tag-button" 
    onClick={async () => {await create_post(pageValue, contentValue); navigate("/Innotter")}}>create</button>
</div>
</>)
}
    

export default CreatePost