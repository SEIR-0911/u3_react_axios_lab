import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../global'
import { useNavigate } from 'react-router-dom'


let response
const Characters = (props) => {


    const [characters, setCharacters] = useState([])
    
    useEffect(() => {
        const getCharacters = async () => {
            response = await axios.get(`${BASE_URL}/people`)
            console.log(response)
            setCharacters(response.data.results)
        }
        getCharacters()
    }, [])

    let navigate = useNavigate()

    const showCharacters = (index) => {
        navigate(`${index}`)
    }


    if( !response ) {
        return <h2>Let the Force be with you....</h2> //this is a guard operator that will show something while something else is missing or loading
    } else {
        return(
            <div className="characters">
                {
                    characters.map((characters, index) => (
                        <div className='character-card' onClick={() => showCharacters(index)} key={index}>
                            <h3>{characters.name}</h3>
                        </div>
                    ))}
            </div>
            )
    }
}

export default Characters