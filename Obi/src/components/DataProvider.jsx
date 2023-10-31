import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataContext } from './DataContext';

export const DataProvider = ({ children }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get("https://swapi.dev/api/films");
      setFilms(response.data.results);
    };
    getFilms();
  }, []);

  return (
    <DataContext.Provider value={films}>
      {children}
    </DataContext.Provider>
  );
};
