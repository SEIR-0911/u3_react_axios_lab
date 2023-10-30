import { useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from '../../global'


const CharacterList = () => {
    
    const [character, setCharacter] = useState([]);
    
  
    useEffect(() => {
      const getCharacter = async () => {
        let response1 = await axios.get(`${BASE_URL}/people`);
        setCharacter(response1.data.results);
        console.log(response1.data.results);
      };
      getCharacter();
    }, []);
  
    if (character.length === 0) {
      console.log("loading...");
      return (
        <div className='Character'>
          <h3>loading...</h3>
        </div>
      );
    } else {
      return (
        <div className='character'>
          {character.map((character, index) => (
            <div className="characternfodiv" key={index}>
              <h2>Name: {character.name}</h2>

            </div>
          ))}  
        </div>
      );
    }
  };
  
  export default CharacterList;