import { Link } from "react-router-dom"

export default function Nav () {
    return(
        <div className="Nav">
            <Link to="/"><div>Home</div></Link>
            <Link to="/films"><div>Films</div></Link>
            <Link to="/people"><div>People</div></Link>
            <Link to="/planets"><div>Planets</div></Link>
            <Link to="/species"><div>Species</div></Link>
            <Link to="/starships"><div>Starships</div></Link>
            <Link to="/vehicles"><div>Vehicles</div></Link>


        </div>
    )
}