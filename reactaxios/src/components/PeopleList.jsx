import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function PeopleList(){
  const [people, setPeople] = useState([])
  const navigate = useNavigate()
  
useEffect(()=>{
  const getPeople = async() => {
    try {
    const response = await axios.get(`${BASE_URL}people`)
    setPeople(response.data.results)
    console.log(response)
    } catch (error) {
      console.error("Error fetching People data:", error)
    }
  }
  getPeople()
},[])

const showPeople = (peopleUrl) => {
  navigate(`${encodeURIComponent(peopleUrl)}`)
}

if (people.length === 0) {
  return <h2>Loading...</h2>
} else {
    return(
        <div className="people">
            <h2>List of People</h2>
            {people.map((people) => (
                <div key={people.name} onClick={()=>showPeople(people.url)} className="card">
                <h3>{people.name}</h3>
                <p>Height: {people.height}cm</p>
                <p>Weight: {people.mass}kg</p>
                <p>Birth Year: {people.birth_year}</p>
                </div>
            ))
            }
        </div>
    )
}}