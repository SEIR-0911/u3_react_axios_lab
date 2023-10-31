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
  return <h1 className="Loading">Loading Please Wait...</h1>
} else {
    return(
        <div className="people">
            
            {
            people.map((people, key) => (
                <div key={people.name} onClick={()=>showPeople(key)} className="card">
                <h3>{people.name}</h3>
                </div>
            ))
            }
        </div>
    )
}}