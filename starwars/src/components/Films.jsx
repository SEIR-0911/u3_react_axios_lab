import { useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from '../../global'


const FilmsList = () => {
    
    const [films, setFilms] = useState([]);
    
  
    useEffect(() => {
      const getFilms = async () => {
        let response1 = await axios.get(`${BASE_URL}/films`);
        setFilms(response1.data.results);
        console.log(response1.data.results);
      };
      getFilms();
    }, []);
  
    if (films.length === 0) {
      console.log("loading...");
      return (
        <div className='film'>
          <h3>loading...</h3>
        </div>
      );
    } else {
      return (
        <div className='film'>
          {films.map((film, index) => (
            <div className="filminfodiv" key={index}>
              <h2>Name: {film.title}</h2>

            </div>
          ))}  
        </div>
      );
    }
  };
  
  export default FilmsList;