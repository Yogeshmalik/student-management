import React from 'react'
import { Card, Button } from "@mui/material";

function DisplayStudents({ students, setStudents }) {
    console.log({ students });

    const handleDelete = (rollNumber)=>{
        const index = students.findIndex(student=> student.rollNumber === rollNumber);
        
        setStudents((prevStudents=>{
            prevStudents.splice(index,1);
            return [...prevStudents];
        }))

    }

    return (
        <>
            <div>
                <h1>Students Listing</h1>
            </div>
            <div>
                {students.map(student => (
                    <Card variant='outlined' className='display-card'>
                        <div className='card'>
                            <h3>Name: {student.name}</h3>
                            <p>Roll No.: {student.rollNumber}</p>
                            <p>Address: {student.address}</p>
                            <p>Email: {student.email}</p>
                        </div>
                        <div className='delete'>
                            <Button variant="outlined" color="error" onClick={()=>handleDelete(student.rollNumber)}>
                                Delete
                            </Button>
                        </div>
                    </Card>))}

            </div>
        </>

    )
}


export default DisplayStudents;