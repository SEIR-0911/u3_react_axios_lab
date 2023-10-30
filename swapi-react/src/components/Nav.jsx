import { Link } from 'react-router-dom'

function Nav () {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/StarshipList">Starships</Link>
            <Link to="/SpeciesList">Species</Link>
            <Link to="/PeopleList">People</Link>
            <Link to="/FilmsList">Films</Link>
            <Link to="/VehiclesList">Vehicles</Link>
            <Link to="/PlanetsList">Planets</Link>
        </div>
    )
}

export default Nav