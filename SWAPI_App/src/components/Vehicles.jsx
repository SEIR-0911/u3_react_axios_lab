//importing packages/libraries
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../global";

let response;

//main function:
const Vehicles = () => {
  //setting up useState and setting to an empty array before our axios call
  const [vehicles, setVehicles] = useState([]);

  //setting up useEffect, making it so axios is called only when the page renders
  useEffect(() => {
    const getVehicles = async () => {
      response = await axios.get(`${BASE_URL}/vehicles`);
      console.log(response);
      setVehicles(response.data.results);
    };
    getVehicles(); //calling the inner getVehicles function
  }, []);

  //incorporating useNavigate to dynamically render URLs that will get us to our vehicle details
  let navigate = useNavigate();

  function showVehicles(index) {
    navigate(`${index}`);
  }

  if (!response) {
    return <h2>Loading Vehicles....</h2>; //this is a guard operator that will show something while something else is missing or loading
  } else {
    return (
      <div className="vehicles">
        {vehicles.map((vehicles, index) => (
          <div
            className="vehicle-card"
            onClick={() => showVehicles(index)}
            key={index}
          >
            <h3>{vehicles.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default Vehicles;
