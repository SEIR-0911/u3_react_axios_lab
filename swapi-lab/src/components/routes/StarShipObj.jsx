import { useNavigate } from 'react-router-dom'

export default function StarShipObj({ starships }) {
    
    let navigate = useNavigate()

    function showStarship(starship){
        navigate(`${starship.name}`)
    }

    return (
        starships.length >= 1 ?
            starships.map((starship) => {
                return (
                    <div className='card' key={starship.name} onClick={()=>showStarship(starship)}>
                        <h1>{starship.name}</h1>
                    </div>
                )
            }) : <h1>Loading Starships...</h1>
    )
}
