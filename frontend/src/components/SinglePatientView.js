import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './singlePatient.css'

const SinglePatient = () => {

  const id = useParams().id
  const [ singlePatient, setSinglePatient ] = useState([])
  useEffect(() => {
    const initSinglePatient = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/patients/${id}`);
        setSinglePatient(response.data.entry)
      } catch (error) {
        console.error(error);
      }
    }
    initSinglePatient()
  },[])

  const patient = singlePatient.filter(
    (patientResource) => patientResource.resource.resourceType
    == "Patient"
  );

  const bloodPressure = singlePatient.filter(
    (patientResource) =>
      patientResource.resource.resourceType == "Observation" &&
      patientResource.resource.code.coding[0].code == "55284-4"
  );

  if(singlePatient[0]) {
    return (
      <div className="container">
        <h1>Patient Information: {id}</h1>
        <table id="patient">
          <tr>
            <th>Patient ID:</th>
            <td>{patient[0].resource.id}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>{patient[0].resource.name[0].given.join(' ')} {patient[0].resource.name[0].family[0]}</td>
          </tr>
          <tr>
            <th>Birthday:</th>
            <td>{patient[0].resource.birthDate}</td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td>{patient[0].resource.gender}</td>
          </tr>
        </table>

        <h2>Blood pressure</h2>
        <table id="bp">
          <thead>
            <tr>
              <th>Date</th>
              <th>Systolic</th>
              <th></th>
              <th>Diastolic</th>
            </tr>
          </thead>
          <tbody>
            {bloodPressure.length > 0 ? (
              bloodPressure.map((bp) => (
                <tr>
                  <td>{bp.resource.effectiveDateTime}</td>
                  <td>{bp.resource.component[0].valueQuantity.value}</td>
                  <td>/</td>
                  <td>{bp.resource.component[1].valueQuantity.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="no-results">
                  No blood pressure data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  )}
  }

export default SinglePatient;