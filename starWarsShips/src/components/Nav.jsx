import { Link } from "react-router-dom";

const Nav = () => {
    return(
  <div>
     <Link to="/">
      <h2> Home </h2>
    </Link>
    <Link to="/starship">
      <h2> Starships</h2>
    </Link>
    <Link to="/films">
      <h2> Films</h2>
    </Link>
    <Link to="/planets">
      <h2> Planets</h2>
    </Link>
    <Link to="/characters">
      <h2> Characters</h2>
    </Link>
   
  </div>
    )
};

export default Nav;
