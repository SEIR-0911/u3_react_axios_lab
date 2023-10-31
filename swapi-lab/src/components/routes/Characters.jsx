import { useState, useEffect } from 'react'
import { BASE_URL } from '../../globals'
import CharacterObj from './CharacterObj'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Characters() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {

        const getCharacters = async () => {
            const results = await axios.get(`${BASE_URL}/people/`)
            // console.log(results)
            setCharacters(results.data.results)
        }
        getCharacters()

    }, [])

    return (
        <div className='list'>
             <Link className='back' to='/'>Back</Link>
            <CharacterObj characters={characters} />
        </div>
    )
}