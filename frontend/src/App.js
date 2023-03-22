import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {
  
  const [ patients, setPatients ] = useState([])

  useEffect(() => {
    const initPatient = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/patients');
        setPatients(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    initPatient()
  },[])

  console.log(patients)

  return (
    <div className="App">
      <h1>Health Care Software Project</h1>
      <p>This is going to be the frontpage of the Health Software Project</p>
      <div >
        <input type="email" placeholder='Email or Username' />
      </div>
      <div>
        <input type="password" placeholder='Password' />
      </div>

      <div>
        <button>Login</button>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default App;