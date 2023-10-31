import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function StarshipList() {
  // State to hold the list of starships
  const [starShips, setStarShips] = useState(null)

  // useEffect to fetch starship data when the component mounts
  useEffect(() => {
    const getStarShips = async ()  =>  {
        const response =   await axios.get("https://swapi.dev/api/starships")
        // Update the state with the starship data from the API response
        setStarShips(response.data.results)
    }
    getStarShips()
  }, [])

  let navigate = useNavigate()

  // Function to navigate to the details page for a specific starship
  const showShip = (starshipId) => {
    navigate(`/starships/${starshipId}`)
  }
  return starShips ? (
    <div className="starship">
        <h1>List of Starships</h1>
      {/* Map over the list of starships and display each one */}
      {starShips.map((StarShip_id) => {
        // Extract the starshipId from the URL using regular expression
        const starshipId = StarShip_id.url.match(/(\d+)\/$/)[1];//Extract the numeric part from the URL (Reverse Engineered)
        return (
          <div key={starshipId} onClick={() => showShip(starshipId)} className="starshipId-Card">
            <h3>{StarShip_id.name}</h3>
          </div>
        )
      })}
    </div>
  ) : 
    <h3>Loading Starships Please Wait...</h3>
}
export default StarshipList;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BASE_URL } from "../globals";
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom"; // Import useParams

// const StarshipList = () => {
//     const [starships, setStarships] = useState([]);
//     const { id } = useParams(); // Define 'id' using useParams

//     useEffect(() => {
//         const getStarships = async() => {
//             const response = await axios.get(`${BASE_URL}/starships/`);
//             setStarships(response.data.results);
//             console.log(response);
//         }
//         getStarships();
//     }, []);

//     if (starships.length === 0) {
//         return <h1> Loading Please Wait...</h1>;
//     } else {
//         return (
//             <div className="starship">
//                 <div><h1>Starships Names</h1></div>
//                 {
//                     starships.map((starship, key) => (
//                         <div key={key}>
//                             <Link to={`/starships/${id}`}> <h3>{starship.name}</h3> </Link>
//                         </div>
//                     ))
//                 }
//             </div>
//         );
//     }
// }
// export default StarshipList;
