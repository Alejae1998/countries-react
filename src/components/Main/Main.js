import { useCountries } from '../../hooks/useCountries.js';
import CountryCard from '../CountryCard/CountryCard.js';
import Filter from '../Filter/Filter.js';

export default function Main() {
  const { continent, setContinent, filterContinents } = useCountries();
  return (
    <main>
      <h2>Flags of the world by: Alchemy codeLab</h2>
      <Filter continent={continent} setContinent={setContinent} />
      <div>
        {filterContinents().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}
