import { Link } from "react-router-dom"

const Nav = () => {

    return(
        <nav>
            <Link to="/">
                <div className="home-nav">Home</div>
            </Link>
        <div className="Nav">            
            <Link to="/films"><div className="link-nav">Films</div></Link>
            <Link to="/people"><div className="link-nav">People</div></Link>
            <Link to="/planets"><div className="link-nav">Planets</div></Link>
            <Link to="/species"><div className="link-nav">Species</div></Link>
            <Link to="/starships"><div className="link-nav">Starships</div></Link>
            <Link to="/vehicles"><div className="link-nav">Vehicles</div></Link>
        </div>
    
 </nav>
    )
}

export default Nav