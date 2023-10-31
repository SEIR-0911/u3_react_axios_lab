import { useNavigate } from "react-router-dom"

export default function PlanetObj({ planets }) {
    
    let navigate=useNavigate()

    function showPlanet(planet){
        navigate(`${planet.name}`)
    }

    return (
        planets.length >= 1 ?
            planets.map((planet) => (
                <div className='card' key={planet.name} onClick={()=> showPlanet(planet)}>
                    <h1>{planet.name}</h1>
                </div>
            )) : <h1>Loading Travel Locations...</h1>
    )
}