import React, { useEffect, useState } from 'react';

const PatientList = ({ patients, setPatients }) => {

  console.log(patients)

  return (
    <div>
      <h1>Patient List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Family Name</th>
          </tr>
        </thead>
        <tbody>
          {patients ?
          patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.resource.name[0].given.map(name => <p> {name} </p>)}</td>
              <td>{patient.resource.name[0].family[0]}</td>
            </tr>
          )):
            <p>Loading</p> }
        </tbody>
      </table>
    </div>
  );
}

/* Do a function for ordering and filtering 

export default PatientList;
