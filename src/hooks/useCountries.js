import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countires.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  const filterCountries = () => {
    if (continent === 'All') return countries;
    return countries.filter((country) => country.continent === continent);
  };
  return { filterCountries, continent, setContinent };
}
