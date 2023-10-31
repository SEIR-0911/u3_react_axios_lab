import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function StarshipPage (props) {
    console.log(props)
    let { name } = useParams()

    const [starship, setStarship] = useState('')

    useEffect(() => {
        let selectedStarship = props.starships.find((ship) => ship.name === name)
        setStarship(selectedStarship)
    }, [props.starships, name])

    return starship ? (
        <div className="ship-outer">
            <div className="ship-detail">
                <h1 className="page-head starship-head">{starship.name}</h1>
                <div className="ship-info">
                    <div>Manufactor: {starship.manufacturer}</div>
                    <div>Model: {starship.model}</div>
                    <div>Cost in Credits: {starship.cost_in_credits}</div>
                    <div>Length: {starship.length}</div>
                    <div>Max Speed: {starship.max_atmosphering_speed}</div>
                    <div>Crew: {starship.crew}</div>
                    <div>Passengers: {starship.passengers}</div>
                    <div>Cargo Capacity: {starship.cargo_capacity}</div>
                    <div>Consumables: {starship.consumables}</div>
                    <div>Hyperdrive Rating: {starship.hyperdrive_rating}</div>
                    <div>Class: {starship.starship_class}</div>
                </div>
            </div>
            <button className="go-back"><Link to='/starships' className="link">Back to Starships</Link></button>
        </div>
    ) : null;
}