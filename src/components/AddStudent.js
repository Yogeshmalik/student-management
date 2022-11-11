import React, { useState } from 'react'
import { TextField, Button, Card } from "@mui/material";
function AddStudent({setStudents}) {
    const [studentData, setStudentData] = useState({
        rollNumber: '',
        name: '',
        address: '',
        email: ''
    });


    const handleChange = (event) => {
        const { name, value } = event.target;

        setStudentData(prevData => ({ ...prevData, [name]: value }))
    }

    const onAddStudent = ()=> setStudents(prevStudents=>(prevStudents.concat(studentData)));

    return (

        <div>
            <div>
                <h1>Add A Student</h1>
            </div>
            <div className='inputData'>
                <TextField className='margin-right' required id="outlined-basic" label="Name" variant="outlined" name='name' onChange={handleChange} value={studentData.name} />
                <TextField className='margin-right' required id="outlined-basic" label="Roll Number" variant="outlined" name='rollNumber' onChange={handleChange} value={studentData.rollNumber} />
            </div>
            <div className='inputData'>
                <TextField className='margin-right' required id="outlined-basic" label="Address" variant="outlined" name='address' onChange={handleChange} value={studentData.address} />
                <TextField className='margin-right' required id="outlined-basic" label="Email" variant="outlined" name='email' onChange={handleChange} value={studentData.email} />
            </div>
            <div className='addButton'>
                <Button variant="contained" onClick={onAddStudent}>Add Student</Button>
            </div>
        </div>
    )
}

export default AddStudent