import React, { useEffect, useState } from 'react';

const PatientList = ({ patients, setPatients }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.resource.name[0].given
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      patient.resource.name[0].family[0]
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      patient.resource.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Patient List</h1>
      <input
        type="search"
        class="search"
        placeholder="Search patients..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.resource.id}</td>
                <td>{patient.resource.name[0].given.join(' ')}</td>
                <td>{patient.resource.name[0].family[0]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No matching patients found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;


