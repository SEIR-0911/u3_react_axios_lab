import { Link } from 'react-router-dom'

function Nav () {
    return (
        <div className="Navbar">
            <button><Link to="/">Home</Link> </button>
            <button><Link to="/FilmsList"> Films</Link></button>
            <button><Link to="/PeopleList"> People</Link></button>
            <button><Link to="/PlanetsList"> Planets</Link></button>
            <button><Link to="/SpeciesList"> Species</Link></button>
            <button><Link to="/StarshipList"> Starships</Link></button>
            <button><Link to="/VehiclesList"> Vehicles</Link></button>
        </div>
    )
}

export default Nav