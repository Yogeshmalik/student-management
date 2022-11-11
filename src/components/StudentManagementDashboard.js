import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function StudentManagementDashboard() {
    return (
        <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add-student">Add Student</Link>
            </li>
            <li>
                <Link to="/view-students">View all Students</Link>
            </li>
        </ul>
        <Outlet/>
        </>
    )
}