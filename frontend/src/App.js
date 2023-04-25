import './App.css';
import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from 'axios';
import SinglePatient from './components/SinglePatientView';
import PatientList from './components/PatientListView';


import IndexPage from './components/IndexPage';
import Menu from './components/NavBar'
import { AppBar } from '@mui/material';

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
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/patient/:id" element={<SinglePatient />} />
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/patient" element={<PatientList patients={patients}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;