import { Link } from "react-router-dom"

const Nav = () => {
    return <div className="Navbar">
        <Link to="/starshiplist"> Starships </Link>
        <Link to="/filmslist"> Films </Link>
        <Link to="/peopleList"> People </Link>
        <Link to="/planetList"> Planets </Link>
        <Link to="/"> Home </Link>
    </div>
}

export default Nav