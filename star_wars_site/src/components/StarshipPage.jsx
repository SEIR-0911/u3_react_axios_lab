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
                <div className="ship-basics">
                    <div>Manufactor: {starship.manufacturer}</div>
                    <div>Model: {starship.model}</div>
                    <div>Class: {starship.class}</div>
                </div>
            </div>
            <button className="go-back"><Link to='/starships'>Back to Starships</Link></button>
        </div>
    ) : null;
}