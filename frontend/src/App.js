import './App.css';
import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from 'axios';
import SinglePatient from './components/SinglePatientView';
import PatientList from './components/PatientListView';
const App = () => {
  
  const [ patients, setPatients ] = useState([])

  useEffect(() => {
    const initPatient = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/patients');
        setPatients(response.data.entry)
      } catch (error) {
        console.error(error);
      }
    }
    initPatient()
  },[])

  console.log(patients)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/patient/:id" element={<SinglePatient />} />
        <Route path="/" element={<PatientList patients={patients} setPatients={setPatients} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;