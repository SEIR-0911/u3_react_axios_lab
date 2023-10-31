import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from "axios"
import { BASE_URL } from "../globals"

export default function PeopleDetails() {

const [people, setPeople] = useState()

let {id} = useParams()

useEffect(() => {
    const getPeople = async() => {
        const response = await axios.get(`${BASE_URL}people`)
        setPeople(response.data.results[id])
    }
    getPeople()
}, [])

return people ? (
    <div className="detail">
        <h3>{people.name}</h3>
        <p>Height: {people.height}cm</p>
        <p>Mass: {people.mass}kg</p>
        <p>Birth Year: {people.birth_year}</p>
        <p>Gender: {people.gender}</p>
        <Link to="/PeopleList"> Return to People list</Link>
    </div>
) : <h2 className="Finding">Finding People...</h2>

}