import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PeopleList = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/')
        setPeople(response.data.results)
      } catch (error) {
        console.error('Error fetching people:', error)
      }
    }

    fetchPeople()
  }, [])

  return (
    <div>
      <h2>People List</h2>
      {people.map((person) => (
        <div key={person.url}>
          <Link to={`/people/${person.url.split('/').slice(-2)[0]}`}>
            {person.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PeopleList