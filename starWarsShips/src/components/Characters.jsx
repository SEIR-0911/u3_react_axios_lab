import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState(null);
  // this should be a single movie object once you've select one

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(`https://swapi.dev/api/people/`);
      console.log(response.data.results);
      setCharacters(response.data.results);
    };

    getCharacters();
  }, []);

  let navigate = useNavigate()

  const showCharacter = (key) => {
    //Navigate appends an ID to our existing route
      navigate(`${key}`)
  }


  return (
    <div>
      {characters.map((character, key) => (
        <div onClick={() => showCharacter(key)} key={key} >
        <p>{character.name}</p>
        
        </div>
      ))}
    </div>
  );
};

export default Characters;
