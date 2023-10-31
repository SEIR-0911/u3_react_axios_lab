import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import axios from 'axios'

      export default function StarshipList (){
        let navigate =useNavigate()
        const [starships, setStarships] = useState([])

        useEffect(() => {
            const getStarShips = async ( ) => {
                const response = await axios.get(`${BASE_URL}/starships`)
                setStarships(response.data.results)
            }
            getStarShips()
        }, [])

            const showStarship = (key) => {
                navigate(`${key}`)
            }


        
    return starships ?(
            <div className="starshipList">
                <h1 className="page-title">Starships</h1>
                
            {starships.map((starship, key) => (
                <div key={key} onClick={() =>showStarship(key)} className="card">
                    <div id="itm-card">
                        <h3>{starship.name}</h3>
                        <button onClick={() => (navigate(`/StarshipPage/${starship.id}`))}>More Info</button>
                        </div>
                    </div>
            ))}
        </div>
    ) : <h3>Content loading...</h3>
        
                   
        }