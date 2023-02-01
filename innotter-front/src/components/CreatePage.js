import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import '../styles/create.css'
import { create_page } from "../utils/functions";



const CreatePage = () => {
    const [nameValue, setNameValue] = useState(null)
    const [descrValue, setDescrValue] = useState(null)
    const [uuidValue, setUuid] = useState(null)
    return(<>
    <div className="create-block">
    <TextField
          name="page_name"
          placeholder="Name"
          className="input-tag-name"
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
          className="input-tag-name"
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
    onClick={async () => await create_page(nameValue, descrValue, uuidValue)}>create</button>
</div>
</>)
}
    

export default CreatePage