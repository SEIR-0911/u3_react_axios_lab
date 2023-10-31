import { Link, useNavigate } from 'react-router-dom'

export default function Planets (props) {
    let navigate = useNavigate()
    const showPlanet = (planet) => {
        navigate(`${planet.name}`)
    }
    // console.log(props)
    if (props.planets.length === 0) {
        return (
            <h2 className="loading">loading...</h2>
        )
    } else {
        return (
            <div className="planets-outer">
                <h1 className="page-head planet-head">Planets</h1>
                <div className="outer">
                    {props.planets.map((planet, index)=>(
                        <div className="planets-card card" onClick={() => showPlanet(planet)} key={index}>
                            <h2>{planet.name}</h2>
                            <div className="planets-basics">
                                <div>Climate: {planet.climate}</div>
                                <div>Terrain: {planet.terrain}</div>
                                <div>Population: {planet.population}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="go-back"><Link to="/">Home</Link></button>
            </div>
        )
    }
}