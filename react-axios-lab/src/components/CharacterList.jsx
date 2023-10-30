import { useState, useEffect } from "react"
import { BASE_URL } from "../global"
import axios from "axios"
import { useNavigate } from "react-router"




export default function CharacterList(){

    const[characters, setCharacters] = useState([])

    useEffect(() => {
        const getCharacters = async () => {
            const response = await axios.get(`${BASE_URL}/people/`)
            setCharacters(response.data.results)
        }
        getCharacters()
    },[])

    let navigate = useNavigate()

    const showCharacters = (key) => {
        navigate(`${key}`)
    }
    return characters ?(
        <div className="CharacterList">
            <h2>Character List</h2>
            {characters.map((character, key) => (
                <div key={key} onClick={()=>showCharacters(key)} className="card">
                    <h3>{character.name}</h3>
                </div>
            ))}
        </div>
    ) : <h3>Loading...</h3>
}