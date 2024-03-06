import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const PeopleDetails = () => {
  const { id } = useParams()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`)
        setPerson(response.data)
      } catch (error) {
        console.error('Error fetching person details:', error)
      }
    }

    fetchPersonDetails()
  }, [id])

  return (
    <div>
      <h2>Person Details</h2>
      {person && (
        <div>
          <h3>{person.name}</h3>
          <p>Birth Year: {person.birth_year}</p>
          <p>Gender: {person.gender}</p>
          <Link to="/people">Return to People List</Link>
        </div>
      )}
    </div>
  )
}

export default PeopleDetails