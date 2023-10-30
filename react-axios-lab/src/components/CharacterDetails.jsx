import { useState, useEffect } from "react"
import { BASE_URL } from "../global"
import { useParams, Link } from "react-router-dom"
import axios from "axios"


export default function CharacterDetails() {

    const [character, setCharacter] = useState()

    let {id} = useParams()

    useEffect(()=>{
        const getCharacter = async() => {
            const response = await axios.get(`${BASE_URL}/people`)
            setCharacter(response.data.results[id])
        }
        getCharacter()
    })

    return character ?(
        <div className="detail">
            <h2>Name: {character.name}</h2>
            <h4>Gender: {character.gender}</h4>
            <h4>Birthdate: {character.birth_year}</h4>
            <h4>Height: {character.height}</h4>
            <h4>Mass: {character.mass}</h4>
            
            <Link to='/characters'>Return to Character List</Link>

        </div>
    ) : <h3>Loading...</h3>
}