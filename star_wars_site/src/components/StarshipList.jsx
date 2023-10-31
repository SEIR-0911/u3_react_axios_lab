import { Link, useNavigate } from "react-router-dom"

export default function StarshipList (props) {
    let navigate = useNavigate()
    const showStarship = (ship) => {
        navigate(`${ship.name}`)
    }

    // console.log(props)
    if (!props.starships.length === 0) {
        return (
            <h2 className="loading">loading...</h2>
        )
    } else {
        return (
            <div className="starship-outer">
                <h1 className="page-head starship-head">Starships</h1>
                <div className="outer">
                    {props.starships.map((ship, index)=>(
                        <div className="starship-card card" onClick={() => showStarship(ship)} key={index}>
                            <h2>{ship.name}</h2>
                            <div className="ship-basics">
                                <div>Manufactor: {ship.manufacturer}</div>
                                <div>Model: {ship.model}</div>
                                <div>Class: {ship.class}</div>
                            </div>
                            <div className="ship-techinal">
                                <h3>Technical Stats</h3>
                                <div>Length: {ship.length}</div>
                                <div>Max Speed: {ship.max_atmosphering_speed}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="go-back"><Link to="/">Home</Link></button>
            </div>
        )
    }
}