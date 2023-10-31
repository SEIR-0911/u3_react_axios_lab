//importing the packages/libraries that we'll need
import axios from "axios"; //package
import { useState, useEffect } from "react"; //react library
import { BASE_URL } from "../global"; //variable in our app that we created
import { useNavigate } from "react-router-dom"; //React Router library

//Q. why does response have to be initiates outside of the function (inside causes an error)
//answer: because where it is within useeffect will keep it within that scope only but we need to call it later down outside of that scope
let response

const Planets = () => {
  //setting initial state: Q.: WHY DO WE NEED TO SET TEH PLANET'S INITIAL STATE TO 0?
  //WHY DO WE NEED STATE HERE, WHY NOT JUST USE EFFECT?
  //we don't need state here! :-)
  const [planets, setPlanets] = useState([]);

  //useEffect has the axios call and specifies when axios will be called (inside of the [])
  //Q. Can you explain why a function is being passed into Use Effect?
  //Why a function inside of a function?
  //answer: first argument is an anonymous function (just the way it is: axios calls require (async) functions) that makes the axios call, second argument defines when the axios call is made
  useEffect(() => {
    const getPlanets = async () => {
      response = await axios.get(`${BASE_URL}/planets`);
      console.log(response);
      setPlanets(response.data.results);
    };
    getPlanets();
  }, []);

  //Navigate allows us to navigate to the url that ends in the specific index of the planet that was clicked on
  let navigate = useNavigate();

  //use navigate puts the parameter at the end of the url
  //The routes in main dictate what happens when this url is clicked
  function showPlanet(index) {
    navigate(`${index}`);
  }

  if (!response) {
    //this is a guard operator that will show something while something else is missing or loading
    return <h2>Loading Planets...</h2>; //second half of guard operator
  } else {
    //this will show once our axios call has been made and we have a response
    return (
      <div className="planets">
        {planets.map((planet, index) => (
          <div
            className="planet-card"
            //Q.: how does showPlanet(index) know to grab the index of the item that's clicked?
            //answer: the index was put in as a parameter, and its understood by the computer that 
            //the second parameter will be the index of the element. OnClick executes the showPlanet 
            //function passing the index value as a parameter from the data that was clicked
            onClick={() => showPlanet(index)}
            key={index}
          >
            <h3>{planet.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default Planets;
