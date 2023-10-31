import axios from "axios"
import { useState, useEffect } from 'react'
import { BASE_URL } from "../../globals"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function CharacterDetails() {

    const initialState = {
        name: ''
    }
    const { name } = useParams()
    const [character, setCharacter] = useState(initialState)

    useEffect(() => {
        async function getPerson() {
            const result = await axios.get(`${BASE_URL}people/?search=${name}`)

            setCharacter(result.data.results[0])
        }

        getPerson(name)

    }, [character])

    return (character !== initialState ?
        <div className='details'>
             <Link className='back' to='/characters'>Back</Link>
            <h1 className='detailName'>{name}</h1>
            <ul>
                <li className='listItem'>Height: {character.height}</li>
                <li className='listItem'>Birth Year: {character.birth_year}</li>
                {/* <li className='listItem'>Home Planet: {planets.name or something, using the api route in the person object}</li>
                            <li className='listItem'>Vehicle proficiencies: {starship and/or vehicles? conditional rendering within conditional rendering?}</li> */}
            </ul>
        </div> : <h1>Loading data...</h1>
    )
}

