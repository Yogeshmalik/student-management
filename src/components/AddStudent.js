import React from 'react'
import {TextField} from "@mui/material";
function AddStudent() {
    return (

        <div>
            <div>
                <h1>Add A Student</h1>
            </div>
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
        </div>
    )
}

export default AddStudent