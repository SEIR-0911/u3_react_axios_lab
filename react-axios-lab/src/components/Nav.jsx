import { Link } from "react-router-dom"

export default function Nav(){
    return(
        <div className="Nav">
            <Link to="/"> Home </Link>
            <Link to="/starships"> Starships </Link>
            <Link to="/planets"> Planets </Link>
            <Link to="/films"> Films </Link>
            <Link to="/characters"> Characters </Link>
            <Link to="/vehicles"> Vehicles </Link>
        </div>
    )
}