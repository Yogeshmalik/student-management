
import './App.css';
import { useState } from 'react'
import AddStudent from './components/AddStudent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayStudents from './components/DisplayStudents';
import StudentManagementDashboard from './components/StudentManagementDashboard';

const NoPage = ()=> <h1>No page found!!!!</h1>


function App() {
  
  const { students, setStudents } = useState([{name: "Ashish rawat"}]);

  return (
    <div className="App">
      <h1>Student Management Tool</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentManagementDashboard />}>
            <Route index element={<StudentManagementDashboard />} />
            <Route path="add-student" element={<AddStudent />} />
            <Route path="view-students" element={<DisplayStudents students={[{name: "Ashish rawat"}]}/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
