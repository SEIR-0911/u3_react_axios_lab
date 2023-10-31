import { Link } from "react-router-dom";
//Create a Nav bar with a link to a "/starship" route,
//as well as a "/" route for your Landing page.

//creating links, like hrefs
export default function Nav() {
  return (
    <div className="navbar">
      <Link to="/starships"> Starships </Link>
      <Link to="/">Home</Link>
      <Link to="/Planets"> Planets </Link>
      <Link to="/Films"> Films </Link>
      <Link to="/Characters"> Characters </Link>
      <Link to="Vehicles"> Vehicles </Link>
    </div>
  );
}
