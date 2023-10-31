import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../global'
import axios from 'axios'

const CharacterDetails = () => {

    let { id } = useParams()

    const [characters, setCharacters] = useState('')

    useEffect(() => {
        const getCharacters = async() => {
            const response = await axios.get(`${BASE_URL}/people`)
            setCharacters(response.data.results[id])
        }
        getCharacters()
    }, [])

    return characters ? (
        <div className='detail'>
            <h2>Name: {characters.name}</h2>
            <h4>Birthdate: {characters.birth_year}</h4>
            <h4>Height: {characters.height}</h4>
            <h4>Eye Color: {characters.eye_color}</h4>
            <h4>Hair Color: {characters.hair_color}</h4>
            <h4>Gender: {characters.gender}</h4>
            <button className='button-30'>
                <Link to='/characters'> Return to Characters List</Link>
            </button>
        </div>
    ) : <h3>Finding Characters....</h3>
}

export default CharacterDetails