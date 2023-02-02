import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { TextField, InputAdornment, IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import '../styles/create.css'
import { create_tag } from "../utils/functions";
import { UserContext } from "./UserContext";


const CreateTag = () => {
    let navigate = useNavigate()
    const user = useContext(UserContext)
    let user_obj = JSON.parse(localStorage.getItem("user"))
    let pages = user_obj["user"]["pages"]
    const [pageValue, setPageValue] = useState(null)
    const [tagValue, setTagValue] = useState(null)
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
          name="tag_name"
          placeholder="Tag name"
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
          onChange={(newValue) => setTagValue(newValue.target.value)}
    />
    <button className="create-tag-button" 
    onClick={async () => {await create_tag(tagValue, pageValue); navigate("/Innotter")}}>create</button>
</div>
</>)
}
    

export default CreateTag