import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header () {
    return (
        <div className="header">
            <div className="title-nav">
                <h1><Link to="/" className="head-link">Star Wars</Link></h1>
                <Nav />
            </div>
        </div>
    )
}