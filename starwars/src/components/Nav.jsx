import { Link } from "react-router-dom";
import StarshipList from "./StarshipList";
import People from "./People";

const Nav = () => {
  return (
    <div className='navbar'>
      <ul className='nav-ul'>
        <li>
          <Link className='nav-li' to='/'>
            Home
          </Link>
        </li>
        |
        <li>
          <Link className='nav-li' to='/starships' element={<StarshipList />}>
            Starships
          </Link>
        </li>
        |
        <li>
          <Link className='nav-li' to='/people' element={<People />}>
            People
          </Link>
        </li>
        {/* |
        <li>
          <Link className='nav-li' to='/people' element={<People />}>
            Films
          </Link>
        </li>
        |
        <li>
          <Link className='nav-li' to='/people' element={<People />}>
            Planets
          </Link> 
        </li>*/}
      </ul>
    </div>
  );
};

export default Nav;
