import React from 'react'
import { useParams } from 'react-router-dom'
const SinglePatient = () => {

    const id = useParams().id

  return (
    <div>
        Here is the single patient view and here is the id of the patient: {id}
    </div>
  )
}

export default SinglePatient;