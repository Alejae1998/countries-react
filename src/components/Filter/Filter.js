export default function Filter({ continent, setContinent }) {
  return (
    <select
      className="continent-filter"
      value={continent}
      onChange={(e) => {
        setContinent(e.target.value);
      }}
    >
      <option></option>
    </select>
  );
}
