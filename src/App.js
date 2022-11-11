
import './App.css';
import { useState } from 'react'
import AddStudent from './components/AddStudent';
import DisplayStudents from './components/DisplayStudents';
import { Button } from "@mui/material";
import ACTIONS from './constants/adminActions';


function App() {

  const [students, setStudents] = useState([]); // this can be moved to redux or react context for the state management and avoid prop-drilling which can happen is the application grows.

  const [currentSelection, setCurrentSelection] = useState(ACTIONS.ADD_STUDENT);


  const getViewAsPerAction = () => {
    switch (currentSelection) {
      case ACTIONS.ADD_STUDENT:
        return <AddStudent setStudents={setStudents} />;

      case ACTIONS.VIEW_STUDENTS:
        return <DisplayStudents setStudents={setStudents} students={students} />;
      default:
        return null;
    }
  }

  console.log({ currentSelection });

  return (
    <div className="App">
      <h1>Student Management Tool</h1>
      <div>
        <Button className='margin-right' variant="contained" onClick={() => setCurrentSelection(ACTIONS.ADD_STUDENT)}>Add Student</Button>
        <Button className='margin-right' variant="contained" onClick={() => setCurrentSelection(ACTIONS.VIEW_STUDENTS)}>View Students</Button>
      </div>
      {getViewAsPerAction()}
    </div>
  );
}

export default App;
