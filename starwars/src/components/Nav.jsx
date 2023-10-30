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
          <Link to='/people'> People </Link>
        </li>
        <li>
          <Link to='/films'> Films </Link>
        </li>
        <li>
          <Link to='/StarshipList' element={<StarshipList />}>
            Starships
          </Link>
        </li>
        <li>
          <Link to='/plants'> Plants </Link>
        </li>
   
      </ul>
    </div>
  );
};

export default Nav;
