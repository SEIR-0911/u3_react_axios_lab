import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'

export default function PlanetPage (props) {
    // console.log(props)
    let { name } = useParams()

    const [planet, setPlanet] = useState('')

    useEffect(() => {
        let selectedPlanet = props.planets.find((planet) => planet.name === name)
        setPlanet(selectedPlanet)
    }, [props.planets, name])

    return (
        <div className="planet-outer">
            <h1>{planet.name}</h1>
        </div>
    )
}