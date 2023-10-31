import { Link } from 'react-router-dom'

export default function Nav (){
    return (
        
        <div className="nav">

            <div id="nav-itm"><Link to="/"> Home </Link></div>
            <div id="nav-itm"><Link to="/StarshipList"> Starships </Link></div>
            <div id="nav-itm"><Link to="/Films"> Films </Link></div>
            <div id="nav-itm"><Link to="/Planets"> Planets </Link></div>
            <div id="nav-itm"><Link to="/Characters"> Characters </Link></div>
        </div>
)
}