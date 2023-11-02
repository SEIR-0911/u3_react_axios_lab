import { useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from '../../global'
import { useNavigate } from "react-router-dom";


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

    let navigate = useNavigate()

    const showCharacter = (key) => {
      navigate(`${key}`)
    }
  
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
          {character.map((character, key) => (
            <div className="characternfodiv" onClick={()=>showCharacter(key)} key={key}>
              <h2>Name: {character.name}</h2>

            </div>
          ))}  
        </div>
      );
    }
  };
  
  export default CharacterList;