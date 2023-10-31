import { Link } from "react-router-dom";
import StarshipList from "./StarshipList";

const Nav = () => {
  return (
    <div className='Navbar'>
      <ul>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/starships' element={<StarshipList />}>
            Starships
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
