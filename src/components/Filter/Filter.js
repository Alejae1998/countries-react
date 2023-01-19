export default function Filter({ continent, setContinent }) {
  return (
    <select
      className="continent-filter"
      value={continent}
      onChange={(e) => {
        setContinent(e.target.value);
      }}
    >
      <option value="All">All</option>
      <option value="North America">North America</option>
      <option value="South America">South America</option>
      <option value="Europe">Europe</option>
      <option value="Africa">Africa</option>
      <option value="Antarctica">Antartica</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
