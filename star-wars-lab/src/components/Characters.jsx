import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import axios from 'axios'

      export default function Characters (){
        let navigate =useNavigate()
        const [characters, setCharacters] = useState([])

        useEffect(() => {
            const getCharacters = async ( ) => {
                const response = await axios.get(`${BASE_URL}people/`)
                setCharacters(response.data.results)
            }
            getCharacters()
        }, [])

            const showCharacter = (key) => {
                navigate(`${key}`)
            }


        
    return characters ?(
            <div className="characters">
                <h1 className="page-title">Characters</h1>
                
            {characters.map((character, key) => (
                <div key={key} onClick={() =>showCharacter(key)} className="card">
                        <div id="itm-card">
                            <h3>{character.name}</h3>
                            <button onClick={() => (navigate(`/CharacterPage/${character.id}`))}>More Info</button>
                        </div>
                </div>
            ))}
        </div>
    ) : <h3>Content loading...</h3>
        
                   
        }