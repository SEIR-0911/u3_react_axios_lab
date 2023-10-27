import { Link } from "react-router-dom";
import Starships from "./Starships";

const Nav = () => {
  return (
    <div className='Navbar'>
          <Link to='/starships' element={ <Starships/>}>Starships</Link>
      <Link to='/'> Home </Link>
    </div>
  );
};

export default Nav;
