import React from 'react'

function DisplayStudents({ students }) {
    console.log({students});
    return (
        <>
            <div>
                <h1>Students Listing</h1>
            </div>
            <div>
                {students.map(student => (<div>
                    <p>{student.name}</p>
                </div>))}
            </div>
        </>

    )
}


export default DisplayStudents;