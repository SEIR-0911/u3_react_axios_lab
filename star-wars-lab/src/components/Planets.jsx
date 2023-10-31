import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { BASE_URL } from '../globals'
import axios from 'axios'

      export default function Planets (){
        let navigate =useNavigate()
        const [planets, setPlanets] = useState([])

        useEffect(() => {
            const getPlanets = async ( ) => {
                const response = await axios.get(`${BASE_URL}planets/`)
                setPlanets(response.data.results)
            }
            getPlanets()
        }, [])

            const showPlanet = (key) => {
                navigate(`${key}`)
            }


        
    return planets ?(
            <div className="planets">
                <h1 className="page-title">Planets</h1>
                
            {planets.map((planet, key) => (
                <div key={key} onClick={() =>showPlanet(key)} className="card">
                        <div id="itm-card">
                            <h3>{planet.name}</h3>
                            <button onClick={() => (navigate(`/PlanetPage/${planet.id}`))}>More Info</button>
                        </div>
                </div>
            ))}
        </div>
    ) : <h3>Content loading...</h3>
        
                   
        }