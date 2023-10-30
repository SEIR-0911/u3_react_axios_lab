import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../globals'

export default function PeopleList(){

//setting our state for data to be pulled
const [people, setPeople] = useState([])

useEffect(()=>{
  const getPeople = async() => {
    const response = await axios.get(`${BASE_URL}people`)
    setPeople(response.data.results)
    console.log(response)
  }
  getPeople()
},[])

let navigate = useNavigate()

const showPeople = (key) => {
  navigate(`${key}`)
}

if (people.length === 0) {
  return <h2>Loading Please Wait...</h2>
} else {
    return(
        <div className="people">
            <h2>List of People</h2>
            {
            people.map((people, key) => (
                <div key={people.name} onClick={()=>showPeople(key)} className="card">
                <h3>{people.name}</h3>
                <p>Height: {people.height}cm</p>
                <p>Mass: {people.mass}kg</p>
                <p>Birth Year: {people.birth_year}</p>
                <p>Gender: {people.gender}</p>
                </div>
            ))
            }
        </div>
    )
}}