import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countires.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  const filterContinents = () => {
    if (continent === 'All') return countries;
    return countries.filter((country) => country.continent);
  };
  return { filterContinents, continent, setContinent };
}
