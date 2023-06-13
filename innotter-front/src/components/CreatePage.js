import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import uuid from 'react-uuid';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import '../styles/create.css'
import { Fetcher } from "../utils/fetcher";



const CreatePage = () => {
    let navigate = useNavigate()
    const [nameValue, setNameValue] = useState(null)
    const [descrValue, setDescrValue] = useState(null)
    const [uuidValue, setUuid] = useState(uuid().slice(0, 15))
    const fetcher = new Fetcher()
    return(<>
    <div className="create-block">
    <TextField
          name="page_name"
          placeholder="Name"
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
          onChange={(newValue) => setNameValue(newValue.target.value)}
    />
    <TextField
          name="description"
          placeholder="Description"
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
          onChange={(newValue) => setDescrValue(newValue.target.value)}
    />
    <button className="create-tag-button" 
    onClick={async () => 
                  {await fetcher.request('http://127.0.0.1:8000/pages/', 'POST', { 'name': nameValue, 'description': descrValue, 'uuid': uuidValue });
                  navigate("/Innotter")}}>create</button>
</div>
</>)
}
    

export default CreatePage