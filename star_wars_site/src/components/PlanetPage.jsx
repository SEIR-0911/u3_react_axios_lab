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
        <div className="planets-outer">
            <h1 className="page-head planet-head">{planet.name}</h1>
            <div className="planet-info">
                <div>Rotation Period: {planet.rotation_period}</div>
                <div>Orbital Period: {planet.orbital_period}</div>
                <div>Diamter: {planet.diameter}</div>
                <div>Climate: {planet.climate}</div>
                <div>Gravity: {planet.gravity}</div>
                <div>Terrain: {planet.terrain}</div>
                <div>Surface Water: {planet.surface_water}</div>
                <div>Population: {planet.population}</div>
            </div>
            <button className="go-back"><Link to="/planets" className="link">All Planets</Link></button>
        </div>
    )
}