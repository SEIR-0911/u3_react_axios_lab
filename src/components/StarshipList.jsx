import { useEffect } from 'react'

const StarshipList = (props) => {
    if (!props.starships) {
        return 
        <h2>Loading starships please wait...</h2>
    } else {
        return (
            <div>
                <h2>Starships</h2>
                {props.starships.map((starship) => (
                    <div key = {starship.name}>
                        <h3>{starship.name}</h3>
                        <ul>
                            <li>Model: {starship.model}</li>
                            <li>Manufacturer: {starship.manufacturer}</li>
                            <li>Cost In Credits: {starship.cost_in_credits}</li>
                            <li>Length: {starship.length}</li>
                            <li>Max. Atmosphering Speed: {starship.max_atmosphering_speed}</li>
                            <li>Crew: {starship.crew}</li>
                            <li>Passengers: {starship.passengers}</li>
                            <li>Cargo Capacity: {starship.cargo_capacity}</li>
                            <li>Consumables: {starship.consumables}</li>
                            <li>Hyperdrive Rating: {starship.hyperdrive_rating}</li>
                            <li>MGLT: {starship.MGLT}</li>
                            <li>Starship Class: {starship.starship_class}</li>
                            <li>Pilots: {starship.pilots}</li>
                            <li>Filmsdata: {starship.films}</li>
                            <li>Films: {starship.filmTitles}</li>
                        </ul>
                    </div>
                ))}

            </div>
        )}   
}

export default StarshipList