import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CharactersList() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/people");
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    getCharacters();
  }, []);

  let navigate = useNavigate();
  const showCharacter = (characterId) => {
    navigate(`/characters/${characterId}`);
}
  return characters ? (
    <div className="character">
      <h1>List of Characters</h1>
      {characters.map((character) => {
        const characterId = character.url.match(/(\d+)\/$/)[1];
        return(
        <div key={characterId} onClick={()=> showCharacter(characterId)} className="card">
          <h3>{character.name}</h3>
        </div>
        )
      })}
    </div>
  ) : (
    <h3>Loading Characters...</h3>
  );
}

export default CharactersList;
