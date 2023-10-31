import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios"

import { BASE_URL } from '../globals'

export default function PeopleDetails(){

        //set up the individual people in state
        const [people, setPeople] = useState()

        //setting up the param to pull to be the people's ID
        let {id} = useParams()

        useEffect(() => {
            const getPeople = async() => {
                const response = await axios.get(`${BASE_URL}people/`)
                setPeople(response.data.results[id])
            }
            getPeople()
        },[])

    return people ? (
        <div className="detail">
            <h2 className="detail-title">{people.name}</h2>
                <ul>
                    <li>Height: {people.height}</li>
                    <li>Mass: {people.mass}</li>
                    <li>Hair Color: {people.hair_color}</li>
                    <li>Skin Color: {people.skin_color}</li>
                    <li>Eye Color: {people.eye_color}</li>
                    <li>Birth Year: {people.birth_year}</li>
                    <li>Gender: {people.gender}</li>
                    <li>Home World: {people.homeworld}</li>
                    <li>Films: {people.films}</li>
                    <li>Species: {people.species}</li>
                    <li>Vehicles: {people.vehicles}</li>
                    <li>Starships: {people.starships}</li>
                </ul>
                <button><Link to="/peoples">Return to Character List</Link></button>
        </div>
    ) : <h3>Finding character...</h3>
}